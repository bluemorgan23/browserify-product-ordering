// This file contains the module that contains the methods that deal with creating HTML.
// import API from "./data"
import reviewList from "./reviewList"

const sayHi = () => {
    return console.log("hello")
};

const htmlFactory = {
    createHtmlElement: (element, text, id, href, src, className) => {
        const newElement = document.createElement(element);
        if(text){
            newElement.textContent = text;
        }
        if(id){
            newElement.id = id;
        }
        if(href){
            newElement.setAttribute("href", href);
        }
        if(src){
            newElement.setAttribute("src", src)
        }
        if(className){
            newElement.setAttribute("class", className)
        }
        return newElement;
    },
    clearElement: (element) => {
        while(element.firstChild){
            element.removeChild(element.firstChild)
        };
        return element;
    },
    HTMLforProduct: (productObject) => {
        const bigContainer = document.querySelector("#products");
        const productContainer = htmlFactory.createHtmlElement("div", undefined, `productContainer--${productObject.id}`, undefined, undefined, "card mb-1");
        productContainer.appendChild(htmlFactory.createHtmlElement("h5", productObject.product.productName, undefined, undefined, undefined, "card-header"));
        productContainer.appendChild(htmlFactory.createHtmlElement("img", undefined, `image--${productObject.id}`, undefined, productObject.product.image, "card-img"));
        const cardContainer = productContainer.appendChild(htmlFactory.createHtmlElement("div"));
        cardContainer.setAttribute("class", "card-body");
        cardContainer.setAttribute("width", "18rem;")
        cardContainer.appendChild(htmlFactory.createHtmlElement("h4", productObject.product.description, undefined, undefined, undefined, "card-subtitle mb-3 text-muted"));
        cardContainer.appendChild(htmlFactory.createHtmlElement("p", `$${productObject.product.price}`, undefined, undefined, undefined, "card-text"));
        cardContainer.appendChild(htmlFactory.createHtmlElement("p", `Quantity Available: ${productObject.product.quantity}`));
        const seeReviewButton = cardContainer.appendChild(htmlFactory.createHtmlElement("a", "See Reviews", "btn_link", "", undefined, "btn btn-info btn-large btn-block"))
        seeReviewButton.setAttribute("data-toggle", "button");
        seeReviewButton.addEventListener("click", function(){
            reviewList.reviewList(productObject);
        });

        return productContainer;
    }
}


export default htmlFactory