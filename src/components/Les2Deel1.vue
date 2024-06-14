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
          <router-link to="/les2" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Les 2</router-link>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Deel 1</span>
        </div>
      </li>
    </ol>
  </nav>

  <div class="grid grid-cols-6 gap-4 p-6 text-gray-500 sm:max-w-6xl sm:mx-auto">
    <div
        class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <router-link to="/" class=" rounded-tl-xl rounded-br-xl w-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        <img
            class="rounded-tl-xl rounded-br-xl h-44 object-cover "
            src="/src/assets/pfp.jpg"
            alt="Foto of Vincent Evers"
        />
      </router-link>
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Les 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Ambitie
        </div>
        <div>
          Iemand zonder ambitie is als een vogel zonder vleugels.
          ~ Walter H. Cottingham
        </div>
      </div>
    </div>

    <div
        class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Omschrijf ambitie.
        </div>
        <div>
          Stel je hebt een doel, en dit doel is heel persoonlijk voor je, of je vind het een heel gaaf doel. Dan wil je
          er alles voor geven om dat doel te bereiken, en soms zelfs net iets te veel. Vaak is dit doel iets wat
          vooruitgang boekt in je leven of carrière, maar het kan ook pure vervulling van je dromen zijn. Het vechten
          voor wat je wilt bereiken is het hebben van Ambitie, vind je een doel heel belangrijk om te halen en ga je
          daar hard voor aan de slag dan heb je veel ambitie voor dat doel.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Wat betekent ambitie voor mij?
        </div>
        <div>
          Het blij worden van het doen van taken die richting je doel werken, ik vind het zelf heel fijn als ik een
          tussentijds product zie en ik denk, wow wat gaaf! Dit geeft mij meer energie en Ambitie om het te vervolgen,
          zelfs meer dan wanneer ik begin aan iets.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Geef voorbeelden van momenten met ambitie.
        </div>
        <div>
          Het moment dat ik mijn busrijbewijs heb gehaald voelde ik mij heel ambitieus, ik moest echt even knokken om
          hem te halen maar vond dat het heel erg waard. Daarnaast was het leren van front-end development ook erg
          ambitieus, ik kon er toen bijna niks van en moest binnen een paar weken een eerste versie opzetten, heel
          moeilijk, maar zo een voldoening.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Welke waarden en overtuigingen liggen ten grondslag aan jouw ambitie?
        </div>
        <div>
          Het project moet iets zijn waar mijn interesse in ligt, anders zit er weinig ambitie in. Daarnaast vind ik het
          heel fijn om dingen te leren, zo houd ik mijn brein altijd bezig en kan ik me beter voorbereiden op volgende
          gebeurtenissen.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Zijn er mensen in je leven die je als rolmodel ziet?
        </div>
        <div>
          Een Daniel Ricciardo is een heel goed voorbeeld, ondanks tegenslagen in zijn beroep blijft hij altijd
          optimistisch en blij. Misschien voelt hij zich niet altijd zo, dat uit hij wel. Op deze manier kan hij blijven
          doorgaan met het vechten richting zijn doel.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Zijn er mensen in je leven die je als rolmodel ziet?
        </div>
        <div>
          Een Daniel Ricciardo is een heel goed voorbeeld, ondanks tegenslagen in zijn beroep blijft hij altijd
          optimistisch en blij. Misschien voelt hij zich niet altijd zo, dat uit hij wel. Op deze manier kan hij blijven
          doorgaan met het vechten richting zijn doel.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Hoe zou je jezelf omschrijven qua ambitie?
        </div>
        <div>
          Gemiddeld, soms ben ik heel ambitieus en ben ik echt van lets go dit gaan we in 1x doen, maar soms moet je me ook echt meeslepen om te zorgen dat er iets gebeurd want ik zou dan zelf niks doen.
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>