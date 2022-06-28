import axios from "axios";
const url = process.env.API_URL;
const instance = axios.create({
  baseURL: `${url}`,
});

export default instance;
