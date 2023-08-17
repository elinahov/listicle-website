import axios from "axios";

export const setupHttp = (authToken) => {
    axios.defaults.baseURL = 'https://listicle.deegeehub.com/api';
    axios.defaults.headers.Authorization = authToken;
}