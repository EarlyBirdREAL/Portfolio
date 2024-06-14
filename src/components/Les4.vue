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
          <router-link to="les4" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Les 4</router-link>
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
          Les 4
        </div>
        <div class="text-4xl text-white font-semibold">
          Elevator Pitch
        </div>
        <div>
          In a world of elevators, a pitch is everything. It can either take you up or bring you crashing down. ~ Elevator Pitch
        </div>
      </div>
    </div>

    <div class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Elevator pitch
        </div>
        <div class="text-4xl text-white font-semibold">
          Pitch
        </div>
        <div>
          Vanuit jongs af aan vond ik IT al interessant, in groep 8 onderhield ik al alle tablets die we in de klas gebruikte, sindsdien is het alleen maar meer geworden, middelbare school informatica, hogeschool HBO-ICT en zo sta ik nu voor je. Stage .NET developer bij XXX, voor mij is .NET het leukste framework waar ik graag veel moeite in stop, ik heb er al 2 projecten in gedaan en hoop hier nog veel verder in te groeien. Daarnaast is het cloud aspect van de stage ook erg interessant omdat ik me daar ook steeds meer in verdiep.
        </div>
      </div>
    </div>
    <div class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Elevator Pitch
        </div>
        <div class="text-4xl text-white font-semibold">
          Tops
        </div>
        <div>
          Ronde 1: Jermaine<br>
          - Klinkt enthousiast.<br>
          - Vermeld eerdere ervaring.
          <br><br>
          Ronde 2: Amber<br>
          - Vermeld relevante informatie. <br>
          - Klinkt inderdaad enthousiast.<br>
          <br>
          Ronde 3: Pepijn<br>
          - Achtergrond informatie was goed. <br>
          - Duidelijke ervaring. <br>
          <br>
          Ronde 4: Jamie <br>
          - Duidelijke ervaring. <br>
          - Klinkt enthousiast.
        </div>
      </div>
    </div>
    <div class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Elevator Pitch
        </div>
        <div class="text-4xl text-white font-semibold">
          Tips
        </div>
        <div>
          Ronde 1: Jermaine<br>
          - Spreekt snel.<br>
          - Spreekt zacht en moet wat minder stotteren.
          <br><br>
          Ronde 2: Amber<br>
          - Spreekt nogsteeds snel. <br>
          - Begin met het zeggen van je opleiding.<br>
          <br>
          Ronde 3: Pepijn<br>
          - Betere overgang vanuit de "intro". <br>
          - Harder praten. <br>
          <br>
          Ronde 4: Jamie <br>
          - Vertel niet dat het een fictieve stage is tussendoor. <br>
          - Het begin iets anders formuleren.
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>

</style>