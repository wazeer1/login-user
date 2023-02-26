import axios from "axios";

export const axiosConfig = axios.create({
    baseURL:"https://wazeer.pythonanywhere.com/api/v1/account/"
})