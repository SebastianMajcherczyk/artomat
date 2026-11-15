// Realizacje Loftprint w Krakowie i okolicach - sekcja lokalnego SEO na
// /druk-scienny-krakow (zastępuje wcześniejszą, ogólną sekcję Galeria na
// tej podstronie). Zdjęcia: public/Lokalizacje/Krakow/*, celowo małe
// (ok. 600-1100px) i nie są tu powiększane - są ilustracją do tekstu, nie
// galerią do oglądania w pełnym rozmiarze.
//
// gallerySlug wskazuje na istniejący wpis w Gallery-data.js (link "Zobacz
// więcej zdjęć tej realizacji") - zostawione puste tam, gdzie dana
// realizacja nie ma jeszcze własnego wpisu w pełnej galerii, żeby nie linkować
// donikąd.
//
// facebookReelUrl - gotowe pole pod linki do rolek na Facebooku, celowo
// nieprzypisane: nie wiadomo jeszcze, która rolka odpowiada której
// realizacji poniżej. Dostępne, niewykorzystane jeszcze adresy:
//   https://www.facebook.com/reel/1571158454493076
//   https://www.facebook.com/reel/1723762048965103
//   https://www.facebook.com/reel/2654173614943800
//   https://www.facebook.com/reel/1074131187888631
//   https://www.facebook.com/reel/1768394611112894
// Po potwierdzeniu, która rolka pasuje do której realizacji, wystarczy
// uzupełnić facebookReelUrl przy odpowiednim obiekcie - link "Zobacz film
// z realizacji na Facebooku" pojawi się automatycznie.

const path = process.env.PUBLIC_URL + "/Lokalizacje/Krakow";

