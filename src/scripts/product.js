//This component is the module for building the layout of each individual product. I plan on using one function that creates the same elements for each product lisitng.
import htmlFactory from "./htmlFactory"
import API from "./data";

const displayContainer = document.querySelector("#display-container")

const productModule = {
    listProducts: () => {
        API.getProducts().then(productArray => {
            productArray.forEach(product => displayContainer.appendChild(htmlFactory.HTMLforProduct(product)))
        })
        return displayContainer;
    }
}

export default productModule;