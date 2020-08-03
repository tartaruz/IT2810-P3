## Run the application
```
git clone git@github.com:charlottesoderstrom/IT2810-P3.git
```
```
cd IT2810-P3
```
```
npm start
```
NB: The database is no longer available as it has been hosted by NTNU for a schoold project.

Nedenfor er dokumentasjon av prosjektet, utarbeidet etter spesifikke krav fra faglærer. Dokumentasjonen er ufullstendig da det ikke er den nyeste versjonen.

## Innhold og funksjonalitet i brukergrensesnittet samt utseende:

Nettsiden vår, MongoFlix er en søkbar katalog med 4912 ulike filmer hvor brukeren kan søke etter filmtitler, filtrere kategorier, sortere etter dato, gi en stemme (opp eller ned) på en film, mulighet til å se en liste over alle filmer, sortert etter høyest antall stemmer, og få en avansert visning i form av en ordsky hvor brukeren kan klikke på en kategori i ordskyen og få se alle filmer innenfor den kategorien.

- En form for input av søk: Brukeren kan søke etter filmtittel, eller gjøre et tomt søk for å få alle filmer fra databasen. 
- Listebasert presentasjon av søk hvor det er lagt opp til håndtering av store resultatsett med enten blaing i sider: Ved hvert søk vil det fetches maks 10 filmer om gangen. Dersom søket har flere enn 10 resultater, får man mulighet til å trykke på “load more” og deretter hente 10 flere filmer med samme søkeinput. 
- Muligheten for å se mer detaljer om hvert av objetene: Den listebaserte presentasjonen av søkene viser bilde av filmen samt tittel og år. Brukeren har mulighet til å trykke på en liten pil for hvert filmresultat og kunne se director, genre, actors, votes og en liten filmbeskrivelse
- Mulighet for sortering og filtrering av resultatsettet: Man kan filtrere ulike kategorier samt sortere ut i fra dato (nyest til eldst). Brukeren kan huke av for kun filtere/sortering med eller uten søketittel i tillegg. Dersom brukeren ikke skriver inn en filmtittel, men kun huker av for kategorier/sortering, vil alle filmer innenfor kategoriene vises. Når man trykker på “load more” dersom det er flere filmer i resultatet, vil det fetches 10 flere filmer med samme søkekriteriene.
- Noe bruker/bruksgenererte data som skal lagres: Brukeren kan stemme opp eller ned på én film, og denne stemmen vil oppdateres i databasen ved en POST-metode. Når brukeren først har stemt opp eller ned på film, kan ikke brukeren stemme igjen på samme film. Dette sjekkes ved å lagre film-id og handlingen i localstorage. Når filmene som har blitt stemt på fetches igjen, kan man se at filmens antall stemmer har endret seg
- Avansert visning: Brukeren kan se en ordsky over alle film-kategoriene som finnes i databasen, hvor størrelsen på ordene er relativt hverandre: de ordene som er størst, har flest filmer innenfor den kategorien i databasen. Brukeren kan trykke på en av kategoriene i ordskyen og få vist en liste over alle filmene innenfor den kategorien. Her vises også kun 10 filmer om gangen, hvor brukeren kan trykke “load more” for å se 10 flere filmer innenfor den aktuelle kategorien.

### Brukergrensesnittet: 

For oss er det viktig å levere et bra brukergrensesnitt som gir brukeren en bra opplevelse. Vi har benyttet oss av tredjepartskomponenter og css for å gjøre siden så brukervennlig som mulig, og at plasseringen av elementene blir riktig. Siden er responsiv og passer til de fleste skjermstørrelser.

## Backend:


## Bruk av teknologier:

### React: 
Vi har brukt create-react-app for å initialisere applikasjonen vår. Komponentstrukturen vår er visualisert i figur 1.
<br>

<img src="https://gitlab.stud.idi.ntnu.no/IT2810-H19/teams/team-4/project-3/raw/dev/public/images/Component_hierarchy.jpg" />
<br><br>

Figur 1: Hierarkiet over React-komponentene brukt i applikasjonen
<br>

Nettsiden er delt inn i fire hovedkomponenter: Headeren som alltid vises, samt de tre ulike tab’ene. Applikasjonen er en single-page-application (SPA) ettersom vi ikke så det nødvendig å benytte oss av React-router, men istedenfor holder styr på hvilken tab man er på med redux state, og renderer den respektive komponenten ut i fra staten til tab. Vi anser komponenthierarkiet vårt som minimalt av det som var nødvendig. Grunnen til dette var å ikke ha unøvdvendig mange komponenter, og heller gjenbruke komponenter (for eksempel SearchResult er benyttet tre ulike steder). Vi valgte å løse det slik for å unngå en god del redundans av kode.


### State management: Redux

På tross av at Redux kan være mer tidkrevende å sette seg inn i enn MobX, valgte vi å gå for Redux for å håndtere staten ettersom det var denne teknologien gruppen ønsket å lære seg.

