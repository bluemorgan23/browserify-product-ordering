//This component includes methods that deal with the data in my database

const url = "http://localhost:8088/products"

const API = {
    getProducts: () => {
        return fetch(url).then(response => response.json());
    }
}

export default API;