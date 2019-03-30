// This component includes the module that contains functions that are meant to deal with getting each review on the DOM with the correct product.
import htmlFactory from "./htmlFactory"
import productMODULE from "./product"

const reviewList = {
    reviewList: (productObj) => {
        const productsDisplay = document.querySelector("#products");
        const tempContainer = document.querySelector(`#productContainer--${productObj.id}`);
        const reviewContainer = tempContainer.appendChild(htmlFactory.createHtmlElement("div", undefined, undefined, undefined, undefined, "card-body"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("h5", productObj.review.userName, undefined, undefined, undefined, "card-title"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", `Reviewed on ${productObj.review.date}`, undefined, undefined, undefined, "card-subtitle text-muted"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", `${productObj.review.starRating} Stars`, undefined, undefined, undefined, "card-text"));
        reviewContainer.appendChild(htmlFactory.createHtmlElement("p", productObj.review.review, undefined, undefined, "card-text"));
        const returnButton = reviewContainer.appendChild(htmlFactory.createHtmlElement("button", "Return to Product", "btn_link-return", "", undefined, "btn btn-info btn-large btn-block"));
        returnButton.setAttribute("trigger", "click");
        reviewContainer.addEventListener("click", function(){
            htmlFactory.clearElement(tempContainer)
            tempContainer.appendChild(htmlFactory.HTMLforProduct(productObj));
        })
        tempContainer.appendChild(reviewContainer);
        return tempContainer;
    }
}

export default reviewList