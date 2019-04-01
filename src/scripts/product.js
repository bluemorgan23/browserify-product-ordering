//This component is the module for building the layout of each individual product. I plan on using one function that creates the same elements for each product lisitng.
import htmlFactory from "./htmlFactory"
import API from "./data";

let displayContainer = document.querySelector("#display-container")



const productModule = {
    listProducts: () => {
        const allProductsContainer = document.createElement("div");
        allProductsContainer.setAttribute("id", "products");
        API.getProductsAndReviews().then(productArray => {
            productArray.forEach(product => allProductsContainer.appendChild( htmlFactory.HTMLforProduct(product)))
        })
        return allProductsContainer;
    }
}

export default productModule;