// lib/courses.ts
import { useLocalStorage } from '@/hooks/useCourse';
import { Course, Lesson } from '@/types/course';
import { createContext, useContext } from 'react';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Podstawy HTML',
    description: 'Kurs wprowadzający do HTML, języka używanego do strukturyzowania treści na stronach internetowych. Nauczysz się, jak budować podstawową strukturę HTML, tworzyć różne elementy oraz jak używać atrybutów do dostosowywania wyglądu elementów.',
    content: {
      lessons: [
        {
          id: 1,
          title: 'Wprowadzenie do HTML',
          content: 'HTML (HyperText Markup Language) to podstawowy język używany do tworzenia stron internetowych. Poznasz podstawowe elementy HTML, takie jak <html>, <head> i <body>, oraz sposób, w jaki tworzą one strukturę dokumentu.',
          goal: 'Poznasz podstawy HTML i zrozumiesz, jak zbudować prostą stronę internetową.',
          examples: [
            '<html><head><title>Moja Strona</title></head><body><h1>Witaj Świecie!</h1></body></html>',
            '<!DOCTYPE html><html lang="pl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Strona</title></head><body></body></html>'
          ],
          tasks: [
            'Utwórz prostą stronę HTML z nagłówkiem i akapitem.',
            'Dodaj tytuł strony oraz kilka elementów takich jak listy i linki.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/HTML',
            'https://www.w3schools.com/html/'
          ]
        },
        {
          id: 2,
          title: 'Struktura dokumentu HTML',
          content: 'Dowiesz się, jak zbudować poprawną strukturę dokumentu HTML, w tym znaczenie elementów <html>, <head> i <body>. Nauczysz się również o tagach nagłówkowych, akapitach i listach.',
          goal: 'Zrozumiesz, jak struktura dokumentu HTML wpływa na renderowanie strony.',
          examples: [
            '<!DOCTYPE html><html><head><title>Dokument HTML</title></head><body><h1>Witaj!</h1><p>To jest akapit.</p></body></html>'
          ],
          tasks: [
            'Zbuduj stronę HTML, używając nagłówków, akapitów i list.',
            'Spróbuj użyć różnych poziomów nagłówków (<h1>, <h2>, <h3>) i stylów.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/HTML/Element/HTML',
            'https://www.w3schools.com/html/html_elements.asp'
          ]
        },
        {
          id: 3,
          title: 'Semantyczne elementy HTML',
          content: 'Poznasz semantyczne elementy HTML, które pomagają w organizacji i interpretacji treści. Dowiesz się o znaczeniu elementów takich jak <header>, <footer>, <article> i <section>.',
          goal: 'Zrozumiesz, jak używać semantycznych elementów do tworzenia bardziej czytelnych i dostępnych dokumentów HTML.',
          examples: [
            '<header><h1>Moja Strona</h1></header><article><h2>Artykuł 1</h2><p>Treść artykułu.</p></article><footer><p>&copy; 2024 Moja Strona</p></footer>'
          ],
          tasks: [
            'Utwórz stronę HTML z użyciem elementów semantycznych.',
            'Wykorzystaj <header>, <footer>, <article>, <section> do organizacji treści.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/HTML/Element',
            'https://www.w3schools.com/html/html5_semantic_elements.asp'
          ]
        },
        {
          id: 4,
          title: 'Tworzenie formularzy HTML',
          content: 'Nauczysz się, jak tworzyć formularze w HTML, które pozwalają na zbieranie danych od użytkowników. Poznasz różne typy pól formularzy, takie jak tekst, przyciski radiowe, pola wyboru oraz jak obsługiwać dane formularza.',
          goal: 'Zrozumiesz, jak tworzyć formularze HTML i jak przetwarzać dane z formularzy.',
          examples: [
            '<form action="/submit" method="post"><label for="name">Imię:</label><input type="text" id="name" name="name"><input type="submit" value="Wyślij"></form>'
          ],
          tasks: [
            'Stwórz formularz HTML z różnymi typami pól, takimi jak tekst, radio, checkbox.',
            'Dodaj walidację formularza i obsługę danych po jego wysłaniu.'
          ],
          sources: [
            'https://developer.mozilla.org/pl/docs/Web/HTML/Element/form',
            'https://www.w3schools.com/html/html_forms.asp'
          ]
        },
      ],
    },
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
          ]
        },
        {
          id: 2,
          title: 'Selektory CSS',
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
          ]
        },
        {
          id: 3,
          title: 'Box Model i Layout',
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
          ]
        },
        {
          id: 4,
          title: 'Media Queries i Responsywność',
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
          ]
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
          ]
        },
        {
          id: 2,
          title: 'Zmienne i Typy Danych',
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
          ]
        },
        {
          id: 3,
          title: 'Funkcje i Zakres',
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
          ]
        },
        {
          id: 4,
          title: 'Manipulacja DOM',
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
          ]
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Wprowadzenie do React',
    description: 'Kurs wprowadzający do React, popularnej biblioteki JavaScript do budowania interfejsów użytkownika. Nauczysz się, jak tworzyć komponenty, zarządzać stanem aplikacji oraz jak używać różnych funkcji Reacta do budowania dynamicznych aplikacji webowych.',
    content: {
      lessons: [
        {
          id: 1,
          title: 'Wprowadzenie do React',
          content: 'React to biblioteka JavaScript, która umożliwia budowanie dynamicznych i interaktywnych interfejsów użytkownika. Poznasz podstawowe pojęcia takie jak komponenty, propsy i stan.',
          goal: 'Zrozumiesz podstawowe pojęcia Reacta oraz jak używać komponentów do budowy UI.',
          examples: [
            'import React from "react";\nfunction App() {\n  return <h1>Hello, React!</h1>;\n}\nexport default App;'
          ],
          tasks: [
            'Stwórz prosty komponent React, który wyświetla komunikat powitalny.',
            'Dodaj do komponentu propsy i przekaż dane do renderowania.'
          ],
          sources: [
            'https://reactjs.org/docs/getting-started.html',
            'https://www.w3schools.com/react/'
          ]
        },
        {
          id: 2,
          title: 'Komponenty w React',
          content: 'Dowiesz się, jak tworzyć komponenty w React i jak je wykorzystywać do budowania aplikacji. Nauczysz się o różnicy między komponentami klasowymi a funkcyjnymi oraz o używaniu hooków.',
          goal: 'Zrozumiesz, jak tworzyć komponenty klasowe i funkcyjne, oraz jak używać hooków do zarządzania stanem.',
          examples: [
            'const FunctionalComponent = () => <div>Hello from Functional Component</div>;',
            'class ClassComponent extends React.Component {\n  render() {\n    return <div>Hello from Class Component</div>;\n  }\n}'
          ],
          tasks: [
            'Napisz komponent klasowy oraz komponent funkcyjny.',
            'Użyj hooka useState w komponencie funkcyjnym.'
          ],
          sources: [
            'https://reactjs.org/docs/components-and-props.html',
            'https://reactjs.org/docs/hooks-intro.html'
          ]
        },
        {
          id: 3,
          title: 'Zarządzanie Stanem w React',
          content: 'Nauczysz się, jak zarządzać stanem aplikacji w React. Dowiesz się, jak używać hooka useState oraz kontekstu do przechowywania i zarządzania danymi w aplikacji.',
          goal: 'Zrozumiesz, jak zarządzać stanem w React oraz jak używać useState i Context API.',
          examples: [
            'const [count, setCount] = useState(0);\n<button onClick={() => setCount(count + 1)}>Increment</button>'
          ],
          tasks: [
            'Stwórz komponent, który zarządza licznikiem za pomocą hooka useState.',
            'Użyj Context API do zarządzania stanem w aplikacji.'
          ],
          sources: [
            'https://reactjs.org/docs/hooks-state.html',
            'https://reactjs.org/docs/context.html'
          ]
        },
        {
          id: 4,
          title: 'Routing w React',
          content: 'Poznasz techniki routingu w React, które pozwalają na tworzenie aplikacji z wieloma stronami. Nauczysz się, jak używać biblioteki React Router do definiowania tras i przełączania się między nimi.',
          goal: 'Zrozumiesz, jak implementować routing w aplikacji React oraz jak używać React Router do zarządzania trasami.',
          examples: [
            'import { BrowserRouter as Router, Route, Switch } from "react-router-dom";\n\n<Router>\n  <Switch>\n    <Route path="/" exact component={Home} />\n    <Route path="/about" component={About} />\n  </Switch>\n</Router>'
          ],
          tasks: [
            'Stwórz aplikację React z kilkoma stronami, używając React Router.',
            'Dodaj nawigację między stronami za pomocą linków.'
          ],
          sources: [
            'https://reactrouter.com/',
            'https://reactjs.org/docs/react-router.html'
          ]
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Wprowadzenie do Next.js',
    description: 'Kurs wprowadzający do Next.js, frameworka dla Reacta, który umożliwia renderowanie po stronie serwera oraz generowanie stron statycznych. Nauczysz się, jak korzystać z Next.js do budowania wydajnych i skalowalnych aplikacji webowych.',
    content: {
      lessons: [
        {
          id: 1,
          title: 'Wprowadzenie do Next.js',
          content: 'Next.js to framework oparty na React, który oferuje funkcje takie jak renderowanie po stronie serwera i generowanie stron statycznych. Poznasz podstawowe cechy Next.js oraz jak rozpocząć pracę z tym frameworkiem.',
          goal: 'Zrozumiesz podstawowe funkcje Next.js oraz jak skonfigurować i uruchomić projekt Next.js.',
          examples: [
            'npx create-next-app my-next-app',
            'import React from "react";\nfunction Home() {\n  return <h1>Witaj w Next.js!</h1>;\n}\nexport default Home;'
          ],
          tasks: [
            'Stwórz nowy projekt Next.js i uruchom go lokalnie.',
            'Dodaj prostą stronę startową do aplikacji Next.js.'
          ],
          sources: [
            'https://nextjs.org/docs',
            'https://www.w3schools.com/whatis/whatis_nextjs.asp'
          ]
        },
        {
          id: 2,
          title: 'Routing w Next.js',
          content: 'Dowiesz się, jak działa routing w Next.js. Poznasz sposób, w jaki Next.js obsługuje routing oparty na plikach oraz jak dynamicznie generować trasy.',
          goal: 'Zrozumiesz, jak korzystać z systemu routingu w Next.js do tworzenia dynamicznych stron.',
          examples: [
            'pages/index.js\n\nfunction Home() {\n  return <h1>Strona Główna</h1>;\n}\nexport default Home;',
            'pages/about.js\n\nfunction About() {\n  return <h1>O Nas</h1>;\n}\nexport default About;'
          ],
          tasks: [
            'Stwórz kilka stron w aplikacji Next.js i skonfiguruj nawigację między nimi.',
            'Dodaj dynamiczne trasy do aplikacji Next.js.'
          ],
          sources: [
            'https://nextjs.org/docs/routing/pages',
            'https://nextjs.org/docs/api-reference/next.config.js/introduction'
          ]
        },
        {
          id: 3,
          title: 'Rendering po stronie serwera (SSR)',
          content: 'Nauczysz się, jak Next.js obsługuje renderowanie po stronie serwera. Dowiesz się, jak korzystać z funkcji getServerSideProps do pobierania danych na serwerze przed renderowaniem strony.',
          goal: 'Zrozumiesz, jak wykorzystać SSR w Next.js do renderowania stron z danymi pobranymi na serwerze.',
          examples: [
            'export async function getServerSideProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n  return { props: { data } }; \n}\nfunction Page({ data }) {\n  return <div>{data.title}</div>;\n}\nexport default Page;'
          ],
          tasks: [
            'Dodaj funkcję getServerSideProps do jednej ze stron w aplikacji Next.js.',
            'Pobierz dane z API i wyświetl je na stronie.'
          ],
          sources: [
            'https://nextjs.org/docs/app/building-your-application/data-fetching/get-server-side-props',
            'https://nextjs.org/docs/api-reference/data-fetching/getServerSideProps'
          ]
        },
        {
          id: 4,
          title: 'Generowanie stron statycznych (SSG)',
          content: 'Dowiesz się, jak Next.js generuje strony statyczne podczas budowy aplikacji. Poznasz funkcję getStaticProps i jak używać jej do generowania stron na podstawie danych podczas budowania aplikacji.',
          goal: 'Zrozumiesz, jak używać SSG w Next.js do generowania stron statycznych, które są pre-renderowane podczas budowy aplikacji.',
          examples: [
            'export async function getStaticProps() {\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n  return { props: { data } }; \n}\nfunction Page({ data }) {\n  return <div>{data.title}</div>;\n}\nexport default Page;'
          ],
          tasks: [
            'Użyj funkcji getStaticProps do generowania stron statycznych w aplikacji Next.js.',
            'Zbadaj różnice między SSR i SSG i wybierz odpowiednią metodę do różnych scenariuszy.'
          ],
          sources: [
            'https://nextjs.org/docs/app/building-your-application/data-fetching/get-static-props',
            'https://nextjs.org/docs/api-reference/data-fetching/getStaticProps'
          ]
        },
      ],
    },
  },
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
