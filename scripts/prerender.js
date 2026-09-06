// scripts/prerender.js
//
// Statyczny prerendering pod kątem SEO (Lighthouse/Core Web Vitals liczą się
// dla realnych odwiedzających, nie tylko botów — patrz CLAUDE.md).
// Uruchamiany automatycznie jako "postbuild" po `npm run build`:
//  1. serwuje zbudowaną paczkę z build/ na lokalnym porcie,
//  2. dla każdej znanej trasy otwiera ją w prawdziwym Chrome (Playwright),
//     czeka aż strona się ustabilizuje i zapisuje w pełni wyrenderowany HTML
//     z powrotem do build/<trasa>/index.html,
//  3. src/index.js wykrywa taki gotowy HTML i "przejmuje" go przez
//     hydrateRoot zamiast renderować od nowa.
//
// Uwaga: karuzela opinii ma autoplay co 5s (Reviews.jsx) — capture musi się
// zdążyć zanim ten interwał pierwszy raz odpali, inaczej zapisany stan
// (index !== 0) nie zgadzałby się z tym, od czego zaczyna świeża hydracja
// u każdego kolejnego odwiedzającego. networkidle na tych stronach osiąga się
// w praktyce w ułamku sekundy, więc jest tu bezpieczny margines.

const path = require("path");
const fs = require("fs");
const http = require("http");
const { chromium } = require("playwright");

const BUILD_DIR = path.join(__dirname, "..", "build");
const PORT = 45123;

const ROUTES = [
  "/",
  "/home", // przekierowuje po stronie klienta na "/" (React Router) — mimo
  // to dostaje własny prerenderowany plik, żeby bezpośrednie wejście na ten
  // adres (nie przez nawigację w aplikacji) nie kończyło się 404.
  "/technika",
  "/ceny",
  "/gallery",
  "/druk-scienny-krakow",
];

const CHROME_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
];

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".map": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function startServer(originalIndexHtml) {
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const filePath = path.join(BUILD_DIR, urlPath);

    const isRealFile =
      fs.existsSync(filePath) && fs.statSync(filePath).isFile();

    if (isRealFile) {
      const ext = path.extname(filePath);
      res.setHeader(
        "Content-Type",
        MIME_TYPES[ext] || "application/octet-stream",
      );
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    // SPA fallback — każda nieznana ścieżka (w tym trasy, których jeszcze
    // nie zapisaliśmy w tym przebiegu) dostaje tę samą, niezmienioną kopię
    // powłoki z pamięci. Gdyby zamiast tego czytać build/index.html z dysku,
    // po pierwszej zapisanej trasie plik ten zawierałby już wyrenderowaną
    // (i niepasującą) treść poprzedniej strony — dokładnie to psuło hydrację
    // na kolejnych trasach.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(originalIndexHtml);
  });

  return new Promise((resolve) => {
    server.listen(PORT, () => resolve(server));
  });
}

function findChrome() {
  return CHROME_CANDIDATES.find((candidate) => fs.existsSync(candidate));
}

async function prerender() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("Brak build/ — uruchom najpierw `npm run build`.");
    process.exit(1);
  }

  const originalIndexHtml = fs.readFileSync(
    path.join(BUILD_DIR, "index.html"),
    "utf8",
  );

  const chromePath = findChrome();
  const server = await startServer(originalIndexHtml);
  const browser = await chromium.launch(
    chromePath ? { executablePath: chromePath } : {},
  );

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      const jsErrors = [];
      page.on("pageerror", (error) => jsErrors.push(error.message));

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle",
      });

      if (jsErrors.length > 0) {
        console.warn(`  [${route}] błędy JS podczas renderowania:`, jsErrors);
      }

      const html = await page.content();

      const outDir =
        route === "/" ? BUILD_DIR : path.join(BUILD_DIR, route.slice(1));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html);

      console.log(
        `✓ ${route} → build/${path.relative(BUILD_DIR, outDir) || "."}/index.html`,
      );

      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((error) => {
  console.error("Prerendering nie powiódł się:", error);
  process.exit(1);
});
