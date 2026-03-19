export type ExecutiveDomain = 'inhibition' | 'working_memory' | 'cognitive_flexibility';

export interface Question {
  id: number;
  title: string;
  situation: string;
  domain: ExecutiveDomain;
  options: {
    label: string;
    points: number;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    domain: 'cognitive_flexibility',
    title: "Elastyczność poznawcza (Zarządzanie zmianą)",
    situation: "Zbliża się moment wyjścia z placu zabaw lub zakończenia oglądania bajki. Jak przebiega ten proces?",
    options: [
      { label: "Dziecko akceptuje zmianę i płynnie przechodzi do kolejnej aktywności (z ewentualnym drobnym wsparciem).", points: 3 },
      { label: "Wymaga kilkukrotnego uprzedzania (\"jeszcze 5 minut\"), a proces i tak kończy się negocjacjami.", points: 2 },
      { label: "Każdą nagłą zmianę układu odniesienia traktuje jak zagrożenie – pojawia się krzyk, płacz lub fizyczny opór.", points: 1 },
    ],
  },
  {
    id: 2,
    domain: 'working_memory',
    title: "Pamięć robocza (Przetwarzanie złożonych poleceń)",
    situation: "Wydajesz dwuetapowe polecenie: \"Idź do pokoju, załóż skarpetki i przynieś swojego misia\". Jaki jest efekt?",
    options: [
      { label: "Cel zrealizowany – dziecko wraca w skarpetkach i z misiem.", points: 3 },
      { label: "Idzie do pokoju, ale gubi wątek. Przynosi misia, ale zapomina o skarpetkach (lub odwrotnie).", points: 2 },
      { label: "Idzie do pokoju i zaczyna bawić się klockami. Instrukcja ulatnia się z jego pamięci w ciągu kilku sekund.", points: 1 },
    ],
  },
  {
    id: 3,
    domain: 'inhibition',
    title: "Kontrola hamująca (Odroczenie gratyfikacji)",
    situation: "Rozmawiasz z innym dorosłym, a Twoje dziecko pilnie chce Ci coś powiedzieć.",
    options: [
      { label: "Potrafi chwilę poczekać (np. łapie Cię za rękę, dając znak, że czegoś potrzebuje).", points: 3 },
      { label: "Przerywa Ci, ale na prośbę: \"daj mi chwilę, skończę zdanie\", udaje mu się powstrzymać impuls.", points: 2 },
      { label: "Domaga się uwagi \"tu i teraz\". Wpada w frustrację, krzyczy lub szarpie za ubranie.", points: 1 },
    ],
  },
  {
    id: 4,
    domain: 'inhibition',
    title: "Reaktywność na bodźce (Hamowanie impulsów)",
    situation: "Dziecko widzi na stole kuszącą przekąskę tuż przed obiadem. Wie, że obowiązuje zasada \"nie jemy przed posiłkiem\".",
    options: [
      { label: "Patrzy, mówi o tym, ale potrafi fizycznie powstrzymać się przed sięgnięciem po jedzenie.", points: 3 },
      { label: "Ręka automatycznie wędruje w stronę stołu, zatrzymuje się dopiero na Twoje wyraźne, werbalne przypomnienie reguły.", points: 2 },
      { label: "Zjada natychmiast, impuls wyprzedza proces myślowy. Refleksja przychodzi dopiero po fakcie.", points: 1 },
    ],
  },
  {
    id: 5,
    domain: 'inhibition',
    title: "Tolerancja na frustrację (Zarządzanie błędem)",
    situation: "Konstrukcja z klocków niespodziewanie się zawaliła.",
    options: [
      { label: "Wzdycha lub wyraża lekkie niezadowolenie, po czym strategicznie zaczyna budować od nowa.", points: 3 },
      { label: "Reaguje gwałtowną złością, ale z Twoją pomocą szybko wraca do równowagi.", points: 2 },
      { label: "Następuje \"wybuch\" układu nerwowego. Dziecko rzuca przedmiotami, krzyczy i całkowicie porzuca aktywność, wchodząc w przedłużający się afekt.", points: 1 },
    ],
  },
  {
    id: 6,
    domain: 'working_memory',
    title: "Koncentracja i uwaga celowa",
    situation: "Dziecko wykonuje rutynową czynność – ubiór do przedszkola (bez wsparcia bajek czy muzyki w tle).",
    options: [
      { label: "Skupia się na celu i wykonuje zadanie w swoim tempie, z minimalnymi rozpraszaczami.", points: 3 },
      { label: "Wymaga stałego monitoringu (\"Gdzie twój but?\", \"Załóż kurtkę\"), ponieważ bodźce z otoczenia ciągle je odrywają.", points: 2 },
      { label: "Bez Twojego bezpośredniego \"prowadzenia za rękę\" zadanie nie ma szans na realizację.", points: 1 },
    ],
  },
  {
    id: 7,
    domain: 'inhibition',
    title: "Pętla samoregulacji (Powrót do równowagi)",
    situation: "Po silnym wybuchu złości (tantrum), jak szybko układ nerwowy dziecka wraca do normy?",
    options: [
      { label: "Dość sprawnie. Po uregulowaniu emocji i bliskości fizycznej szybko odzyskuje spokój poznawczy.", points: 3 },
      { label: "Wymaga czasu (10-15 minut) oraz zaawansowanych strategii dorosłego (np. zmiana otoczenia, aktywne wyciszanie).", points: 2 },
      { label: "Wybuchy są ekstremalnie wyczerpujące. Kiedy emocje przejmują stery, żadne racjonalne narzędzia i argumenty nie działają.", points: 1 },
    ],
  },
  {
    id: 8,
    domain: 'cognitive_flexibility',
    title: "Adaptacja do nowych reguł (Pamięć robocza & Elastyczność)",
    situation: "Wprowadzasz nową, prostą domową rutynę (np. \"najpierw myjemy ręce, potem siadamy do stołu\").",
    options: [
      { label: "Dziecko koduje nową zasadę i po kilku przypomnieniach włącza ją do swojego nawyku.", points: 3 },
      { label: "Zna zasadę teoretycznie, ale w praktyce musisz pełnić rolę jego \"zewnętrznego dysku twardego\" i stale o niej przypominać.", points: 2 },
      { label: "Systematycznie ignoruje lub oponuje przed nową strukturą, traktując ją jako ograniczenie wolności.", points: 1 },
    ],
  },
  {
    id: 9,
    domain: 'working_memory',
    title: "Zdolność planowania (Inicjowanie działań)",
    situation: "Masz 15 minut na wypicie kawy. Dziecko ma zająć się samo sobą.",
    options: [
      { label: "Potrafi zainicjować własną zabawę (wyciąga klocki, tworzy scenariusz) i angażuje się w ten proces.", points: 3 },
      { label: "Zaczyna się bawić, ale po chwili wymaga Twojej atencji lub prosi o dostęp do \"szybkiej dopaminy\" (ekran).", points: 2 },
      { label: "Krąży bez celu, \"nudzi się\" i domaga się, aby to dorosły wymyślił, zorganizował i poprowadził zabawę.", points: 1 },
    ],
  },
  {
    id: 10,
    domain: 'cognitive_flexibility',
    title: "Filtrowanie dystraktorów (Wrażliwość sensoryczna)",
    situation: "Jesteście w wysoce stymulującym otoczeniu (sala zabaw, gwarne centrum handlowe).",
    options: [
      { label: "System nerwowy dziecka świetnie to znosi – bawi się i utrzymuje z Tobą kontakt.", points: 3 },
      { label: "Jest wyraźnie przestymulowane. Po powrocie do domu odreagowuje napięcie \"skakaniem po ścianach\" lub drażliwością.", points: 2 },
      { label: "Reaguje przeciążeniem niemal od razu – zatyka uszy, bywa płaczliwe lub \"wyłącza się\", odcinając od kontaktu.", points: 1 },
    ],
  },
];
