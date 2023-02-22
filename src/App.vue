<template>
  <div class="bg-gray-100 h-100">
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center h-full px-5"
      >
        Home
      </router-link>
      <div>
        <router-link
          :to="{ name: 'byName' }"
          class="inline-block px-2 h-full hover:bg-purple-200"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-block px-2 h-full hover:bg-purple-200"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'byIngredient' }"
          class="inline-block px-2 h-full hover:bg-purple-200"
        >
          Meals by Ingredients
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style scoped></style>
