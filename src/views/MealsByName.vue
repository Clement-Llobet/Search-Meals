<template>
  <div class="p-8 pb-0">
    <input
      type="text"
      v-model="keyword"
      class="bg-white rounded border-2 border-grey-200 w-full"
      placeholder="Search for meals"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
};

onMounted(() => {
  keyword.value = route.params.name;
  keyword.value && searchMeals();
});
</script>
