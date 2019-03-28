// This file contains the module that contains the methods that deal with creating HTML.

const htmlFactory = {
    createHtmlElement: (element, text, id, href, src) => {
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
        return newElement;
    },
    HTMLforProduct: (productObject) => {
        const productContainer = htmlFactory.createHtmlElement("section", undefined, `productContainer--${productObject.id}`);
        productContainer.appendChild(htmlFactory.createHtmlElement("h2", productObject.name));
        productContainer.appendChild(htmlFactory.createHtmlElement("img", undefined, `image--${productObject.id}`, undefined, productObject.image));
        productContainer.appendChild(htmlFactory.createHtmlElement("h4", productObject.description));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", `$${productObject.price}`));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", `Quantity Available: ${productObject.quantity}`));
        productContainer.innerHTML += "<hr/>"
        return productContainer;
    }
}


export default htmlFactory;