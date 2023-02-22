<template>
  <div class="p-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-grey-200 w-full"
      placeholder="Cherchez votre repas !"
      @change="searchMeals"
    />
  </div>

  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  store.dispatch("searchMeals", keyword.value);
};
</script>
