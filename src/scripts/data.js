//This component includes methods that deal with the data in my database

const baseUrl = "http://localhost:8088"

const API = {
    getProductsAndReviews: () => {
        return fetch(`${baseUrl}/productAndReviews?_expand=product&_expand=review`).then(response => response.json());
    }
}

export default API;