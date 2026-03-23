

## Plan: Dodanie imienia, wysyłka e-maili z linkiem do PDF i zapis danych

### Ważna informacja o załącznikach

Wbudowany system e-mail nie obsługuje załączników plików. Zamiast tego PDF-y zostaną umieszczone w bezpiecznym magazynie plików, a e-mail będzie zawierał przycisk **"Pobierz swój raport"** z linkiem do pobrania. Efekt dla odbiorcy jest praktycznie identyczny — klika link i pobiera PDF.

### Co zrobimy

1. **Dodanie pola "Imię" do formularza wyników** — nowe pole tekstowe nad polem e-mail
2. **Zapisywanie imienia w bazie** — dodanie kolumny `first_name` do tabeli `leads`
3. **Upload 3 PDF-ów** z nowymi nazwami do magazynu plików:
   - `Logiglowka_Profil_Poznawczy_Dziecka1.pdf` (Marzyciel)
   - `Logiglowka_Profil_Poznawczy_Dziecka2.pdf` (Eksplorator)
   - `Logiglowka_Profil_Poznawczy_Dziecka3.pdf` (Strateg)
4. **Konfiguracja domeny e-mailowej** `logiglowka.pl`
5. **Stworzenie szablonu e-maila** — spersonalizowany: "Witaj [Imię]..." + link do PDF
6. **Wysyłka e-maila po przesłaniu formularza**
7. **Strona unsubscribe** — wymagana przez system

### Szczegóły techniczne

#### Baza danych
- Migracja: dodanie kolumny `first_name varchar` do tabeli `leads`
- Aktualizacja polityki RLS dla `leads` — umożliwienie UPDATE (potrzebne do upsert z imieniem)

#### Magazyn plików (Storage)
- Bucket `quiz-reports` (publiczny)
- Upload 3 PDF-ów z nowymi nazwami

#### UI (ResultScreen)
- Nowe pole input "Twoje imię" nad polem e-mail
- Walidacja Zod: imię wymagane, 2-50 znaków
- Callback `onEmailSubmit` rozszerzony o parametr `name`

#### Flow (Index.tsx)
- `handleEmailSubmit(email, name)` → upsert lead z imieniem → aktualizacja sesji → wywołanie wysyłki e-maila
- E-mail zawiera: powitanie z imieniem, tytuł profilu, przycisk do pobrania PDF

#### Pliki do modyfikacji/stworzenia

| Plik | Akcja |
|------|-------|
| Migracja SQL | Dodanie `first_name` do `leads`, UPDATE policy |
| Storage bucket `quiz-reports` | Upload 3 PDF-ów |
| `src/components/ResultScreen.tsx` | Dodanie pola imienia |
| `src/pages/Index.tsx` | Rozszerzenie handleEmailSubmit |
| `src/data/profiles.ts` | Dodanie `pdfFileName` do profili |
| Szablon e-maila (quiz-result) | Nowy — spersonalizowany z imieniem |
| `src/pages/Unsubscribe.tsx` | Nowa strona |
| `src/App.tsx` | Dodanie trasy `/unsubscribe` |

### Pierwszy krok po zatwierdzeniu

Konfiguracja domeny e-mailowej `logiglowka.pl` — pojawi się dialog do ustawienia rekordów DNS.

