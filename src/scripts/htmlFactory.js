// This file contains the module that contains the methods that deal with creating HTML.
import reviewAPI from "./reviewData"

const isMatch = (array, match) => {
    return array.product === match;
}

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
    clearElement: (element) => {
        while(element.firstChild){
            element.removeChild(element.firstChild)
        };
        return element;
    },
    HTMLforProduct: (productObject) => {
        const productContainer = htmlFactory.createHtmlElement("section", undefined, `productContainer--${productObject.id}`);
        productContainer.appendChild(htmlFactory.createHtmlElement("h2", productObject.name));
        productContainer.appendChild(htmlFactory.createHtmlElement("img", undefined, `image--${productObject.id}`, undefined, productObject.image));
        productContainer.appendChild(htmlFactory.createHtmlElement("h4", productObject.description));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", `$${productObject.price}`));
        productContainer.appendChild(htmlFactory.createHtmlElement("p", `Quantity Available: ${productObject.quantity}`));
        const seeReviewButton = productContainer.appendChild(htmlFactory.createHtmlElement("button", "See Reviews", "review-button"));
        seeReviewButton.addEventListener("click", htmlFactory.HTMLforReview);
        productContainer.innerHTML += "<hr/>"
        return productContainer;
    },
    HTMLforReview: (event) => {
        const reviewContainer = event.target.parentNode;
        const textToMatch = reviewContainer.firstChild.textContent;
        const matchedReview = reviewAPI.getReviews().then(reviewArray => reviewArray.find(isMatch(reviewArray, textToMatch))).then(() => htmlFactory.clearElement(reviewContainer));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("h5", matchedReview.userName));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", matchedReview.starRating));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", matchedReview.date));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", matchedReview.review));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("button", "Go Back to Product", "review-return", undefined))

        return reviewContainer;

    }
}


export default htmlFactory;