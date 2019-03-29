// This component includes the module that contains functions that are meant to deal with getting each review on the DOM with the correct product.

import productAPI from "./data"
import reviewAPI from "./reviewData"

const reviewMODULE = {
    matchReviews: () => {
        let newArray = [];
        reviewAPI.getReviews().then(reviewArray => reviewArray.forEach(review => {
            productAPI.getProductNames().then(nameArray => nameArray.forEach(name => {
                if(review.product.includes(name)){
                    newArray.push({
                        review: review,
                        product: name
                    });
                }
            }))
        }))
        return newArray;
    }
}

export default reviewMODULE;