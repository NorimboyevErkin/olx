import axios from "axios";

const API_URL = axios.create({
  baseURL: "https://olx-fake-api.herokuapp.com/",

});

export default API_URL;