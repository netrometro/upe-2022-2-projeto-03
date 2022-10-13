import axios from "axios";
import { parseCookies } from "nookies";

const { "upe-token": token } = parseCookies();

const api = axios.create({ baseURL: 'https://localhost:3000/' });

if (token) {
    api.defaults.headers['Authorization'] = Bearer ${token};
}

export { api };