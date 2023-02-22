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
}