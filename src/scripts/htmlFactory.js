// This file contains the module that contains the methods that deal with creating HTML.

const htmlFactory = {
    createHtmlElement: (element, text, id) => {
        const newElement = document.createElement(element);
        if(text){
            newElement.textContent = text;
        }
        if(id){
            newElement.id = id;
        }
        return newElement;
    },
    HTMLforProduct: (productObject) => {
        const productContainer = htmlFactory.createHtmlElement("section", undefined, `productContainer--${productObject.id}`);
        productContainer.appendChild(htmlFactory.createHtmlElement("h3", productObject.name));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", productObject.description));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", productObject.price));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", productObject.quantity));
        return productContainer;
    }
}


export default htmlFactory;