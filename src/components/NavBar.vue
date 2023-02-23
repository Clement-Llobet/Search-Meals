<template>
  <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
    <RouterLink
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
    >
      Home
    </RouterLink>
    <div>
      <RouterLink
        :to="{ name: 'byName' }"
        class="inline-block px-2 h-full hover:bg-purple-200"
      >
        Search Meals
      </RouterLink>
      <RouterLink
        :to="{ name: 'byLetter' }"
        class="inline-block px-2 h-full hover:bg-purple-200"
      >
        Meals By Letter
      </RouterLink>
      <RouterLink
        :to="{ name: 'ingredients' }"
        class="inline-block px-2 h-full hover:bg-purple-200"
      >
        Meals by Ingredients
      </RouterLink>
    </div>
  </header>
</template>
