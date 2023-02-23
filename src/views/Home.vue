<template>
  <div class="flex flex-col p-8"></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { ApiService } from "../service/apiService";

const api = new ApiService(`${import.meta.env.VITE_API_BASE_URL}`);

const ingredients = ref([]);

onMounted(async () => {
  const response = await api.getAllMeals();
  ingredients.value = response.data;
});
</script>
