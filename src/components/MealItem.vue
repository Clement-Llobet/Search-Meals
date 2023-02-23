<template>
  <figure class="bg-white shadow rounded-xl">
    <RouterLink :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </RouterLink>
    <figcaption class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div class="flex item-center justify-between">
        <YoutubeButton :href="meal.strYoutube" />
      </div>
    </figcaption>
  </figure>
</template>

<script setup>
const { meal } = defineProps({
  meal: Object,
});
</script>
