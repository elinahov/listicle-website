import axios from "axios";

export const setupHttp = () => {
    axios.defaults.baseURL = 'https://listicle.deegeehub.com/api';
}