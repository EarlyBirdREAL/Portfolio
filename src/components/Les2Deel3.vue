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
          <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Deel 3</span>
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
          Deel 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Ambitie op de korte termijn
        </div>
        <div>
          1.	Ik wil in de komende 6 maanden mijn minor aan de hogeschool InHolland in Haarlem afronden en goed revalideren van mijn operatie.
          <br>
          2.	Zorgen dat ik niks belangrijks mis qua school tijdens mijn minor en zorgen dat ik het goed doe voor de toetsen en projecten van de opleiding. Daarnaast ook goed luisteren naar de fysio om te zorgen dat mijn revalidatie goed gaat.
          <br>
          3.	Ik hoop over 6 maanden bijna klaar te zijn met de minor en er goed voor te staan, daar speelt ambitie een grote rol in, ik moet namelijk zorgen dat mijn interesse en dus ambitieniveau hoog genoeg blijft dat ik de opleiding wil blijven doen.
          <br>
          4.	Goed beginnen aan de minor en zorgen dat ik niet afgeleid raak of gedesinteresseerd

        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Ambitie op de langeRE termijn
        </div>
        <div>
          1.	Over ongeveer 2 jaar hoop ik mijn studie afgerond te hebben en misschien ook al op zoek te zijn naar een baan.
          <br>
          2.	Als ik mijn minor niet haal dan lukt dat al niet en zal ik nog langer bezig zijn met de opleiding. <br>
          3.	Idealiter heb ik aan het einde van de komende 2 jaar al een baan voor na mijn studie, het liefst bij een bedrijf waar ik me goed voel (Waarschijnlijk het afstudeerstage bedrijf). Hier moet ik wel hard voor werken want daar moet ik nog wel wat vakken voor halen.
          <br>
          4.	Mijn minor halen en snel beginnen met het zoeken naar stages zodat ik daar in februari ook meteen mee kan beginnen.

        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Ambitie op de lange termijn
        </div>
        <div>
          1.	Een goede en stabiele baan hebben en in het bezit zijn van een huis. <br>
          2.	Door goed op te letten op school en zorgen dat ik mijn stages goed afrond zijn de baankansen hoger en kan ik me ook beter omhoog werken in een bedrijf.
          <br>
          3.	Een baan bij een bedrijf waar ik me goed bij voel en waar ik nieuwe vrienden kan maken en soms mee uit kan gaan. Daarnaast samenwonen met m’n vriendin in een redelijk huis. Hiervoor moet mijn ambitie wel hoog zijn om dit alles binnen 5 jaar te kunnen halen
          <br>
          4.	Zorgen dat nu alles goed gaat met de opleiding.

        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>

</style>