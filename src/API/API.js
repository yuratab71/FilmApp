const axios = require("axios");

const BASE_URL = "https://imdb-api.com/en/API/";
const API_KEY = "k_bu6o9atl/";
const SEARCH = "SearchMovie/";
const TOP_250 = "Top250Movies/";
const TOP_250TVs = "Top250TVs/"
const TITLE = "Title/";


const instance = axios.create({
    //withCredentials: true,
    headers:{
        "API-KEY": API_KEY
    },
    baseURL: BASE_URL
});

const getSearch = (expression) => {
    return instance.get(`${SEARCH}${API_KEY}${expression}`).then(responce => responce.data.items);
}

const getTop = () => {
    return instance.get(`${TOP_250}${API_KEY}`).then(responce => responce.data.items);
}

const getSeries = () => {
    return instance.get(`${TOP_250TVs}${API_KEY}`).then(responce => responce.data.items);
}

const getTitle = (id) => {
    return instance.get(`${TITLE}${API_KEY}${id}`)
}

export {getTop, getSearch, getTitle, getSeries};

