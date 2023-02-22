import axios from "axios";

// const axiosService = axios.create({
//     baseUrl: 'https://www.themealdb.com/api/json/v1/1/',
// })

// export default axiosService;

export class ApiService {
    constructor(urlBase, instance) {
        this.instance = instance ?? axios.create();
        this.urlBase = urlBase ?? process.env.SERVICE_BASE_URL;
    }

    getAllMeals = async () => {
        let url = this.urlBase + 'list.php?i=list';

        const response = await axios.get(url);

        return response.data
    }
}