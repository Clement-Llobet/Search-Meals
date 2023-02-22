<template>
  <figure class="max-w-[800px] mx-auto p-8">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>

    <figcaption>
      <div class="my-3">
        {{ meal.strInstructions }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul>
            <template v-for="(element, index) of new Array(20)">
              <li v-if="meal[`strIngredient${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="(element, index) of new Array(20)">
              <li v-if="meal[`strMeasure${index + 1}`]">
                {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div class="mt-4">
          <YouTubeButton :href="meal.strYoutube" />
          <a
            :href="meal.strSource"
            target="_blank"
            class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
          >
            View Original Source
          </a>
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ApiService } from "../service/apiService";
import YouTubeButton from "../components/YoutubeButton.vue";

const api = new ApiService("https://www.themealdb.com/api/json/v1/1/");

const route = useRoute();
const meal = ref({});

onMounted(async () => {
  const response = await api.getMealById(route.params.id);
  meal.value = response.meals[0] || {};
});
</script>