export const krakowRealizacje = [
  {
    slug: "krakow-airport-hotel",
    title: "Kraków Airport Hotel – wielkoformatowy mural inspirowany Krakowem",
    image: `${path}/Krakow-Airport-Hotel.webp`,
    width: 800,
    height: 696,
    alt: "Wielkoformatowy mural ze Smokiem Wawelskim – Kraków Airport Hotel",
    text: "W łączniku prowadzącym z parkingu Kraków Airport do hotelu Hilton Garden Inn wykonaliśmy panoramiczny mural o szerokości ponad 8 metrów. Jego głównym bohaterem jest Smok Wawelski, otoczony charakterystycznymi symbolami Krakowa i elementami nawiązującymi do podróży. Grafika wykorzystuje efekt przebicia ściany, tworząc iluzję przestrzeni wykraczającej poza rzeczywistą powierzchnię korytarza. Celem projektu było nie tylko uatrakcyjnienie hotelowego przejścia, ale również stworzenie miejsca zachęcającego podróżnych do wykonywania pamiątkowych zdjęć. Tak duży druk ścienny wymagał odpowiedniego przygotowania grafiki i zachowania spójności całej kompozycji na długości kilku metrów. To przykład, jak technologia druku UV pozwala wykorzystać dużą powierzchnię ściany do budowania charakteru miejsca i nawiązania do lokalnej tożsamości.",
    gallerySlug: "krakow-airport-hotel",
    facebookReelUrl: undefined,
  },
  {
    slug: "muzeum-narodowe",
    title: "Muzeum Narodowe w Krakowie – precyzyjny druk ścienny na ekspozycji",
    image: `${path}/Muzeum-Narodowe-Krakowa.webp`,
    width: 1066,
    height: 600,
    alt: "Druk ścienny tekstów i grafiki wystawienniczej – Muzeum Narodowe w Krakowie",
    text: "Nie każdy druk na ścianie musi być kolorowym muralem czy dekoracją wnętrza. W Muzeum Narodowym w Krakowie wykonaliśmy nadruki stanowiące element aranżacji ekspozycji numizmatycznej związanej ze zbiorami Czapskich. Projekt obejmował teksty informacyjne oraz delikatne, falujące linie graficzne, biegnące przez kolejne powierzchnie wystawiennicze. W tego rodzaju realizacjach szczególne znaczenie ma czytelność typografii i precyzja odwzorowania cienkich elementów. Grafika musi współgrać z eksponatami, gablotami i architekturą wnętrza, zamiast odciągać od nich uwagę. Druk ścienny UV może więc pełnić również funkcję informacyjną i wystawienniczą, co czyni go interesującym rozwiązaniem dla muzeów, galerii oraz instytucji kultury.",
    gallerySlug: null,
    facebookReelUrl: undefined,
  },
  {
    slug: "krakowska-szkola-tanca",
    title: "Krakowska Szkoła Tańca – logotyp bezpośrednio na ścianie",
    image: `${path}/Druk-scienny-Krakowska-Szkola-Tanca.webp`,
    width: 812,
    height: 600,
    alt: "Druk ścienny logo Krakowskiej Szkoły Tańca – realizacja Loftprint",
    text: "W siedzibie Krakowskiej Szkoły Tańca wykonaliśmy nadruk przedstawiający nazwę szkoły oraz jej charakterystyczny znak graficzny z parą tancerzy. Kompozycja łączy minimalistyczną typografię z dynamicznym, kolorowym motywem tanecznym. Całość została naniesiona bezpośrednio na jasną ścianę, bez stosowania naklejek, folii samoprzylepnej czy dodatkowych tablic. Dzięki temu logo stanowi integralny element wystroju wnętrza, a nie osobny przedmiot zawieszony na ścianie. Tego rodzaju druk UV sprawdza się szczególnie w recepcjach, poczekalniach i przestrzeniach, w których identyfikacja wizualna powinna być widoczna, lecz nie dominować nad otoczeniem. Realizacja w Krakowskiej Szkole Tańca pokazuje, że drukowanie na ścianach może służyć również prostemu, estetycznemu oznakowaniu miejsca.",
    gallerySlug: "krakowska-szkola-tanca",
    facebookReelUrl: undefined,
  },
  {
    slug: "empire-of-cocktails",
    title: "Empire of Cocktails – dekoracyjny druk ścienny na krakowskim Kazimierzu",
    image: `${path}/Empire-Of-Coctails-Krakow-Kazimierz.webp`,
    width: 600,
    height: 626,
    alt: "Dekoracyjny nadruk na ciemnej ścianie Empire of Cocktails na Kazimierzu w Krakowie",
    text: "Krakowski Kazimierz to miejsce, w którym charakter wnętrza odgrywa szczególnie ważną rolę w budowaniu atmosfery lokalu. W Empire of Cocktails wykonaliśmy nadruk na ciemnej ścianie, przedstawiający rozbudowaną scenę z postaciami i klasyczną architekturą. Monochromatyczna kompozycja, oparta na jasnych liniach i subtelnych detalach, dobrze współgra z nastrojowym oświetleniem oraz wystrojem lokalu. Wykonanie takiej grafiki na niemal czarnym podłożu wymaga zastosowania odpowiedniego białego poddruku, dzięki któremu jasne elementy pozostają widoczne. To przykład realizacji, w której nadruk na ścianie nie jest jedynie dodatkiem dekoracyjnym, lecz częścią koncepcji aranżacyjnej wnętrza. Technologia druku ściennego pozwala tworzyć podobne kompozycje również w barach, restauracjach i innych lokalach gastronomicznych Krakowa.",
    gallerySlug: "empire-of-coctails",
    facebookReelUrl: undefined,
  },
  {
    slug: "staybuddy",
    title: "StayBuddy Kraków – spójna identyfikacja wizualna prywatnego akademika",
    image: `${path}/Prywatny-Akademik-Staybuddy-Krakow.jpg`,
    width: 1066,
    height: 600,
    alt: "Nadruk na betonowej ścianie w prywatnym akademiku StayBuddy Kraków",
    text: "W prywatnym akademiku StayBuddy w Krakowie wykonaliśmy serię nadruków ściennych, które nadały indywidualny charakter różnym przestrzeniom obiektu. Dziesiątki metrów grafik pojawiły się w strefach wspólnych, miejscach wypoczynku, korytarzach oraz przestrzeniach przeznaczonych do aktywności studentów. Wszystkie kompozycje łączy spójna stylistyka oparta na minimalistycznej kresce, charakterystycznych postaciach i oszczędnych akcentach kolorystycznych. Poszczególnym grafikom towarzyszą krótkie hasła nawiązujące do studenckiego życia, nauki i rozwijania zainteresowań. Nadruki wykonaliśmy bezpośrednio na ścianach o różnej kolorystyce i fakturze, w tym również na surowym betonie, którego naturalna struktura pozostała widoczna. Realizacja pokazuje, że druk ścienny UV pozwala stworzyć rozbudowany, a jednocześnie konsekwentny system dekoracji i identyfikacji wizualnej całego obiektu. To przykład wykorzystania technologii druku na ścianie w Krakowie nie do wykonania pojedynczego muralu, lecz do nadania wspólnego charakteru wielu pomieszczeniom o różnych funkcjach.",
    gallerySlug: null,
    facebookReelUrl: undefined,
  },
  {
    slug: "restauracja-noah",
    title: "Restauracja Noah – grafika ścienna w sercu krakowskiego Kazimierza",
    image: `${path}/Restauracja-Noah-Krakow-Kazimierz.webp`,
    width: 800,
    height: 600,
    alt: "Grafika ścienna z panoramą Jerozolimy – restauracja Noah na Kazimierzu",
    text: "W restauracji Noah na krakowskim Kazimierzu wykonaliśmy dekoracyjny nadruk przedstawiający panoramę architektoniczną z charakterystycznymi budowlami Jerozolimy. Kompozycja opiera się na delikatnym rysunku konturowym, którego subtelna kolorystyka harmonizuje z naturalną fakturą ścian oraz eleganckim wyposażeniem lokalu. Grafika została umieszczona nad miejscami dla gości, stając się wyraźnym, ale nienarzucającym się elementem aranżacji sali. W przeciwieństwie do wielobarwnych murali taki druk na ścianie opiera swój efekt na precyzyjnym odwzorowaniu cienkich linii. Realizacja pokazuje, że druk ścienny w restauracji może nawiązywać do jej charakteru i tematyki bez konieczności wykorzystywania intensywnych kolorów czy dużych, wypełnionych powierzchni. To również przykład wykorzystania technologii UV w przestrzeni gastronomicznej krakowskiego Kazimierza.",
    gallerySlug: "restauracja-noah",
    facebookReelUrl: undefined,
  },
  {
    slug: "restauracja-scavolina",
    title: "Restauracja Scavolina w Wieliczce – włoski motyw na ścianie",
    image: `${path}/Restauracja-Scavolina-Wieliczka.webp`,
    width: 600,
    height: 698,
    alt: "Druk na ścianie z mapą Włoch – restauracja Scavolina w Wieliczce",
    text: "W pobliskiej Wieliczce wykonaliśmy nadruk ścienny dla restauracji Scavolina, nawiązujący do włoskiej architektury i kultury. Centralnym elementem kompozycji jest mapa Włoch, uzupełniona rysunkami charakterystycznych zabytków i miejsc. Grafika została naniesiona bezpośrednio na ścianę w ciepłym kolorze, dzięki czemu jej ciemne kontury dobrze komponują się z wystrojem sali restauracyjnej. Tego rodzaju nadruk pozwala wprowadzić do wnętrza motyw przewodni bez konieczności montażu dodatkowych dekoracji. Projekt pokazuje, jak druk UV na ścianie może wspierać identyfikację wizualną restauracji i podkreślać charakter serwowanej kuchni. Realizacje Loftprint wykonujemy nie tylko w samym Krakowie, ale również w Wieliczce i innych miejscowościach Małopolski.",
    gallerySlug: "restauracja-scavolina",
    facebookReelUrl: undefined,
  },
  {
    slug: "wisla-krakow",
    title: "Herb Wisły Kraków – druk ścienny w prywatnym wnętrzu",
    image: `${path}/Wisla-Krakow-Herb.webp`,
    width: 600,
    height: 650,
    alt: "Herb Wisły Kraków wydrukowany bezpośrednio na ścianie – Loftprint",
    text: "Nie wszystkie realizacje druku ściennego w Krakowie powstają dla firm i instytucji. Jednym z naszych zleceń było wykonanie dużego, kolorowego herbu Wisły Kraków w prywatnym pomieszczeniu. Już podczas pierwszej rozmowy telefonicznej klient zapytał, z której strony Błoń jesteśmy, co dla mieszkańców Krakowa jest pytaniem o dość jednoznacznym podtekście. Sam nadruk przedstawia charakterystyczną Białą Gwiazdę, klubowe barwy oraz koronę wieńczącą herb. Projekt został naniesiony bezpośrednio na jasną ścianę, bez potrzeby montowania osobnej dekoracji. To przykład wykorzystania druku UV do personalizacji prywatnego wnętrza zgodnie z zainteresowaniami jego właściciela. A przy okazji dowód, że w Krakowie nawet z pozoru zwykłe zamówienie może mieć swoją lokalną historię.",
    gallerySlug: null,
    facebookReelUrl: undefined,
  },
];
