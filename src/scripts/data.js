//This component includes methods that deal with the data in my database

const url = "http://localhost:8088/products"

const API = {
    getProducts: () => {
        return fetch(url).then(response => response.json());
    },
    getProductNames: () => {
        const justNames = API.getProducts().then(productArray => productArray.map(product => product.name))
        return justNames;
    }
}

export default API;