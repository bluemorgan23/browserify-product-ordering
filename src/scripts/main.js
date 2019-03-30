import navBarModule from "./navBar"
// import API from "./data"
import productModule from "./product"
// import reviewMODULE from "./reviewList"

const sayHi = () => {
    return console.log("hi")
}

const container = document.querySelector("#display-container");

container.appendChild(navBarModule.createNavBar());
container.appendChild(productModule.listProducts());









