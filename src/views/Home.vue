<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Cherchez votre repas !"
    />

    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { ApiService } from "../service/apiService";

const api = new ApiService("https://www.themealdb.com/api/json/v1/1/");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

onMounted(async () => {
  const response = await api.getAllMeals();
  console.log(response);
});
</script>
