import axios from "axios";
const instance = axios.create({
  baseURL: "https://mpp-api.herokuapp.com/api",
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

export default instance;
