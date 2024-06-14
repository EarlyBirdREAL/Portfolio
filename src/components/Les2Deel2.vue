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
          <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Deel 2</span>
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
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Hoe denk je dat je huidige ambitieniveau je kan helpen?
        </div>
        <div>
          Door je huidige ambitie niveau correct in te schatten kan je helpen inschatten wat je ergens voor over hebt om dat tot voltooiing te brengen. Al is je ambitieniveau laag zet je je doel lager zodat je niet ineens verast wordt door je slechte resultaten.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Op welke gebieden ben je het meest ambitieus?
        </div>
        <div>
          Vaak ben ik het meest ambitieus in hobby’s, dat zijn meestal dingen die ik echt leuk vind en dus ook echt graag tijd en moeite in stop.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Op welke gebieden ben je minder ambitieus?
        </div>
        <div>
          Studie is af en toe nog wel een struikel puntje voor mijn ambitie, soms heb ik er helemaal geen zin meer in omdat je, voor je gevoel, onnodige dingen aan het doen bent. Maar soms gaat het ook weer heel goed.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Welke externe factoren beïnvloeden jouw ambitieniveau?
        </div>
        <div>
          Mijn gevoelens en sociale kringen helpen erg bij aan mijn gevoel van ambitie, als ik mij somber voel en mijn vrienden niet spreek heb ik wat minder zin om ergens goed aan te zitten, terwijl als ik veel support heb er juist weer meer zin in heb.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Kun je voorbeelden geven van periodes met meer of minder ambitie?
        </div>
        <div>
          Bij een ID-project een jaar terug waren er wat dingen met de communicatie met de opdrachtgever waardoor dit niet goed verliep, dit vond ik zelf erg irritant en vervelend. Hierdoor ben ik toen minder ambitieus voor dat project gaan werken omdat dat dan toch minder fijn is, zeker omdat die drang er van de andere kant niet was.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Hoe zou je jouw huidige ambitieniveau vergelijken met een jaar geleden?
        </div>
        <div>
          Momenteel zou ik mijn ambitieniveau een beetje hetzelfde zien als vorig jaar, misschien iets minder. Vorig jaar was ik ook bezig met 2 vakken voor school, net zoals nu, alleen had ik toen nog een leerproces voor mijn nieuwe werk lopen toen waar ik het heel leuk had en dus wat extra kracht in zetten. Maar die kracht zit er nu nog steeds soort van in doordat ik nog steeds datzelfde werk doe, maar nu niet hoef te leren maar het gewoon kan doen.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Hoe zie je jezelf in de toekomst evolueren op gebied van ambitie?
        </div>
        <div>
          Als ik de juiste opdrachten krijg die mij interessant lijken dan zal mijn ambitie ook zeker hoger worden, maar het tegenovergestelde werkt ook. Dus het ligt heel erg aan waar ik mee bezig zal zijn en hoe dat gaat.
        </div>
      </div>
    </div>
    <div
        class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Op welke manieren kun je flexibel zijn in je ambitie?
        </div>
        <div>
          Mocht er een deadline zijn die belangrijk is, of iets van een collega of vriend dat af moet kan ik zeker ineens bijspringen. Zeker richting het einde van een deadline kan dat veel gebeuren, dan krijg ik een soort boost van energie.
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>