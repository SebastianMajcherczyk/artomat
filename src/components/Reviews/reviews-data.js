const path = process.env.PUBLIC_URL + "/Opinie";

export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/ifVxdtw9h93komDG6";

export const aggregateRating = {
  ratingValue: 5.0,
  reviewCount: 20,
};

export const reviews = [
  {
    id: "katarzyna-krcha",
    author: "Katarzyna Krcha",
    rating: 5,
    text: "Bardzo profesjonalna perfekcyjna usługa z ogromną dbałością o każdy szczegół. Dopracowane, zrobione wcześniejsze próby aby efekt końcowy był najpiękniejszy. Serdecznie polecam! Efekt niesamowity!",
    photo: `${path}/katarzyna-krcha.webp`,
  },
  {
    id: "urszula-kocot",
    author: "Urszula Kocot",
    rating: 5,
    text: "Bardzo profesjonale wykonanie nadruków. Dziękuję również za doradztwo przed wyborem motywów. Współpraca na najwyższym poziomie.",
    photo: `${path}/urszula-kocot.webp`,
  },
  {
    id: "marta-m",
    author: "Marta M.",
    rating: 5,
    text: "W imieniu Szkoły Podstawowej w Sance dziękujemy za piękny nadruk na ścianie w holu głównym naszej szkoły 💕 Firma Loftprint wykazała się profesjonalizmem oraz terminowo wykonała zlecenie a wykonany nadruk zachwyca uczniów i pracowników szkoły. Polecamy!...",
    photo: `${path}/marta-m.webp`,
  },
  {
    id: "edyta-trybus-broclawik",
    author: "Edyta Trybus-Broclawik",
    rating: 5,
    text: "Wydruk był prezentem niespodzianką dla córki. Wzbudził zachwyt nie tylko jej, ale też koleżanek. Pan Sebastian jest specjalistą, bardzo dokładnym i profesjonalnym. Wydruk cudowny, ostry, kolory żywe. Wszystko odbyło się sprawnie, bez bałaganu. To najlepszy prezent urodzinowy jaki mogłam wymyślić. Na pewno skorzystam ponownie i polecam.",
    photo: `${path}/edyta-trybus-broclawik.webp`,
  },
  {
    id: "lukasz-grzesiak",
    author: "Łukasz Grzesiak",
    rating: 5,
    text: "Bardzo dobrze wykonana usługa. Już druga. Wszystko w terminie i sprawnie.",
    photo: `${path}/lukasz-grzesiak.webp`,
  },
  {
    id: "artur-judzinski",
    author: "Artur Judziński",
    rating: 5,
    text: "Świetna robota, widać ogromne doświadczenie! 💪🙏💪...",
    photo: `${path}/artur-judzinski.webp`,
  },
  {
    id: "pael-sivent",
    author: "PAEL Sivent",
    rating: 5,
    text: "Wydruk wygląda naprawdę pięknie! Kolor jest doskonale dobrany, nadając wnętrzu przytulności i elegancji. Wydruk został wykonany precyzyjnie, bez żadnych niedociągnięć. Fachowa pomoc. Bardzo mi się podoba, robi wrażenie! Polecam!",
    // Realizacja "Witnica" — duża, efektowna, ale nie w pełni oddana na
    // dostępnych zdjęciach. Placeholder do podmiany na docelowy kadr.
    photo: `${path}/pael-sivent.webp`,
  },
  {
    id: "malgorzata-michalska",
    author: "Małgorzata Michalska",
    rating: 5,
    text: "Firma godna polecenia, rzetelność i profesjonalizm. Bardzo dobry kontakt z P. Sebastianem. Jesteśmy bardzo zadowoleni z wydruku na ścianie.",
    photo: `${path}/malgorzata-michalska.webp`,
  },
];

// Ten sam zestaw opinii jest też ręcznie zduplikowany jako JSON-LD
// (aggregateRating/review) w LocalBusiness w public/index.html — CRA nie
// szablonuje public/index.html w oparciu o JS, więc przy zmianie opinii
// trzeba zaktualizować obie te listy.
