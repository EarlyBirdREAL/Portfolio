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
          <router-link to="les2" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Les 2</router-link>
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

    <router-link to="les2deel1" class="relative col-start-1 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 1
        </div>
        <div class="text-4xl text-white font-semibold">
          Wat betekent ambitie voor jou?
        </div>
        <div>
          Klik hier om naar dit deel van de opdracht te gaan.
        </div>
      </div>
    </router-link>
    <router-link to="les2deel2" class="relative col-start-4 col-span-3 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 2
        </div>
        <div class="text-4xl text-white font-semibold">
          Ambitie als een continuüm
        </div>
        <div>
          Klik hier om naar dit deel van de opdracht te gaan.
        </div>
      </div>
    </router-link>
    <router-link to="les2deel3" class="relative col-start-1 col-span-6 group border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div class="flex flex-col gap-2 justify-center">
        <div class="uppercase text-sm">
          Deel 3
        </div>
        <div class="text-4xl text-white font-semibold">
          Jouw ambitie definiëren
        </div>
        <div>
          Klik hier om naar dit deel van de opdracht te gaan.
        </div>
      </div>
    </router-link>



  </div>
</template>

<style scoped>

</style>