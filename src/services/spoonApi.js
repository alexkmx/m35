import axios from "axios";

const spoonApi = axios.create({
    baseURL: ""
})

export default spoonApi;