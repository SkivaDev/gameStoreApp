import axios from "axios";
// import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    key: apiConfig.apiKey,
  }
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => { // los interceptors ejecutan codigo antes de que se entregue la respuesta

    // valida: si la respuesta tiene algo, y entonces valida si tiene el subcampo data
    // si tiene data, entonces retorna data, sino retorna la respuesta
    if (response?.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;