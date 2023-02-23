import { ApiService } from "../service/apiService";

const api = new ApiService('https://www.themealdb.com/api/json/v1/1/')

export const searchMeals = async ({ commit }, keyword) => {
    const response = await api.getMealByName(keyword);
    commit('setSearchedMeals', response.meals);
}

export const searchedMealsByLetter = async ({ commit }, letter) => {
    const response = await api.getMealByLetter(letter);
    commit('setSearchedMealsByLetter', response.meals);
}

export const searchedMealsByIngredient = async ({ commit }, ingredient) => {
    const response = await api.getMealByIngredient(ingredient)
    commit('setSearchedMealsByIngredient', response.meals);
}