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
          <router-link to="les3" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Les 3</router-link>
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
          Les 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Stagevoorbereiding
        </div>
        <div>
          Je hoeft niet ziek te zijn om beter te willen worden ~ 365 Dagen Succesvol
        </div>
      </div>
    </div>

    <div class="relative col-start-1 col-span-2 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Opdracht 1A
        </div>
        <div class="text-4xl text-white font-semibold">
          LinkedIn profiel
        </div>
        <div>
          <a href="https://www.linkedin.com/in/vincent-evers-900745168/" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline rounded-tl-xl rounded-br-xl w-50 ">Mijn LinkedIn profiel</a>
        </div>
      </div>
    </div>
    <div class="relative col-start-3 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Opdracht 1B
        </div>
        <div class="text-4xl text-white font-semibold">
          Curriculum vitae
        </div>
        <div>
          Zie onderaan pagina
        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Opdracht 2B
        </div>
        <div class="text-4xl text-white font-semibold">
          Invultekst
        </div>
        <div>
          Mijn ideale stageplek zou een middelgrote organisatie zijn die profit is en Nederlands georiënteerd werkt, waar ik kan werken als een uitvoerder. Ik ben vooral geïnteresseerd in taken die Backend en Cloud omvatten omdat daar mijn expertise en interesse ligt. Deze functie zou mijn expertise in basis .NET  aanvullen en mij de kans geven om het werken in een goed scrum team en het beter ontwikkelen van .NET applicaties te ontwikkelen, wat belangrijk is omdat daar veel vraag naar is in de praktijk en het voor mij interessant is. Op deze plek moet ik kunnen leren samenwerken en goede code schrijven. Ik wil werken in de randstad, en ben bereid om binnen een uur reistijd te reizen. Het is cruciaal dat deze organisatie staat voor het helpen van mensen en natuur, het liefst doen ze goed voor de wereld en biedt goede begeleiding bij mijn tijd bij hun als primaire voorwaarden en een goede stagecompensatie als secundaire voorwaarden.
          <br><br>
          Toen iemand anders deze tekst aan mij voorlas dacht ik inderdaad van ja, dit zoek ik. Dit zijn mijn interreses momenteel en hier zou ik veel van leren.
        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Opdracht 3
        </div>
        <div class="text-4xl text-white font-semibold">
          KPN Meewerkstage si private cloud
        </div>
        <div>
          <a href="https://jobs.kpn.com/vacature/777/meewerkstage-si-private-cloud" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline rounded-tl-xl rounded-br-xl w-50 ">KPN stage vacature</a>
          <br><br>
          Zoekterm: Stage backend Cloud, via een tussensite gevonden.
          Wat mij aanspreekt is dat ik veel met Cloud mag gaan werken en ook echt aan servers werk, daarnaast onderhoud ik dan veel van de systemen bij het bedrijf
        </div>
      </div>
    </div>
    <div class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Opdracht 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Back-end Developer stage in het centrum van Utrecht!
        </div>
        <div>
          <a href="https://www.hbo-stagemarkt.nl/stages/vacature/back-end_developer_stage_in_het_centrum_van_utrecht_1417" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline rounded-tl-xl rounded-br-xl w-50 ">Violet88 stage vacature</a>
          <br><br>
          Via een externe site gezocht op de opleiding en daar dan stage’s bij.
          Dit is een wat andere stage, meer gefocused op JS en PHP. Vooral het JS gedeelte van deze stage lijkt me leuk.

        </div>
      </div>
    </div>
    <div class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Opdracht 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Stage bij Q42
        </div>
        <div>
          <a href="https://werkenbij.q42.nl/stage " target="_blank" rel="noopener noreferrer" class="text-blue-500 underline rounded-tl-xl rounded-br-xl w-50 ">Q42 stage vacature</a>
          <br><br>
          Hier ben ik zelf al en keer langs geweest met de studievereniging, een hele leuke plek en erg leerzaam. Vooral de sfeer voelde hier meteen goed.

        </div>
      </div>
    </div>




  </div>
  <img
      class="rounded-tl-3xl rounded-br-3xl  object-cover "
      src="/src/assets/Screenshot%202024-06-14%20at%2013.21.54.png"
      alt="Foto of Vincent Evers"
  />
</template>

<style scoped>

</style>