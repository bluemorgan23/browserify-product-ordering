import navBarModule from "./navBar"
import API from "./productData"
import productModule from "./product"
import reviewMODULE from "./reviewList"


navBarModule.createNavBar();
productModule.listProducts();
reviewAPI.getReviews().then(response => console.log(response));
console.log(reviewMODULE.matchReviews());