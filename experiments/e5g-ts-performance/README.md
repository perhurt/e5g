# Transporttjänster

Transporttjänster är ett nytt begrepp som, kort, innebär att en applikation
istället för att be om ett protokoll (t.ex. TCP) ber om en tjänst. Denna tjänst
skapas av operativsystemet och används för att överföra data.

Till exempel, säg att en webbläsare vill ha låg latens, men varken har kunskap
om vilka transportprotokoll som kan används lokalt, eller som stöds av servern
det skall kommunicera med. Vidare så har den ingen aning om hur protokollet
skall konfigureras optimalt eftersom webbläsaren inte känner till "omgivningen"
(t.ex. om enheten den körs på är ansluten till internet via kabel eller 5G)
eller vilka konfigurationsmöjligheter som finns.

Transporttjänster löser detta problem genom att helt transparent erbjuda en
tjänst som uppfyller de "krav" som applikationen ställer.

Ett exempel på ramverk för transporttjänster är
[NEAT](https://github.com/NEAT-project/neat) som vi för detta projekts räkning
använde för att testa ett par transporttjänster.

Eftersom god prestanda för websurfning kräver låg latens, skapade vi en s.k.
NEAT-profil för att konfigurera stockningskontrollen hos TCP för att uppfylla
det. Policyn och valet av stockningskontroll gjordes utifrån vad vi observerat
hittills i våra experiment med 5G. Denna profil finns i filen
`low_latency_tcp.profile`.

Vi skapade även en profil som är tänkt för applikationer som kräver hög
throughput, t.ex. filnedladdningsprogram. Denna profil återfinns i filen
`high_tp_tcp.profile`.


För att använda dessa profiler behöver en applikation använda sig av
NEAT-ramverket. För fullständig information om detta ramverk, se [denna
länk](https://neat.readthedocs.io/en/latest/).
