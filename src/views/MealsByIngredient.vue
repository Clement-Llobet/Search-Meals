<template>
  <div class="p-8">
    <h1 class="text-4x1 font-bold mb-4">Ingredients</h1>
    <RouterLink
      :to="{
        name: 'byIngredient',
        params: { ingredient: ingredient.idIngredient },
      }"
      v-for="ingredient of ingredients"
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

const ingredients = ref([]);
const api = new ApiService(`${import.meta.env.VITE_API_BASE_URL}`);

onMounted(async () => {
  const response = await api.getAllMeals();
  ingredients.value = response.meals;
});
</script>
