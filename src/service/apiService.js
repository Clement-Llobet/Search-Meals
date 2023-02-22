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
}