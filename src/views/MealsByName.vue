<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Cherchez votre repas !"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <figure
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <RouterLink to="/">
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
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
            >Youtube</a
          >
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};

onMounted(() => {
  keyword.value = route.params.name;
  keyword.value && searchMeals();
});
</script>
