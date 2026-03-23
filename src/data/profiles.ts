export interface ResultProfile {
  id: "dreamer" | "explorer" | "strategist";
  minScore: number;
  maxScore: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaSubtext: string;
  pdfFileName: string;
}

export const resultProfiles: ResultProfile[] = [
  {
    id: "dreamer",
    minScore: 10,
    maxScore: 16,
    title: "Twój wynik: Bystry, ale Przebodźcowany Marzyciel",
    subtitle: "To nie jest bunt. To biologiczny komunikat.",
    description:
      'Z Twoich odpowiedzi wyłania się fascynujący i bardzo konkretny obraz neurobiologiczny. Obserwowany upór, nagłe wybuchy czy rzekoma \u201Ekrnąbrność\u201D Twojego dziecka to nie błędy wychowawcze. To namacalny dowód na to, że w jego mózgu dominuje obecnie tzw. przetwarzanie impulsywne (bottom-up).\n\nCo to oznacza? Sygnały z jego układu emocjonalnego wyprzedzają jeszcze niedojrzałe sieci hamujące w korze przedczołowej. Twoje dziecko w momentach kryzysu nie odmawia współpracy ze złośliwości \u2013 ono po prostu nie jest w stanie przetworzyć kolejnego bodźca.\n\nZamiast eskalacji dyscypliny, despercko potrzebuje zjawiska \u201Edebugowania środowiska\u201D, a Ty musisz na chwilę stać się jego zewnętrzną korą przedczołową.',
    ctaText: "Zdejmij z siebie presję i przejmij kontrolę. >",
    ctaSubtext:
      "Podaj adres e-mail, a prześlę Ci natychmiast Pełną Analizę Profilu oraz gotowy do wdrożenia dziś protokół Zero-Prep (5-minutowe ćwiczenie, które fizycznie rozbudowuje sieci hamujące w mózgu Twojego dziecka).",
    pdfFileName: "Logiglowka_Profil_Poznawczy_Dziecka1.pdf",
  },
  {
    id: "explorer",
    minScore: 17,
    maxScore: 23,
    title: "Twój wynik: Kreatywny Eksplorator",
    subtitle: "Gigantyczny potencjał, który wymaga optymalizacji zasilania.",
    description:
      'Zmagasz się czasem z poczuciem, że Twoje dziecko rano jest bystrym strategiem, a wieczorem kompletnie traci koncentrację i emocjonalną równowagę? Wynik Neuro-Kalkulatora wyjaśnia ten mechanizm bezbłędnie.\n\nTwoje dziecko znajduje się w kluczowej fazie tzw. radykalnego przycinania synaptycznego. Zręby kontroli i pamięci operacyjnej już błyszczą, ale ich bufor jest wciąż bardzo mały.\n\nGdy system doznaje \u201Eprzegrzania\u201D (po intensywnym dniu w przedszkolu lub w silnych emocjach), sieć uwagowa drastycznie spada. To nie jest regres. To masywna reorganizacja kory mózgowej przed wielkim skokiem elastyczności poznawczej.',
    ctaText: 'Zrozum mechanizm i powiększ \u201Epojemność bufora\u201D swojego dziecka.',
    ctaSubtext:
      "Zostaw e-mail, aby natychmiast odebrać Pełną Analizę Profilu oraz dedykowany Protokół Rezerwacji Pojemności – 5-minutowe ćwiczenie domowe, które powiększy zasoby jego pamięci roboczej.",
  },
  {
    id: "strategist",
    minScore: 24,
    maxScore: 30,
    title: "Twój wynik: Logiczny Strateg",
    subtitle: "Elitarna autonomia poznawcza. Czas na wyższy poziom.",
    description:
      'Uzyskane przez Ciebie parametry są wyjątkowe. Jako rodzic-architekt wypracowałeś bezbłędną optymalizację okien neuroplastyczności u swojego dziecka.\n\nProfil Logicznego Stratega oznacza, że w jego architekturze wykształciła się silna autonomia sieci wykonawczych (top-down processing). Twoje dziecko skutecznie filtruje bodźce, blokuje pierwotne impulsy i rygorystycznie monitoruje własne zachowanie.\n\nStoisz teraz przed zupełnie nowym, fascynującym wyzwaniem. Tradycyjna stymulacja to dla niego za mało \u2013 brak odpowiedniego, inteligentnego wyzwania poznawczego może prowadzić do znużenia i demotywacji. Twoje dziecko jest w optymalnym punkcie startowym do budowy najwyższych przewag kognitywnych.',
    ctaText: "Zdobądź instrukcje dla elitarnych umysłów.",
    ctaSubtext:
      "Zostaw adres e-mail, aby odebrać Pełną Analizę Profilu oraz wysoce zaawansowany Protokół Operacji Metapoznawczej – 5-minutowy trening elastyczności myślenia i radzenia sobie z błędami.",
  },
];

export function getProfileByScore(totalScore: number): ResultProfile {
  const clamped = Math.max(10, Math.min(30, totalScore));
  return (
    resultProfiles.find(
      (p) => clamped >= p.minScore && clamped <= p.maxScore
    ) ?? resultProfiles[0]
  );
}
