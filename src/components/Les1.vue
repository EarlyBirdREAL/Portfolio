<script setup>

</script>

<template>


  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <router-link to="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          Home
        </router-link>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <router-link to="les1" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Les 1</router-link>
        </div>
      </li>
    </ol>
  </nav>

  <div class="grid grid-cols-6 gap-4 p-6 text-gray-500 sm:max-w-6xl sm:mx-auto">
    <div class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <router-link to="/" class=" rounded-tl-xl rounded-br-xl w-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        <img
            class="rounded-tl-xl rounded-br-xl h-44 object-cover "
            src="/src/assets/pfp.jpg"
            alt="Foto of Vincent Evers"
        />
      </router-link>
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Les 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Sollicatie workshop
        </div>
        <div>
          Sollicitatiegesprek "Kunt u ons eerst iets over uzelf vertellen?" "Liever niet, ik wil deze baan echt graag." ~ Ja Duh!
        </div>
      </div>
    </div>

    <div class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Tips
        </div>
        <div class="text-4xl text-white font-semibold">
          Wat zijn de belangrijkste tips?
        </div>
        <div>
          -	Zorg dat je CV overzichtelijk is en dat je alleen relevante informatie laat zien, dus niet je bijbaantje toen je 15 was als vakkenvuller.
          <br>-	Zet wat projecten op je CV om werkervaring te laten zien die niet bij een baan is gedaan, maar bijvoorbeeld op school.<br>
          <br>
          Ik ben nog niet opzoek gegaan naar een stage dus heb ik deze nog niet toegepast.
        </div>
      </div>
    </div>
    <div class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Geef 3 voorbeelden van sterke antwoorden.
        </div>
        <div class="text-4xl text-white font-semibold">
          Vraag 1: Wat zijn je sterke punten?
        </div>
        <div>
          Ik ben leergierig en wil graag dingen snappen, al loop ik ergens tegen aan dan zoek ik graag alles zo goed mogelijk uit totdat ik het begrijp. Zo loop ik daar de volgende keer niet meer tegen aan. Daarnaast kan ik goed op mezelf werken en probeer ik altijd zoveel mogelijk andere te helpen met hun problemen.
        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Geef 3 voorbeelden van sterke antwoorden.
        </div>
        <div class="text-4xl text-white font-semibold">
          Vraag 2: Wat zoek jij in een baan/stage?
        </div>
        <div>
          Het liefst leer ik zo snel mogelijk alle fijne kneepjes van het vak en kan ik jullie helpen met groeien en zorgen dat we er samen groter uitkomen dan waar we begonnen zijn. Hiernaast zou ik graag goed binnen een groep willen vallen, het liefst voelen mijn collega’s bijna als vrienden om te zorgen dat de samenwerking goed verloopt.
        </div>
      </div>
    </div>
    <div class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Geef 3 voorbeelden van sterke antwoorden.
        </div>
        <div class="text-4xl text-white font-semibold">
          Vraag 3: Wat zijn je zwakke punten?
        </div>
        <div>
          Ik kan snel in de stress schieten als ik iets fout heb gedaan, dan denk ik al snel dat alles mijn schuld is. Verder kan ik ook snel afgeleid worden als er iemand in mijn buurt komt staan.
        </div>
      </div>
    </div>
    <div class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Inzicht
        </div>
        <div class="text-4xl text-white font-semibold">
          Welk inzicht heeft deze training je gegeven?
        </div>
        <div>
          Maak een goede indruk door een overzichtelijk en professioneel cv te hebben, daarnaast is het belangrijk om actief te zijn bij je sollicitatiegesprek. Stel vragen om te laten zien dat je echt graag de positie wilt.
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>