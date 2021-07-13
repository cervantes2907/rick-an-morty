import axios from "axios";
const baseURL = "https://rickandmortyapi.com/api";

export const getLocation = (id) =>
  axios.get(`/location/${id}`, {
    baseURL,
  });

/* export const instance = axios.create({
    baseURL,
    timeout: 1000,
    headers: {'Content-Type': 'Application/json'}
  }); */

export const getResident = (url) => axios.get(url);


