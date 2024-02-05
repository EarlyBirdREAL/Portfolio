<template>
<!--  <div class="w-full">-->
<!--    <h1 class="font-bold p-2">Home</h1>-->
<!--  </div>-->
  <div class="grid grid-cols-6 gap-4 p-6 text-gray-500 sm:max-w-6xl sm:mx-auto">
    <div class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class=" rounded-tl-xl rounded-br-xl w-50 ">
        <img
            class="rounded-tl-xl rounded-br-xl h-44 object-cover "
            src="/src/assets/pfp.jpg"
            alt="Foto of Vincent Evers"
        />
      </div>
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Full-Stack Developer
        </div>
        <div class="text-4xl text-white font-semibold">
          Vincent Evers
        </div>
        <div>
          Ik ben een gemotiveerde 20 jarige Software developer die zich geontwikkeld heeft in meerder programmeertalen en frameworks.
        </div>
      </div>
    </div>

    <div class="relative col-start-1 col-span-2 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat voor een ID'er?
        </div>
        <div class="text-4xl text-white font-semibold">
          Wie ben ik?
        </div>
        <div>
          Ik vind het leuk om mezelf uit te dagen, het boeit mij erg om te zien hoe iets anders kan.
          Ik leer graag nieuwe dingen en wil snel aan de slag, al word dat soms minder door sommige scrum taken.
          Maar ondanks dat gaat die vlam weer helemaal in mij aan op het moment dat ik mag beginnen met programmeren.
        </div>
      </div>
    </div>
    <div class="relative col-start-3 col-span-5 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat kan ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Big Five Personality Test.
        </div>
        <div>
          Bij deze test word er gekeken naar 5 aspecten van je persoonlijkheid.<br>
          <br>
          <b>Openheid voor ervaringen:</b><br>
          Hier is uit gebleken dat ik wat meer traditioneel ben en me nuchter gedraag, ik houd van het praktisch blijven en denken. Wat ik minder doe is dus experimenteel denken, ik ben wat minder fantasierijk dan gemiddeld. Mijn percentage bij deze test was 34%.
          <br><br>
          <b>Gewetensvolheid:</b><br>
          Ik ben erg spontaan en houd van flexibel plannen, ik ga liever niet elke dag precies hetzelfde traject door en heb veel afwisseling nodig. Ik ben dus wat minder georganiseerd en efficiënt. Mijn percentage bij deze test was 11%.
          <br><br>
          <b>Extraversie:</b><br>
          Ik ben gereserveerd en formeel, ik ben stil en werk het liefst alleen. Ik zit graag niet in een leiders rol en doe het liefst alleen de taken die aan mij gegeven zijn. Mijn percentage bij deze test was 6%
          <br><br>
          <b>Meegaandheid:</b><br>
          Ik leef meer met mensen mee dan gemiddeld, zorg dat mensen het naar hun zin hebben en dat ze zich niet rot voelen. Ik ben gedreven naar een oplossing te komen in plaats van concurreren en conflicteren. Mijn percentage bij deze test was 70%
          <br><br>
          <b>Natuurlijke reacties:</b><br>
          Met deze uitslag ben ik het minder eens, hier is namelijk uitgekomen dat ik negatieve emotionele reacties zou hebben  en geneigd ben tot piekeren. Zelf denk ik dat dit niet het geval is, ik kan snel mijn emoties aan de kant zetten en verder gaan met iets. Dit komt later dan een keer aan bod als ik wat afgekoeld ben. Mijn percentage bij deze test was 83%

        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat kan ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Caluwe Kleurentest
        </div>
        <div>
          Als veranderaar ben ik vooral <span class="text-red-500">'rood'</span>. Ik sta bekend om mijn vastberadenheid, leiderschap en focus op het behalen van resultaten. Ik ben niet bang om veranderingen te beginnen en te leiden, met een duidelijke visie voor ogen. Mijn hoge resultaat in de <span class="text-white">'witte'</span> kleur benadrukt mijn persoonlijke aanpak. Ik hecht veel waarde aan mensen hun skills en samenwerking, hierdoor kan ik mensen goed betrekken in het veranderingsproces.<br><br>

          De <span class="text-green-600">'groene'</span> kleur in mijn profiel wijst erop dat ik mensen graag laat leren. Ik ben goed in luisteren naar verschillende perspectieven en het oplossen van conflicten op een constructieve manier. Hoewel mijn scores in <span class="text-yellow-400">'geel'</span> en <span class="text-blue-500">'blauw'</span> wat minder zijn, betekent dit niet dat ik niet opensta voor innovatie of het belang van structuur onderschat. Ik kan zeker nieuwe ideeën omarmen en ben in staat om de benodigde structuur aan te brengen waar nodig.<br><br>

          Als veranderaar ben ik evenwichtig en veelzijdig. Ik combineer mijn doelgerichte aanpak met een sterke focus op het welzijn van de betrokkenen. Mijn vermogen om zowel zakelijke doelen te behalen als aandacht te schenken aan de menselijke kant van verandering maakt mij effectief in het leiden van veranderingen, met respect voor zowel de organisatie als de individuen binnen die organisatie.
        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat kan ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Mijn Ervaringen.
        </div>
        <div>
          De afgelopen jaren heb ik veel geleerd, niet alleen met betrekking tot programmeren maar ook hoe te werken in groepen. Zo begon in in mijn eerste semester ID als complete beginneling, ik wist niks en kon nog niks. Maar door te leren samenwerken met je groepsgenoten en met hun begeleiding kwam ik een heel eind. <br><br>

          In het volgende semester leerde ik al snel dat wat ik allemaal geleerd had nog niks was vergeleken met wat ik kon leren. Zo ging ik snel met scrum vooruit, maar ook het programmeren en samenwerken ging naar een hoger niveau. In dit laatste semester heb ik dit allemaal weer verhoogd en ben ik zelfs scrum master geworden, iets compleet nieuws voor mij, het ging dan ook niet altijd goed, maar ik heb er veel van geleerd.<br><br>

          Uiteindelijk heb ik dus van alles geleerd, maar het belangrijkste is toch hoe je goed kan samenwerken en van elkaar kan leren.
        </div>
      </div>
    </div>
    <div class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat kan ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Circle of Concern en Influence.
        </div>
        <div>
          <b>Circle of Concern</b><br>
          In mijn Circle of Concern staan de volgende dingen:<br><b>
          - Politiek<br>
          - Milieu<br>
          - Werk van andere mensen<br>
          - De welzijn van andere
          </b>
          <br>
          <br>
          <b>Circle of Influence</b><br>
          In mijn Circle of Influence staan de volgende dingen:<br><b>
          - Goede werkhouding<br>
          - Mensen om mij aan het werk houden<br>
          - Mensen helpen met problemen<br>
          - Zorgen voor eigen gezondheid<br>
          - Vrolijkheid van andere
        </b>
        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-2 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat kan ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Lencioni
        </div>
        <div>
