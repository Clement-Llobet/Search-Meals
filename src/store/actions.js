import { ApiService } from "../service/apiService";

const api = new ApiService(`${import.meta.env.VITE_API_BASE_URL}`)

export const searchMeals = async ({ commit }, keyword) => {
    const response = await api.getMealByName(keyword);
    commit('setSearchedMeals', response.meals);
}

export const searchMealsByLetter = async ({ commit }, letter) => {
    const response = await api.getMealByLetter(letter);
    commit('setSearchedMealsByLetter', response.meals);
}

export const searchMealsByIngredient = async ({ commit }, ingredient) => {
    const response = await api.getMealByIngredient(ingredient)
    commit('setSearchedMealsByIngredient', response.meals);
}