Vi har lastet ned og brukt Chrome sin extension Redux DevTools for å enkelt kunne inspisere handlinger og state i Redux i Chrome,
men denne er foreløpig kommentert ut i koden for å kunne utføre automatiske end-to-end testing i cypress.io.


Redux har en følgende flyt for managing state:
<br>
<img src="https://www.tutorialspoint.com/redux/images/data_flow.jpg" />
<br><br>
Figur 2: Redux data flow
<br>
All state i applikasjonen er håndtert med Redux, vi så det ikke nødvendig å håndtere noe state med React.

Redux storen vår som inneholder staten samt reducerne ligger i store.js
Redux storen vår har følgende reducers som endrer staten vår ved brukerinteraktivitet:
expandReducer: Holder styr på om avansert søk vises (filter og sortering)
filterSortReducer: Oppdaterer alle filterkategoriene samt sortering etter dato som brukeren har huket av for
movieReducer: Søkeresultatet, inneholder en liste av filmobjekter samt antall filmer i søkeresultatet
pageReducer: For å holder styr på “load more” knappen, økes med én hver gang brukeren vil laste inn flere filmer, slik at vi vet hvilke filmer som har blitt fetchet
searchReducer: Oppdatert tittelsøk i innputformen
tabReducer: Holder styr på hvilken tab man er på, hvor default tab er søke-siden
wordCloudReducer: For å lagre hvilken kategori i ordskyen brukeren har trykket på

Alle disse reducerne har en tilsvarende action med ulike funksjoner ved brukerinteraktivitet. Eksempelvis når man trykker på taben “Show popular” i menyen vil funksjonen handleTabChange() i tabAction bli dispatchet til den respektive reduceren. Metoden handleTabChange returnerer kun en type slik at tabRedcuer vet hvordan den skal oppdatere staten til tab. Se figur 1 for en visuell  fremstilling av flyten fra brukerinteraktivitet til en state i Redux er oppdatert. 


### Database: MongoDB:
### Rest API: Node express:

### Tredjepartskomponenter
Vi har brukt følgende tredjepartskomponenter i vår applikasjon:
- Ordskyen: react-d3-cloud
- Headeren: material-ui
- Sjekkboksene for filtrering og sorering: material-ui
- Resultatsøk for hver film: material-ui
- Alertboks for når en bruker av stemt på en film: react-toastify
- Knapper for å stemme opp eller ned på en film: react-icons


## Testing:





### Jest enhetstesting:

Vi valgte å bruke Jest og Enzyme til enhetstesting for å oppnå en robust test-lønsning. 
Jest og Describe() gjorde det enkelt å organisere og vedlikeholde testene. 
Vi har også brukt noen snapshot-tester for å teste at components, actions og reducers oppfører seg slik de er ment å gjøre. 
På bildet under ser du resultatet av de kjørte testene. 
- Vi bruker "npm run test" for å kjøre testene

<br>
<img src="https://gitlab.stud.idi.ntnu.no/IT2810-H19/teams/team-4/project-3/raw/dev/public/images/testImage.png" />
<br><br>
Figur 3: Skjermbilde av snapshot-testing
<br>

### Automatisk end-to-end testing: 
Vi har testet webapplikasjonen i Chrome, og anbefaler å bruke denne nettleseren. 
For automatisk end-to-end testing har vi brukt cypress.io
Vi har testet alle mulige søkefunksjoner: tittel, sjanger, ingenting og tittel+sjanger. Vi har også testet at du kommer deg inn på "most popular"-taben. I "advansed view har vi testet word-clouden ved å trykke på kategorien "comedy" og har fått verifisert at headeren "comedy" finnes slik at følgende filmer med sjanger "comedy" dukker opp. 

- Vi bruker "npm run cypres" for å kjøre testen. 


## Bruk av git

### Brancher: 
Vi har hatt en dev branch ut i fra master branchen for et ekstra lag med sikkerhet av at alt som ligger i master branchen er fungerende kode. For hver nye issue som er blitt gjort, har vi laget en egen issue-branch fra dev, og deretter merget med dev når issuen er ferdigstilt.

### Commits: 
Alle commits som er tilknyttet en issue starter alltid med issue-id’en

## Sammarbeid og styring av utviklingsoppgaver med issues


### Issues: 
Da vi hadde planlagt prosjektet med hovedgjøremål for å lage applikasjonen, stykket vi opp arbeidsoppgavene ned til mindre issues som vi kontinuerlig har fordelt til medlemmene i gruppa. Vi har aktivt brukt kanban-boardet på gitLab for å holde styr på issuene. Issuene har vi flyttet fra to-do -> doing -> closed når issuen er ferdigstilt.

### Samarbeid: 
Vi har alle hatt ulike ansvarsområder under utviklingen av prosjektet (to på front-end og én på backend). For å samarbeide mest mulig effektivt har vi lært hverandre om den andres ansvarsområder.

## Kilder
De viktigste kildene som er brukt:
<br>
[Redux](https://www.youtube.com/watch?v=CVpUuw9XSjY)
<br>
[Redux](https://www.youtube.com/watch?v=93p3LxR9xfM)
<br>
[Brukergrensesnitt](https://material-ui.com/)

