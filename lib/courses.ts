// lib/courses.ts
import { useLocalStorage } from '@/hooks/useCourse';
import { Course, Lesson } from '@/types/course';
import { createContext, useContext } from 'react';

export const courses: Course[] = [
  {
    "id": 1,
    "title": "Podstawy HTML",
    "description": "Kurs wprowadzający do HTML, języka używanego do strukturyzowania treści na stronach internetowych. Nauczysz się, jak budować podstawową strukturę HTML, tworzyć różne elementy oraz jak używać atrybutów do dostosowywania wyglądu elementów.",
    "content": {
      "lessons": [
        {
          "id": 1,
          "title": "Wprowadzenie do HTML",
          "language": "html",
          "content": "HTML (HyperText Markup Language) to podstawowy język używany do tworzenia stron internetowych. Poznasz podstawowe elementy HTML, takie jak <html>, <head> i <body>, oraz sposób, w jaki tworzą one strukturę dokumentu.",
          "goal": "Poznasz podstawy HTML i zrozumiesz, jak zbudować prostą stronę internetową.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Moja Strona</title>\n</head>\n<body>\n<h1>Witaj Świecie!</h1>\n</body>\n</html>"
          ],
          "tasks": [
            "Utwórz prostą stronę HTML z nagłówkiem i akapitem.",
            "Dodaj tytuł strony oraz kilka elementów takich jak listy i linki."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML",
            "https://www.w3schools.com/html/"
          ],
          "editor": true
        },
        {
          "id": 2,
          "title": "Struktura dokumentu HTML",
          "language": "html",
          "content": "Dowiesz się, jak zbudować poprawną strukturę dokumentu HTML, w tym znaczenie elementów <html>, <head> i <body>. Nauczysz się również o tagach nagłówkowych, akapitach i listach.",
          "goal": "Zrozumiesz, jak struktura dokumentu HTML wpływa na renderowanie strony.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Dokument HTML</title>\n</head>\n<body>\n<h1>Witaj!</h1>\n<p>To jest akapit.</p>\n</body>\n</html>"
          ],
          "tasks": [
            "Zbuduj stronę HTML, używając nagłówków, akapitów i list.",
            "Spróbuj użyć różnych poziomów nagłówków (<h1>, <h2>, <h3>) i stylów."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/HTML",
            "https://www.w3schools.com/html/html_elements.asp"
          ],
          "editor": true
        },
        {
          "id": 3,
          "title": "Semantyczne elementy HTML",
          "language": "html",
          "content": "Poznasz semantyczne elementy HTML, które pomagają w organizacji i interpretacji treści. Dowiesz się o znaczeniu elementów takich jak <header>, <footer>, <article> i <section>.",
          "goal": "Zrozumiesz, jak używać semantycznych elementów do tworzenia bardziej czytelnych i dostępnych dokumentów HTML.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Semantyczna Strona</title>\n</head>\n<body>\n<header>\n<h1>Moja Strona</h1>\n</header>\n<article>\n<h2>Artykuł 1</h2>\n<p>Treść artykułu.</p>\n</article>\n<footer>\n<p>&copy; 2024 Moja Strona</p>\n</footer>\n</body>\n</html>"
          ],
          "tasks": [
            "Utwórz stronę HTML z użyciem elementów semantycznych.",
            "Wykorzystaj <header>, <footer>, <article>, <section> do organizacji treści."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element",
            "https://www.w3schools.com/html/html5_semantic_elements.asp"
          ],
          "editor": true
        },
        {
          "id": 4,
          "title": "Tworzenie formularzy HTML",
          "language": "html",
          "content": "Nauczysz się, jak tworzyć formularze w HTML, które pozwalają na zbieranie danych od użytkowników. Poznasz różne typy pól formularzy, takie jak tekst, przyciski radiowe, pola wyboru oraz jak obsługiwać dane formularza.",
          "goal": "Zrozumiesz, jak tworzyć formularze HTML i jak przetwarzać dane z formularzy.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Formularz HTML</title>\n</head>\n<body>\n<form action=\"/submit\" method=\"post\">\n<label for=\"name\">Imię:</label>\n<input type=\"text\" id=\"name\" name=\"name\">\n<input type=\"submit\" value=\"Wyślij\">\n</form>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz formularz HTML z różnymi typami pól, takimi jak tekst, radio, checkbox.",
            "Dodaj walidację formularza i obsługę danych po jego wysłaniu."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/form",
            "https://www.w3schools.com/html/html_forms.asp"
          ],
          "editor": true
        },
        {
          "id": 5,
          "title": "Osadzanie multimediów",
          "language": "html",
          "content": "Dowiesz się, jak osadzać multimedia, takie jak obrazy, wideo i audio w stronach HTML, oraz jak dostosować ich rozmiar i położenie.",
          "goal": "Zrozumiesz, jak osadzać i kontrolować multimedia na stronach internetowych.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Multimedia</title>\n</head>\n<body>\n<h1>Moje Wideo</h1>\n<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  Twoja przeglądarka nie wspiera wideo HTML5.\n</video>\n</body>\n</html>"
          ],
          "tasks": [
            "Osadź obraz, wideo i plik audio na stronie HTML.",
            "Dodaj atrybuty takie jak rozmiar i kontrolki do multimediów."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/video",
            "https://www.w3schools.com/html/html_images.asp"
          ],
          "editor": true
        },
        {
          "id": 6,
          "title": "Tworzenie linków i nawigacji",
          "language": "html",
          "content": "Nauczysz się, jak tworzyć linki na stronach HTML, jak używać kotwic, a także jak tworzyć menu nawigacyjne i breadcrumbs.",
          "goal": "Zrozumiesz, jak budować skuteczne nawigacje i tworzyć linki na stronach internetowych.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Linki i Nawigacja</title>\n</head>\n<body>\n<nav>\n  <a href=\"index.html\">Strona Główna</a> |\n  <a href=\"about.html\">O Nas</a> |\n  <a href=\"contact.html\">Kontakt</a>\n</nav>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz menu nawigacyjne z linkami do różnych sekcji strony.",
            "Użyj kotwic do nawigacji w obrębie jednej strony."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/a",
            "https://www.w3schools.com/html/html_links.asp"
          ],
          "editor": true
        },
        {
          "id": 7,
          "title": "Tworzenie tabel w HTML",
          "language": "html",
          "content": "Dowiesz się, jak tworzyć tabele w HTML, jak organizować dane w wierszach i kolumnach oraz jak dostosowywać ich wygląd za pomocą atrybutów i stylów CSS.",
          "goal": "Zrozumiesz, jak tworzyć i stylizować tabele w HTML.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Tabela HTML</title>\n</head>\n<body>\n<table border=\"1\">\n  <tr>\n    <th>Imię</th>\n    <th>Nazwisko</th>\n  </tr>\n  <tr>\n    <td>Jan</td>\n    <td>Kowalski</td>\n  </tr>\n</table>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz tabelę HTML z kilkoma wierszami i kolumnami.",
            "Dodaj nagłówki i dostosuj styl tabeli."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/table",
            "https://www.w3schools.com/html/html_tables.asp"
          ],
          "editor": true
        },
        {
          "id": 8,
          "title": "Optymalizacja stron HTML",
          "language": "html",
          "content": "Nauczysz się, jak optymalizować strony HTML pod kątem szybkości ładowania, SEO (Search Engine Optimization) oraz dostępności dla osób z niepełnosprawnościami.",
          "goal": "Zrozumiesz, jak tworzyć strony HTML, które są szybkie, łatwe do znalezienia i dostępne dla wszystkich użytkowników.",
          "examples": [
            "<!DOCTYPE html>\n<html lang=\"pl\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Optymalizacja Stron</title>\n<meta name=\"description\" content=\"Nauka optymalizacji stron HTML.\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n<body>\n<h1>Optymalizacja HTML</h1>\n<p>To jest przykład strony zoptymalizowanej pod kątem SEO i dostępności.</p>\n</body>\n</html>"
          ],
          "tasks": [
            "Dodaj odpowiednie metatagi do strony HTML.",
            "Zoptymalizuj obrazy i inne zasoby na stronie, aby przyspieszyć jej ładowanie."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/meta",
            "https://www.w3schools.com/html/html_responsive.asp"
          ],
          "editor": true
        }
      ]
    }
  },
  {
    "id": 8,
    "title": "Zaawansowany HTML",
    "description": "Kurs skierowany do osób, które opanowały podstawy HTML i chcą pogłębić swoją wiedzę o bardziej zaawansowane techniki i funkcje HTML5. Nauczysz się zarządzać formularzami, pracować z lokalnymi zasobami, wykorzystać Web Storage, a także stosować zaawansowane techniki dostosowywania stron.",
    "content": {
      "lessons": [
        {
          "id": 1,
          "title": "Zaawansowane formularze HTML",
          "language": "html",
          "content": "W tej lekcji poznasz zaawansowane techniki pracy z formularzami HTML, takie jak używanie pól daty, walidacja po stronie klienta, oraz przesyłanie plików.",
          "goal": "Zrozumiesz, jak tworzyć bardziej złożone formularze HTML, które spełniają zaawansowane wymagania.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Zaawansowane Formularze</title>\n</head>\n<body>\n<form action=\"/submit\" method=\"post\" enctype=\"multipart/form-data\">\n  <label for=\"date\">Wybierz datę:</label>\n  <input type=\"date\" id=\"date\" name=\"date\">\n  <br>\n  <label for=\"file\">Wybierz plik:</label>\n  <input type=\"file\" id=\"file\" name=\"file\">\n  <br>\n  <input type=\"submit\" value=\"Wyślij\">\n</form>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz formularz HTML, który zawiera pola daty, walidację po stronie klienta, oraz obsługę przesyłania plików.",
            "Przetestuj różne typy pól formularza, takie jak `range`, `color`, `email`, `number`."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/input",
            "https://www.w3schools.com/html/html_form_elements.asp"
          ],
          "editor": true
        },
        {
          "id": 2,
          "title": "Praca z lokalnymi zasobami (Local Storage, Session Storage)",
          "language": "javascript",
          "content": "Dowiesz się, jak używać Local Storage i Session Storage do przechowywania danych na urządzeniu użytkownika oraz jak zarządzać tymi danymi za pomocą JavaScript.",
          "goal": "Zrozumiesz, jak przechowywać i zarządzać danymi lokalnymi w przeglądarce.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Local Storage</title>\n</head>\n<body>\n<p id=\"output\"></p>\n<script>\n  localStorage.setItem('name', 'Jan Kowalski');\n  document.getElementById('output').textContent = 'Witaj, ' + localStorage.getItem('name');\n</script>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz prostą aplikację, która zapisuje i odczytuje dane z Local Storage.",
            "Zaimplementuj funkcje do przechowywania danych użytkownika, takich jak imię i preferencje, w Local Storage lub Session Storage."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage",
            "https://www.w3schools.com/jsref/prop_win_localstorage.asp"
          ],
          "editor": true
        },
        {
          "id": 3,
          "title": "Osadzanie i zarządzanie zewnętrznymi zasobami",
          "language": "html",
          "content": "Nauczysz się, jak efektywnie osadzać zewnętrzne zasoby, takie jak pliki CSS, JavaScript, obrazy i inne zasoby multimedialne, a także jak zarządzać ich ładowaniem i wydajnością.",
          "goal": "Zrozumiesz, jak optymalizować strony internetowe poprzez zarządzanie zewnętrznymi zasobami.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Zewnętrzne Zasoby</title>\n<link rel=\"stylesheet\" href=\"styles.css\">\n<script src=\"script.js\" defer></script>\n</head>\n<body>\n<h1>Strona z Zewnętrznymi Zasobami</h1>\n<img src=\"image.jpg\" alt=\"Przykładowy obraz\">\n</body>\n</html>"
          ],
          "tasks": [
            "Osadź zewnętrzny plik CSS i JavaScript na stronie HTML.",
            "Zoptymalizuj ładowanie zasobów, korzystając z atrybutów `async` i `defer` dla skryptów oraz `preload` dla zasobów multimedialnych."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/link",
            "https://www.w3schools.com/tags/att_script_defer.asp"
          ],
          "editor": true
        },
        {
          "id": 4,
          "title": "Canvas i grafika w HTML5",
          "language": "html",
          "content": "Wprowadzenie do użycia elementu `<canvas>` w HTML5, który pozwala na dynamiczne tworzenie grafiki, animacji oraz zaawansowanych efektów wizualnych na stronach internetowych.",
          "goal": "Zrozumiesz, jak korzystać z `<canvas>` do tworzenia grafiki i animacji za pomocą JavaScript.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Canvas w HTML5</title>\n</head>\n<body>\n<canvas id=\"myCanvas\" width=\"200\" height=\"100\"></canvas>\n<script>\n  var c = document.getElementById('myCanvas');\n  var ctx = c.getContext('2d');\n  ctx.fillStyle = '#FF0000';\n  ctx.fillRect(0, 0, 150, 75);\n</script>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz prostą grafikę na elemencie `<canvas>`.",
            "Zaimplementuj animację, która zmienia kolor i położenie prostokąta na canvas."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/HTML/Element/canvas",
            "https://www.w3schools.com/html/html5_canvas.asp"
          ],
          "editor": true
        },
        {
          "id": 5,
          "title": "Web Workers - równoległe przetwarzanie w HTML5",
          "language": "javascript",
          "content": "Poznasz Web Workers, które pozwalają na wykonywanie skryptów w tle, co zwiększa wydajność aplikacji webowych poprzez równoległe przetwarzanie.",
          "goal": "Zrozumiesz, jak korzystać z Web Workers do poprawy wydajności aplikacji internetowych.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>Web Workers</title>\n</head>\n<body>\n<script>\n  var worker = new Worker('worker.js');\n  worker.onmessage = function(event) {\n    console.log('Wynik z Web Worker: ' + event.data);\n  };\n  worker.postMessage('start');\n</script>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz prosty Web Worker, który wykonuje obliczenia w tle.",
            "Zaimplementuj komunikację między stroną główną a Web Workerem."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/API/Web_Workers_API/Using_web_workers",
            "https://www.w3schools.com/html/html5_webworkers.asp"
          ],
          "editor": true
        },
        {
          "id": 6,
          "title": "API Geolokacji",
          "language": "javascript",
          "content": "Dowiesz się, jak używać API Geolokacji do uzyskiwania lokalizacji użytkownika w czasie rzeczywistym i jak wykorzystać te dane w aplikacjach webowych.",
          "goal": "Zrozumiesz, jak uzyskać i wykorzystać dane o lokalizacji użytkownika.",
          "examples": [
            "<!DOCTYPE html>\n<html>\n<head>\n<title>API Geolokacji</title>\n</head>\n<body>\n<p id=\"demo\">Kliknij przycisk, aby uzyskać Twoją lokalizację:</p>\n<button onclick=\"getLocation()\">Pokaż lokalizację</button>\n<p id=\"output\"></p>\n<script>\nfunction getLocation() {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(showPosition);\n  } else {\n    document.getElementById('output').textContent = 'Geolokacja nie jest wspierana przez tę przeglądarkę.';\n  }\n}\nfunction showPosition(position) {\n  document.getElementById('output').textContent = 'Szerokość: ' + position.coords.latitude + ', Długość: ' + position.coords.longitude;\n}\n</script>\n</body>\n</html>"
          ],
          "tasks": [
            "Stwórz stronę, która wykorzystuje API Geolokacji do uzyskania lokalizacji użytkownika.",
            "Wyświetl lokalizację użytkownika na mapie przy użyciu danych z API."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/API/Geolocation_API",
            "https://www.w3schools.com/html/html5_geolocation.asp"
          ],
          "editor": true
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Podstawy CSS',
    description: 'Kurs wprowadzający do CSS, języka stylizacji stron internetowych. Nauczysz się, jak używać CSS do nadawania stylów elementom HTML, jak używać selektorów i właściwości oraz jak tworzyć responsywne projekty przy użyciu mediów zapytań.',
    content: {
      lessons: [
        {
          id: 1,
          title: 'Wprowadzenie do CSS',
          language: 'CSS',
          content: 'CSS (Cascading Style Sheets) jest językiem służącym do stylizacji stron internetowych. Nauczysz się, jak stosować style do elementów HTML, jak używać selektorów i właściwości oraz jak tworzyć podstawowe reguły stylów.',
          goal: 'Zrozumiesz, jak używać CSS do stylizacji elementów HTML oraz jak pisać podstawowe reguły CSS.',
          examples: [
            'body { font-family: Arial, sans-serif; color: #333; }',
            'h1 { color: #ff00ff; }'
          ],
          tasks: [
            'Stwórz arkusz stylów CSS i zastosuj różne style do elementów HTML.',
            'Eksperymentuj z właściwościami takimi jak kolor, czcionki, marginesy i padding.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/CSS',
            'https://www.w3schools.com/css/'
          ],
          editor: false
        },
        {
          id: 2,
          title: 'Selektory CSS',
          language: 'CSS',
          content: 'Poznasz różne typy selektorów CSS, które umożliwiają stylizowanie elementów na podstawie ich typu, klasy, identyfikatora oraz innych atrybutów. Dowiesz się również o selektorach złożonych i pseudoklasach.',
          goal: 'Zrozumiesz, jak używać różnych selektorów CSS do precyzyjnego stylizowania elementów HTML.',
          examples: [
            '.class { color: red; }',
            '#id { font-size: 20px; }',
            'a:hover { text-decoration: underline; }'
          ],
          tasks: [
            'Stwórz reguły CSS używając różnych selektorów, takich jak klasy, identyfikatory i pseudoklasy.',
            'Przetestuj selektory złożone i zobacz, jak wpływają na stylizację elementów.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/CSS/Selector',
            'https://www.w3schools.com/css/css_selectors.asp'
          ],
          editor: false
        },
        {
          id: 3,
          title: 'Box Model i Layout',
          language: 'CSS',
          content: 'Dowiesz się o modelu pudełkowym CSS, który opisuje, jak elementy HTML są renderowane i jak można kontrolować ich wymiary, marginesy, padding oraz obramowanie. Nauczysz się również o różnych technikach układu, takich jak flexbox i grid.',
          goal: 'Zrozumiesz, jak działa model pudełkowy CSS i jak wykorzystać techniki layoutu, takie jak flexbox i grid.',
          examples: [
            'div { box-sizing: border-box; padding: 10px; border: 1px solid black; margin: 5px; }',
            '.container { display: flex; justify-content: space-between; }'
          ],
          tasks: [
            'Zastosuj model pudełkowy do stylizacji różnych elementów HTML.',
            'Użyj flexbox i grid do stworzenia responsywnych układów strony.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/CSS/CSS_Box_Model',
            'https://css-tricks.com/snippets/css/complete-guide-grid/',
            'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
          ],
          editor: false
        },
        {
          id: 4,
          title: 'Media Queries i Responsywność',
          language: 'CSS',
          content: 'Nauczysz się, jak używać zapytań medialnych (media queries) do tworzenia responsywnych projektów, które dostosowują się do różnych rozmiarów ekranów i urządzeń. Dowiesz się, jak pisać elastyczne style, które zapewniają dobrą widoczność na wszystkich urządzeniach.',
          goal: 'Zrozumiesz, jak tworzyć responsywne style przy użyciu media queries i jak dostosować wygląd strony do różnych urządzeń.',
          examples: [
            '@media (max-width: 600px) { body { font-size: 14px; } }',
            '@media (min-width: 601px) { body { font-size: 18px; } }'
          ],
          tasks: [
            'Stwórz responsywną stronę używając media queries.',
            'Przetestuj, jak strona wygląda na różnych urządzeniach i dostosuj style w razie potrzeby.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/CSS/Media_Queries/Using_media_queries',
            'https://www.w3schools.com/css/css_rwd_mediaqueries.asp'
          ],
          editor: false
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Podstawy JavaScript',
    description: 'Kurs wprowadzający do JavaScript, języka programowania, który pozwala na tworzenie dynamicznych i interaktywnych elementów na stronach internetowych. Nauczysz się podstaw programowania w JavaScript, manipulacji DOM oraz podstawowych technik debugowania.',
    content: {
      lessons: [
        {
          id: 1,
          title: 'Wprowadzenie do JavaScript',
          language: 'JavaScript',
          content: 'JavaScript to język programowania, który pozwala na tworzenie dynamicznych i interaktywnych elementów na stronach internetowych. Poznasz podstawowe składniki języka, takie jak zmienne, typy danych oraz operatory.',
          goal: 'Zrozumiesz podstawowe składniki języka JavaScript oraz jak używać ich do budowania prostych skryptów.',
          examples: [
            'let message = "Hello, World!";\nconsole.log(message);',
            'const sum = (a, b) => a + b;\nconsole.log(sum(5, 3));'
          ],
          tasks: [
            'Napisz prosty skrypt JavaScript, który wyświetla komunikat powitalny w konsoli.',
            'Stwórz funkcję, która oblicza sumę dwóch liczb i wyświetla wynik.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/JavaScript',
            'https://www.w3schools.com/js/'
          ],
          editor: true
        },
        {
          id: 2,
          title: 'Zmienne i Typy Danych',
          language: 'JavaScript',
          content: 'Nauczysz się, jak używać zmiennych w JavaScript do przechowywania danych oraz jak obsługiwać różne typy danych, takie jak liczby, łańcuchy tekstowe, tablice i obiekty.',
          goal: 'Zrozumiesz, jak deklarować zmienne oraz jak pracować z różnymi typami danych w JavaScript.',
          examples: [
            'let number = 42;\nlet text = "Hello!";\nlet array = [1, 2, 3];\nlet object = { name: "John", age: 30 };'
          ],
          tasks: [
            'Zadeklaruj zmienne różnych typów i przypisz im wartości.',
            'Użyj zmiennych do stworzenia prostego obiektu i tablicy.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Grammar_and_types',
            'https://www.w3schools.com/js/js_datatypes.asp'
          ],
          editor: true
        },
        {
          id: 3,
          title: 'Funkcje i Zakres',
          language: 'JavaScript',
          content: 'Dowiesz się, jak tworzyć i używać funkcji w JavaScript, a także jak działają różne zakresy zmiennych. Poznasz pojęcia takie jak zakres lokalny i globalny oraz funkcje anonimowe.',
          goal: 'Zrozumiesz, jak definiować funkcje oraz jak zakres zmiennych wpływa na ich działanie.',
          examples: [
            'function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet("Alice"));',
            'const square = x => x * x;\nconsole.log(square(4));'
          ],
          tasks: [
            'Napisz funkcję, która przyjmuje argumenty i zwraca wynik.',
            'Stwórz funkcję anonimową i użyj jej jako callback.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Functions',
            'https://www.w3schools.com/js/js_functions.asp'
          ],
          editor: true
        },
        {
          id: 4,
          title: 'Manipulacja DOM',
          language: 'JavaScript',
          content: 'Poznasz podstawowe techniki manipulacji DOM (Document Object Model) w JavaScript. Nauczysz się, jak wybierać elementy na stronie, zmieniać ich zawartość i style oraz dodawać nowe elementy.',
          goal: 'Zrozumiesz, jak manipulować DOM w JavaScript, aby dynamicznie zmieniać zawartość i wygląd strony.',
          examples: [
            'document.getElementById("myElement").innerText = "Nowa Treść";',
            'const newDiv = document.createElement("div");\nnewDiv.textContent = "Nowy Element";\ndocument.body.appendChild(newDiv);'
          ],
          tasks: [
            'Napisz skrypt, który zmienia tekst w elemencie o danym id.',
            'Dodaj nowy element do strony za pomocą JavaScript.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/API/Document_Object_Model',
            'https://www.w3schools.com/js/js_htmldom.asp'
          ],
          editor: true
        },
      ],
    },
  },
  {
    "id": 4,
    "title": "Zaawansowany JavaScript",
    "description": "Kurs zaawansowanego JavaScript, który obejmuje bardziej złożone zagadnienia, takie jak obiekty, klasy, dziedziczenie, moduły i optymalizacja wydajności. Nauczysz się, jak tworzyć bardziej złożone i zoptymalizowane aplikacje webowe.",
    "content": {
      "lessons": [
        {
          "id": 1,
          "title": "Obiekty i klasy w JavaScript",
          "language": "JavaScript",
          "content": "Poznasz podstawy programowania obiektowego w JavaScript, w tym jak definiować obiekty, tworzyć klasy i implementować dziedziczenie.",
          "goal": "Zrozumiesz, jak pracować z obiektami i klasami w JavaScript oraz jak stosować dziedziczenie do organizacji kodu.",
          "examples": [
            "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hello, my name is ${this.name}!`;\n  }\n}\n\nconst john = new Person('John');\nconsole.log(john.greet());"
          ],
          "tasks": [
            "Zdefiniuj klasę i stwórz obiekt tej klasy.",
            "Dodaj metodę do klasy i wywołaj ją na obiekcie."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Classes",
            "https://www.w3schools.com/js/js_object_definition.asp"
          ],
          "editor": true
        },
        {
          "id": 2,
          "title": "Moduły w JavaScript",
          "language": "JavaScript",
          "content": "Nauczysz się, jak organizować kod za pomocą modułów w JavaScript. Dowiesz się, jak eksportować i importować funkcje, obiekty i klasy między plikami.",
          "goal": "Zrozumiesz, jak korzystać z modułów do lepszej organizacji i zarządzania kodem w dużych aplikacjach.",
          "examples": [
            "// math.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// app.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));"
          ],
          "tasks": [
            "Stwórz moduł i zaimportuj funkcję z tego modułu w innym pliku.",
            "Podziel aplikację na moduły i zarządzaj importami i eksportami."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Modules",
            "https://www.w3schools.com/js/js_modules.asp"
          ],
          "editor": true
        },
        {
          "id": 3,
          "title": "Optymalizacja wydajności w JavaScript",
          "language": "JavaScript",
          "content": "Dowiesz się, jak optymalizować kod JavaScript pod kątem wydajności. Poznasz techniki takie jak debouncing, throttling oraz optymalizacja pętli.",
          "goal": "Zrozumiesz, jak optymalizować kod JavaScript, aby poprawić wydajność aplikacji.",
          "examples": [
            "function debounce(func, delay) {\n  let timeout;\n  return function(...args) {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => func.apply(this, args), delay);\n  };\n}"
          ],
          "tasks": [
            "Zastosuj technikę debouncing do funkcji obsługującej zdarzenie.",
            "Optymalizuj pętlę w kodzie JavaScript."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Performance",
            "https://www.w3schools.com/js/js_performance.asp"
          ],
          "editor": true
        },
        {
          "id": 4,
          "title": "Asynchroniczność w JavaScript",
          "language": "JavaScript",
          "content": "Poznasz różne mechanizmy asynchroniczności w JavaScript, takie jak promisy, async/await i obsługa błędów w asynchronicznych funkcjach.",
          "goal": "Zrozumiesz, jak pracować z asynchronicznymi operacjami w JavaScript oraz jak skutecznie obsługiwać błędy.",
          "examples": [
            "const fetchData = async () => {\n  try {\n    let response = await fetch('https://api.example.com/data');\n    let data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n};\n\nfetchData();"
          ],
          "tasks": [
            "Zaimplementuj funkcję asynchroniczną z użyciem async/await do pobierania danych z API.",
            "Obsłuż błędy w funkcji asynchronicznej i wyświetl komunikat o błędzie."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Using_promises",
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Operators/await"
          ],
          "editor": true
        },
        {
          "id": 5,
          "title": "Zarządzanie pamięcią i GC w JavaScript",
          "language": "JavaScript",
          "content": "Dowiesz się, jak JavaScript zarządza pamięcią i jakie są mechanizmy garbage collection (GC). Poznasz techniki zapobiegające wyciekom pamięci.",
          "goal": "Zrozumiesz, jak zarządzać pamięcią w aplikacjach JavaScript oraz jak unikać problemów związanych z wyciekami pamięci.",
          "examples": [
            "let largeArray = new Array(1000000).fill('data');\nlargeArray = null; // Ustawienie referencji na null, aby umożliwić GC usunięcie obiektu"
          ],
          "tasks": [
            "Zbadaj, jak aplikacja zarządza pamięcią i identyfikuj potencjalne wycieki pamięci.",
            "Zastosuj techniki zarządzania pamięcią, aby poprawić wydajność aplikacji."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Memory_Management",
            "https://www.w3schools.com/js/js_memory.asp"
          ],
          "editor": true
        }
      ]
    }
  },
  {
    "id": 6,
    "title": "Dodatkowe funkcje JavaScript",
    "description": "Kurs dotyczący zaawansowanych, ale często przydatnych funkcji JavaScript, które mogą pomóc w codziennym programowaniu. Zawiera tematy takie jak regular expressions, data i czas, programowanie funkcyjne, oraz Web APIs.",
    "content": {
      "lessons": [
        {
          "id": 1,
          "title": "Regular Expressions w JavaScript",
          "language": "JavaScript",
          "content": "Poznasz, jak tworzyć i używać wyrażeń regularnych w JavaScript do wyszukiwania, dopasowywania i manipulowania tekstem.",
          "goal": "Zrozumiesz, jak używać regular expressions w JavaScript do skomplikowanych operacji na tekstach.",
          "examples": [
            "const regex = /\\b\\w{4,}\\b/g;\nconst text = 'JavaScript is great!';\nconsole.log(text.match(regex));"
          ],
          "tasks": [
            "Stwórz wyrażenie regularne do wyszukiwania określonego wzorca w ciągu tekstowym.",
            "Zastosuj wyrażenie regularne do walidacji adresu email."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Regular_Expressions",
            "https://www.w3schools.com/js/js_regexp.asp"
          ],
          "editor": true
        },
        {
          "id": 2,
          "title": "Praca z datami i czasem",
          "language": "JavaScript",
          "content": "Dowiesz się, jak pracować z datami i czasem w JavaScript, jak formatować daty, porównywać je i wykonywać operacje na czasie.",
          "goal": "Zrozumiesz, jak zarządzać datami i czasem w aplikacjach JavaScript.",
          "examples": [
            "const now = new Date();\nconsole.log(now.toLocaleDateString());\nconst futureDate = new Date(2025, 0, 1);\nconsole.log(futureDate - now);"
          ],
          "tasks": [
            "Stwórz skrypt, który wyświetla aktualną datę i czas w różnych formatach.",
            "Zaimplementuj funkcję liczącą dni między dwiema datami."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Date",
            "https://www.w3schools.com/js/js_dates.asp"
          ],
          "editor": true
        },
        {
          "id": 3,
          "title": "Programowanie funkcyjne w JavaScript",
          "language": "JavaScript",
          "content": "Poznasz zasady programowania funkcyjnego, takie jak map, filter, reduce, oraz jak stosować te techniki w JavaScript.",
          "goal": "Zrozumiesz, jak używać funkcji wyższego rzędu do manipulacji danymi i tworzenia bardziej deklaratywnego kodu.",
          "examples": [
            "const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);"
          ],
          "tasks": [
            "Użyj metody map do przekształcenia tablicy.",
            "Zaimplementuj operacje filter i reduce na tablicy."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Functions",
            "https://www.w3schools.com/js/js_function_closures.asp"
          ],
          "editor": true
        },
        {
          "id": 4,
          "title": "Obsługa błędów i debugging w JavaScript",
          "language": "JavaScript",
          "content": "Nauczysz się, jak skutecznie obsługiwać błędy w JavaScript za pomocą try...catch oraz jak debugować kod przy użyciu narzędzi przeglądarki.",
          "goal": "Zrozumiesz, jak poprawnie obsługiwać błędy i debugować kod JavaScript.",
          "examples": [
            "try {\n  let result = riskyFunction();\n} catch (error) {\n  console.error('An error occurred:', error);\n}"
          ],
          "tasks": [
            "Zaimplementuj blok try...catch do obsługi błędów w funkcji.",
            "Użyj narzędzi do debugowania przeglądarki, aby znaleźć i naprawić błąd w kodzie."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Statements/try...catch",
            "https://www.w3schools.com/js/js_debugging.asp"
          ],
          "editor": true
        },
        {
          "id": 5,
          "title": "Web APIs w JavaScript",
          "language": "JavaScript",
          "content": "Dowiesz się, jak korzystać z różnych Web APIs dostępnych w przeglądarce, takich jak Geolocation API, Fetch API, oraz LocalStorage.",
          "goal": "Zrozumiesz, jak korzystać z Web APIs do tworzenia bardziej interaktywnych i dynamicznych aplikacji webowych.",
          "examples": [
            "navigator.geolocation.getCurrentPosition(position => {\n  console.log('Latitude:', position.coords.latitude);\n  console.log('Longitude:', position.coords.longitude);\n});"
          ],
          "tasks": [
            "Zaimplementuj skrypt, który pobiera i wyświetla bieżącą lokalizację użytkownika.",
            "Stwórz funkcję, która zapisuje dane użytkownika w LocalStorage i odczytuje je po ponownym załadowaniu strony."
          ],
          "sources": [
            "https://developer.mozilla.org/pl/docs/Web/API/Geolocation_API",
            "https://www.w3schools.com/js/js_api_intro.asp"
          ],
          "editor": true
        }
      ]
    }
  }
  
  
];


export async function getCourseById(id: number): Promise<Course | null> {
  return courses.find(course => course.id === id) || null;
}

export async function getLessonById(courseId: number, lessonId: number): Promise<Lesson | null> {
    const course = await getCourseById(courseId);
    if (course) {
      return course.content.lessons.find(lesson => lesson.id === lessonId) || null;
    }
    return null;
  }

