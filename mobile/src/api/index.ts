import axios from "axios";

const api = axios.create({ baseURL: 'https://10.0.0.108:3000/' });

export { api };