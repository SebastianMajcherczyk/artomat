// Skrócona lista realizacji (identyfikatory z Gallery-data.js) pokazywana w
// sekcji Galeria na podstronie /druk-scienny-krakow, zamiast ogólnego
// FEATURED_GALLERY_IDS z Gallery.jsx. Lista ma zawsze co najmniej 9 pozycji
// (tyle co domyślna siatka na stronie głównej) - część to realizacje, które
// *treścią* nadruku nawiązują do Krakowa, reszta to wypełnienie tymi samymi
// realizacjami co na stronie głównej. W miarę przybywania kolejnych
// krakowskich realizacji podmieniaj nimi wypełniacz poniżej (nie dokładaj do
// listy - ona ma zostać przy 9, po prostu proporcja krakowskich rośnie).
// Analogiczny plik (np. Gallery-slask-ids.js) powstanie dla kolejnych
// podstron regionalnych.
export const krakowGalleryIds = [
  // Nawiązują treścią do Krakowa:
  41, // Krakow Airport Hotel
  8, // Krakowska Szkoła Tańca

  // Wypełniacz (te same realizacje co w FEATURED_GALLERY_IDS na stronie
  // głównej) - podmieniaj kolejne pozycje na krakowskie realizacje, gdy się
  // pojawią:
  35,
  30,
  28,
  14,
  22,
  29,
  39,
];
