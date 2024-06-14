<script setup>

</script>

<template>


  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
          </svg>
          Home
        </a>
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
          Full-Stack Developer / Cloud Engineer
        </div>
        <div class="text-4xl text-white font-semibold">
          Vincent Evers
        </div>
        <div>
          Ik ben een gemotiveerde 20 jarige Software developer die zich geontwikkeld heeft in meerder programmeertalen en frameworks.
        </div>
      </div>
    </div>

    <router-link to="les1" class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Les 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Sollicatie workshop
        </div>
        <div>
          Solliciteren als stagiair is een cruciale stap in je professionele ontwikkeling. Een stage biedt je de kans om waardevolle werkervaring op te doen, je vaardigheden in de praktijk te brengen en je netwerk uit te breiden. Door te solliciteren leer je niet alleen hoe je jezelf effectief kunt presenteren aan potentiële werkgevers, maar ook hoe je omgaat met feedback en uitdagingen. Het is een uitgelezen kans om je carrière een vliegende start te geven en een duidelijk beeld te krijgen van je toekomstige werkveld. Dus aarzel niet, grijp die kans en zet de eerste stap naar een succesvolle loopbaan!
        </div>
      </div>
    </router-link>
    <router-link to="Les2" class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Les 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Ambitie
        </div>
        <div>
          Ambitie is de drijvende kracht achter persoonlijke en professionele groei. Het stelt je in staat om doelen te stellen, jezelf uit te dagen en voortdurend te streven naar verbetering. Met ambitie kom je verder dan je comfortzone en ontdek je nieuwe mogelijkheden en talenten. Het motiveert je om hard te werken, door te zetten bij tegenslagen en te blijven leren. Ambitie is niet alleen de sleutel tot succes, maar ook tot zelfontplooiing en voldoening in je carrière en leven. Dus omarm je ambitie en laat het je gids zijn op weg naar een inspirerende en vervullende toekomst!
        </div>
      </div>
    </router-link>
    <router-link to="Les3" class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Les 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Stagevoorbereiding
        </div>
        <div>
          Goede voorbereiding op je stage is essentieel voor een succesvolle en leerzame ervaring. Door je grondig voor te bereiden, kun je het meeste uit je stage halen en een blijvende indruk achterlaten bij je werkgever. Dit betekent dat je jezelf moet informeren over het bedrijf, de sector en de specifieke taken die je zult uitvoeren. Zorg ervoor dat je de benodigde vaardigheden en kennis opfrist en wees proactief in het stellen van vragen en het zoeken naar informatie. Een goede voorbereiding laat zien dat je serieus en gemotiveerd bent, en helpt je om zelfverzekerd en effectief aan de slag te gaan. Dus investeer de tijd in een grondige voorbereiding en leg de basis voor een vruchtbare en succesvolle stageperiode!
        </div>
      </div>
    </router-link>
    <router-link to="Les4" class="relative col-start-2 col-span-4 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Les 4
        </div>
        <div class="text-4xl text-white font-semibold">
          Elevator Pitch
        </div>
        <div>
          Een sterke elevator pitch is een krachtig instrument in je professionele arsenaal. Het stelt je in staat om jezelf en je ideeën overtuigend en beknopt te presenteren in de korte tijd die je vaak hebt tijdens ontmoetingen of netwerkgelegenheden. Een goed voorbereide elevator pitch helpt je om zelfverzekerd over te komen, je belangrijkste kwaliteiten en prestaties te benadrukken en een blijvende indruk achter te laten. Het kan deuren openen naar nieuwe kansen, samenwerking en groei. Door te oefenen en je pitch af te stemmen op je publiek, vergroot je je kans om je doelen te bereiken en je professionele netwerk uit te breiden. Dus investeer in een sterke elevator pitch en wees klaar om jezelf op je best te presenteren, waar en wanneer de gelegenheid zich voordoet!
        </div>
      </div>
    </router-link>
  </div>
  <div class="p-6 text-gray-500 sm:max-w-6xl sm:mx-auto">
    De tekst op deze pagina is gegenereerd met AI
  </div>
</template>

<style scoped>

</style>