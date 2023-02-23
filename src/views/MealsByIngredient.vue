<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.searchedMealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
