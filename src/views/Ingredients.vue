<template>
  <div class="p-8">
    <h1 class="text-4x1 font-bold mb-4">Ingredients</h1>
    <input
      type="text"
      v-model="keyword"
      class="bg-white rounded border-2 border-grey-200 w-full mb-3"
      placeholder="Search for ingredients"
      @change="searchMeals"
    />
    <RouterLink
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.strIngredient },
      }"
      v-for="ingredient of computedIngredients"
      :key="ingredient.idIngredient"
      class="block bg-white rounded p-3 mb-3 shadow"
    >
      <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.strDescription }}</p>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed, onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";
import { ApiService } from "../service/apiService";

const api = new ApiService(`${import.meta.env.VITE_API_BASE_URL}`);

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;

  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(async () => {
  const response = await api.getAllMeals();
  ingredients.value = response.meals;
});
</script>
