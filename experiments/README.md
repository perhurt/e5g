# Experiment

Det gjordes två "uppsättningar" experiment:

- En uppsättning där syftet var att undersöka hur vanliga internetapplikationer påverkas av en migrering från 4G till 5G-nätet. 
- Den andra uppsättningen undersökte hur valet av stockningskontroll i TCP påverkar prestandan hos dessa applikationer.

Vi utförde även experiment där transporttjänster definierats för att, baserat på föregående resultat, matcha rätt applikation med rätt stockningskontroll. Dessa experiment finns beskrivna i foldern `e5g-ts-performance`.

## Genomförande


### Topologi
Alla experiment kördes i en nätverkstopologi med fyra sammankopplade Linux-datorer:

```
Klient <--> 4G/5G GW <--> GW <--> Server
```

- Klient: denna maskin representerade 4G/5G-enheten och var den som applikationerna kördes på
- 4G/5G GW: denna maskin emulerade önskat 4G/5G nät
- GW: denna maskin emulerade "internet"
- Server: denna maskin representerade den fysiska enheten som klienten kommunicerade med

### Setup
För att kunna emulera olika nätverk så användes mjukvaran KauNetEm, vilket möjliggör att vanliga applikationer körs över ett simulerat nät. KauNetEm kördes både båda GW-maskinerna. KauNetEm finns tillgängligt [här](https://git.cs.kau.se/pub/kaunetem).

För att kunna emulera ett 4G och 5G nät realistiskt så definierade vi ett antal scenarion (dokumenterade i den tekniska rapporten) som vi sedan implementerade m.h.a. mmWave-modulen för ns3 (mer info [här](https://github.com/nyuwireless-unipd/ns3-mmwave)). Vår implementation finns i filen `software/mmw-buildings.cc`. Vi körde sedan dessa scenarion för att få ut länkkarakteristik som sedan konverterades till KauNetEm-mönster m.h.a. `software/patternize.py`.

### Applikationerna
Tre olika applikationer testades:
1. Web: Puppeteer (läs mer [här](https://pptr.dev)) användes på klienten för att ladda hem ett antal siter vi speglat. De speglade siterna var lagrade, och tillgängliga, via en webbserver på servern. Puppeteer användes för att det går att automatisera experiment och man kan få ut många olika metriker. Det puppeteer-program som användes var `software/puppeteer.js` och de olika siterna finns sparade under `datasets/web`.
2. Filnedladdning: Curl (läs mer [här](https://curl.haxx.se)) användes på klienten för att ladda hem ett antal filer av olika storlekar. Filerna var även de lagrade på webservern som användes i experimenten. Med tanke på filernas storlek har vi inte sparat dom här. Om man vill återskapa experimenten är det bara att skapa lika stora filer med slumpmässigt innehåll. Storlekarna återfinns t.ex. i den tekniska rapporten.
3. DASH-video: För att köra DASH-experimenten körde vi en version av Chrome, utan grafiskt användargränssnitt, som instruerades att spela upp en film från webserven. Med hjälp av en specialanpassad JavaScript-baserad DASH-spelare som fanns på webservern kunde vi få ut prestandametrik. Både datasetet och DASH-spelaren finns under `datasets/dash`. Spelaren finns där eftersom den de facto är en del av datasetet då den är javascript-baserad. Filen `dash_js_bbb.html` behöver ändras om experiment skall köras, då IP-addressen till servern måste anges längst ned i filen.

### Köra experimenten
De skript som användes för att köra dessa experiment finns under foldern `scripts`. Lägg märke till att de inte går att återanvända rakt av, då information specifik för vår experimentuppsättning förekommer i dem. Ett exempel på detta är t.ex. IP-adresser. Skripten förutsätter även att ett antal standardmjukvaror, t.ex. tcpdump, är installerade.