<!--          TODO: insert Lencioni stuff-->
        </div>
      </div>
    </div>
    <div class="relative col-start-3 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat wil ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Wat Voor Soort Bedrijf en Cultuur?
        </div>
        <div>
          Voor mij zou het ideaal zijn als ik een klein bedrijf zou kunnen vinden die aandacht geven aan de kleine dingen. Als je bij een groot bedrijf begint ben je al snel een nummertje en ga je maar gewoon aan het werk, als je dan een vraag hebt moet je iemand anders gaan vragen waarvan je niet eens weet of diegene daar wel voor open staat.<br>
          Ik heb het gevoel dat je bij kleine bedrijven wat meer welkom bent, en je je sneller thuis voelt. Tevens is het makkelijker om naar iemand toe te stappen om te vragen voor hulp omdat ze jou ook beter kennen.<br><br>

          Maar dat is ook niet altijd fijn, vaak is je loon wat minder dan bij grote bedrijven en is er minder ontwikkelingsbudget om je eigen vaardigheden tussendoor omhoog te schroeven.
        </div>
      </div>
    </div>
    <div class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Wat wil ik?
        </div>
        <div class="text-4xl text-white font-semibold">
          Wat Heb Ik Nodig?
        </div>
        <div>
          Om goed te functioneren zal ik ook zeker wel begeleiding nodig hebben van een andere developer, ik kan al best veel maar zal ook regelmatig vast lopen. Daarnaast zou het fijn zijn als het bedrijf de jetbrains IDE's suite gebruikt omdat ik daar al gewend aan ben en het me daar erg makkelijk in af gaat.
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>
