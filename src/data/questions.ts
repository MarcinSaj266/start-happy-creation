export type ExecutiveDomain = 'inhibition' | 'working_memory' | 'cognitive_flexibility';

export interface Question {
  id: number;
  text: string;
  domain: ExecutiveDomain;
  options: {
    label: string;
    points: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    domain: 'inhibition',
    text: "Gdy prosisz dziecko o przerwanie oglądania bajki i umycie rąk przed kolacją, najczęściej:",
    options: [
      { label: "Natychmiast wyłącza telewizor i idzie do łazienki bez protestu.", points: 3 },
      { label: "Potrzebuje 1–2 przypomnień, ale ostatecznie wykonuje polecenie.", points: 2 },
      { label: "Reaguje silnym sprzeciwem, płaczem lub całkowitym ignorowaniem prośby.", points: 1 },
    ],
  },
  {
    id: 2,
    domain: 'cognitive_flexibility',
    text: "Kiedy dziecko buduje wieżę z klocków i ta się przewraca, jego typowa reakcja to:",
    options: [
      { label: "Spokojnie zaczyna budować od nowa, czasem zmieniając strategię.", points: 3 },
      { label: "Przez chwilę jest sfrustrowane, ale po krótkim czasie próbuje ponownie.", points: 2 },
      { label: "Wybucha złością, rzuca klockami lub odmawia dalszej zabawy.", points: 1 },
    ],
  },
  {
    id: 3,
    domain: 'inhibition',
    text: "Podczas wspólnej zabawy planszowej z rodzeństwem lub rówieśnikami, Twoje dziecko:",
    options: [
      { label: "Cierpliwie czeka na swoją kolej i przestrzega zasad gry.", points: 3 },
      { label: "Czasem się niecierpliwi, ale po przypomnieniu wraca do zasad.", points: 2 },
      { label: "Regularnie łamie zasady, nie czeka na kolej lub porzuca grę.", points: 1 },
    ],
  },
  {
    id: 4,
    domain: 'working_memory',
    text: 'Gdy dajesz dziecku instrukcję składającą się z 2\u20133 kroków (np. \u201Ezałóż buty, weź plecak i stań przy drzwiach\u201D), ono:',
    options: [
      { label: "Wykonuje wszystkie kroki po kolei, bez dodatkowych przypomnień.", points: 3 },
      { label: "Pamięta pierwszy krok, ale potrzebuje przypomnienia o kolejnych.", points: 2 },
      { label: "Zapomina instrukcję niemal natychmiast i robi coś zupełnie innego.", points: 1 },
    ],
  },
  {
    id: 5,
    domain: 'cognitive_flexibility',
    text: "Jak Twoje dziecko radzi sobie z nową, nieznaną sytuacją (np. pierwszy dzień w nowym miejscu)?",
    options: [
      { label: "Jest ciekawe i otwarte, szybko się adaptuje.", points: 3 },
      { label: "Początkowo jest ostrożne, ale stopniowo się oswaja.", points: 2 },
      { label: "Reaguje silnym lękiem, płaczem lub odmową uczestnictwa.", points: 1 },
    ],
  },
  {
    id: 6,
    domain: 'inhibition',
    text: "Kiedy dziecko chce zabawkę, którą bawi się inne dziecko na placu zabaw, najczęściej:",
    options: [
      { label: "Pyta grzecznie, czy może się nią pobawić, lub czeka cierpliwie.", points: 3 },
      { label: "Jest sfrustrowane, ale po Twoim wsparciu próbuje negocjować.", points: 2 },
      { label: "Wyrywa zabawkę siłą lub reaguje agresywnie.", points: 1 },
    ],
  },
  {
    id: 7,
    domain: 'inhibition',
    text: 'Przed snem, kiedy kończysz czytać bajkę i mówisz \u201Eczas spać\u201D, Twoje dziecko:',
    options: [
      { label: "Akceptuje koniec bajki i spokojnie przygotowuje się do snu.", points: 3 },
      { label: "Prosi o jeszcze jedną stronę, ale ostatecznie się zgadza.", points: 2 },
      { label: "Rozpaczliwie protestuje, wstaje z łóżka lub nie może się uspokoić.", points: 1 },
    ],
  },
  {
    id: 8,
    domain: 'cognitive_flexibility',
    text: "Gdy dziecko rysuje i efekt nie wygląda tak, jak sobie wyobrażało, ono:",
    options: [
      { label: "Próbuje jeszcze raz lub kreatywnie modyfikuje rysunek.", points: 3 },
      { label: "Jest chwilowo rozczarowane, ale kontynuuje z pomocą.", points: 2 },
      { label: "Drze kartkę, rzuca kredki lub odmawia dalszego rysowania.", points: 1 },
    ],
  },
  {
    id: 9,
    domain: 'working_memory',
    text: "Jak Twoje dziecko zachowuje się, gdy musi czekać (np. w kolejce, w restauracji)?",
    options: [
      { label: "Potrafi się zająć rozmową, obserwacją otoczenia lub cichą zabawą.", points: 3 },
      { label: "Jest niespokojne, ale z pomocą rozproszenia wytrzymuje.", points: 2 },
      { label: "Nie jest w stanie wytrzymać — biega, krzyczy lub płacze.", points: 1 },
    ],
  },
  {
    id: 10,
    domain: 'cognitive_flexibility',
    text: "Gdy musisz niespodziewanie zmienić plany (np. odwołana wizyta na placu zabaw z powodu deszczu), dziecko:",
    options: [
      { label: "Przyjmuje zmianę ze spokojem i szybko przechodzi do nowej aktywności.", points: 3 },
      { label: "Jest rozczarowane, ale po wyjaśnieniu akceptuje sytuację.", points: 2 },
      { label: "Wpada w długotrwały napad złości i nie da się go pocieszyć.", points: 1 },
    ],
  },
];
