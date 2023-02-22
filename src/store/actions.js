import { ApiService } from "../service/apiService";

const api = new ApiService('https://www.themealdb.com/api/json/v1/1/')

export const searchMeals = async ({ commit }, keyword) => {
    const response = await api.getMealByName(keyword);
    commit('setSearchedMeals', response.meals);
}