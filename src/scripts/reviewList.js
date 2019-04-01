// This component includes the module that contains functions that are meant to deal with getting each review on the DOM with the correct product.
import htmlFactory from "./htmlFactory"
import productMODULE from "./product"

const reviewList = {
    reviewList: (productObj) => {
        const productsDisplay = document.querySelector("#products");
        const tempContainer = document.querySelector(`#productContainer--${productObj.id}`);
        htmlFactory.clearElement(tempContainer);
        const reviewContainer = tempContainer.appendChild(htmlFactory.createHtmlElement("div", undefined, undefined, undefined, undefined, "card-body"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("h5", productObj.review.userName, undefined, undefined, undefined, "card-title"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", `Reviewed on ${productObj.review.date}`, undefined, undefined, undefined, "card-subtitle text-muted"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", `${productObj.review.starRating} Stars`, undefined, undefined, undefined, "card-text"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", productObj.review.review, undefined, undefined, "card-text"));
        const returnButton = reviewContainer.appendChild(htmlFactory.createHtmlElement("button", "Return to Product", "btn_link-return", "", undefined, "btn btn-info btn-large btn-block"));
        returnButton.setAttribute("trigger", "click");
        returnButton.addEventListener("click", function(){
            let productContainer = document.querySelector(`#productContainer--${productObj.id}`);
            htmlFactory.clearElement(productContainer);
            productContainer.appendChild(htmlFactory.createHtmlElement("h5", productObj.product.productName, undefined, undefined, undefined, "card-header"));
            productContainer.appendChild(htmlFactory.createHtmlElement("img", undefined, `image--${productObj.id}`, undefined, productObj.product.image, "card-img"));
            let cardContainer = productContainer.appendChild(htmlFactory.createHtmlElement("div"));
            cardContainer.setAttribute("class", "card-body");
            cardContainer.setAttribute("width", "18rem;")
            cardContainer.appendChild(htmlFactory.createHtmlElement("h4", productObj.product.description, undefined, undefined, undefined, "card-subtitle mb-3 text-muted"));
            cardContainer.appendChild(htmlFactory.createHtmlElement("p", `$${productObj.product.price}`, undefined, undefined, undefined, "card-text"));
            cardContainer.appendChild(htmlFactory.createHtmlElement("p", `Quantity Available: ${productObj.product.quantity}`));
            let seeReviewButton = cardContainer.appendChild(htmlFactory.createHtmlElement("a", "See Reviews", "btn_link", "", undefined, "btn btn-info btn-large btn-block"))
            seeReviewButton.setAttribute("data-toggle", "button");
            seeReviewButton.addEventListener("click", function(){
                reviewList.reviewList(productObj);
            })

            return productContainer;
        })
        tempContainer.appendChild(reviewContainer);
        return tempContainer;
    }
}

export default reviewList