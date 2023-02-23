import axios from "axios";


export class ApiService {
    constructor(urlBase, instance) {
        this.instance = instance ?? axios.create();
        this.urlBase = urlBase;
    }

    getAllMeals = async () => {
        let url = this.urlBase + 'list.php?i=list';
        const response = await axios.get(url);
        return response.data
    }

    getMealByName = async (keyword) => {
        let url = this.urlBase + `search.php?s=${keyword}`;
        const response = await axios.get(url);
        return response.data
    }

    getMealById = async (id) => {
        let url = this.urlBase + `lookup.php?i=${id}`;
        const response = await axios.get(url);
        return response.data
    }

    getMealByLetter = async (letter) => {
        let url = this.urlBase + `search.php?f=${letter}`;
        const response = await axios.get(url);
        return response.data
    }

    getMealByIngredient = async (ingredient) => {
        let url = this.urlBase + `filter.php?i=${ingredient}`;
        const response = await axios.get(url);
        return response.data
    }
}