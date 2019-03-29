(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./reviewData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This file contains the module that contains the methods that deal with creating HTML.
const isMatch = (array, match) => {
  return array.product === match;
};

const htmlFactory = {
  createHtmlElement: (element, text, id, href, src) => {
    const newElement = document.createElement(element);

    if (text) {
      newElement.textContent = text;
    }

    if (id) {
      newElement.id = id;
    }

    if (href) {
      newElement.setAttribute("href", href);
    }

    if (src) {
      newElement.setAttribute("src", src);
    }

    return newElement;
  },
  clearElement: element => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    ;
    return element;
  },
  HTMLforProduct: productObject => {
    const productContainer = htmlFactory.createHtmlElement("section", undefined, `productContainer--${productObject.id}`);
    productContainer.appendChild(htmlFactory.createHtmlElement("h2", productObject.name));
    productContainer.appendChild(htmlFactory.createHtmlElement("img", undefined, `image--${productObject.id}`, undefined, productObject.image));
    productContainer.appendChild(htmlFactory.createHtmlElement("h4", productObject.description));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", `$${productObject.price}`));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", `Quantity Available: ${productObject.quantity}`));
    const seeReviewButton = productContainer.appendChild(htmlFactory.createHtmlElement("button", "See Reviews", "review-button"));
    seeReviewButton.addEventListener("click", htmlFactory.HTMLforReview);
    productContainer.innerHTML += "<hr/>";
    return productContainer;
  },
  HTMLforReview: event => {
    const reviewContainer = event.target.parentNode;
    const textToMatch = reviewContainer.firstChild.textContent;

    const matchedReview = _reviewData.default.getReviews().then(reviewArray => reviewArray.find(isMatch(reviewArray, textToMatch))).then(() => htmlFactory.clearElement(reviewContainer));

    reviewContainer.appendChild(htmlFactory.createHtmlElement("h5", matchedReview.userName));
    reviewContainer.appendChild(htmlFactory.createHtmlElement("p", matchedReview.starRating));
    reviewContainer.appendChild(htmlFactory.createHtmlElement("p", matchedReview.date));
    reviewContainer.appendChild(htmlFactory.createHtmlElement("p", matchedReview.review));
    reviewContainer.appendChild(htmlFactory.createHtmlElement("button", "Go Back to Product", "review-return", undefined));
    return reviewContainer;
  }
};
var _default = htmlFactory;
exports.default = _default;

},{"./reviewData":6}],2:[function(require,module,exports){
"use strict";

var _navBar = _interopRequireDefault(require("./navBar"));

var _productData = _interopRequireDefault(require("./productData"));

var _product = _interopRequireDefault(require("./product"));

var _reviewList = _interopRequireDefault(require("./reviewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_navBar.default.createNavBar();

_product.default.listProducts();

reviewAPI.getReviews().then(response => console.log(response));
console.log(_reviewList.default.matchReviews());

},{"./navBar":3,"./product":4,"./productData":5,"./reviewList":7}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _htmlFactory = _interopRequireDefault(require("./htmlFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This file contains the module that creates the nav bar
const navBarModule = {
  createNavBar: () => {
    const displayContainer = document.querySelector("#display-container");

    const navBar = _htmlFactory.default.createHtmlElement("nav", undefined, "navBar");

    navBar.appendChild(_htmlFactory.default.createHtmlElement("h1", "Betsy", "navBar-header"));
    navBar.appendChild(_htmlFactory.default.createHtmlElement("a", "Categories", "navBar-categories", "http://localhost:8080"));
    navBar.appendChild(_htmlFactory.default.createHtmlElement("a", "Orders", "navBar-orders", "http://localhost:8080"));
    navBar.appendChild(_htmlFactory.default.createHtmlElement("a", "Log Out", "navBar-logOut", "http://localhost:8080"));
    displayContainer.appendChild(navBar);
    displayContainer.innerHTML += "<hr/>";
    return displayContainer;
  }
};
var _default = navBarModule;
exports.default = _default;

},{"./htmlFactory":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _htmlFactory = _interopRequireDefault(require("./htmlFactory"));

var _productData = _interopRequireDefault(require("./productData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This component is the module for building the layout of each individual product. I plan on using one function that creates the same elements for each product lisitng.
const displayContainer = document.querySelector("#display-container");
const productModule = {
  listProducts: () => {
    _productData.default.getProducts().then(productArray => {
      productArray.forEach(product => displayContainer.appendChild(_htmlFactory.default.HTMLforProduct(product)));
    });

    return displayContainer;
  }
};
var _default = productModule;
exports.default = _default;

},{"./htmlFactory":1,"./productData":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//This component includes methods that deal with the data in my database
const url = "http://localhost:8088/products";
const API = {
  getProducts: () => {
    return fetch(url).then(response => response.json());
  },
  getProductNames: () => {
    const justNames = API.getProducts().then(productArray => productArray.map(product => product.name));
    return justNames;
  }
};
var _default = API;
exports.default = _default;

},{}],6:[function(require,module,exports){
// This component is meant to hold the module that contains functions relating to the review data
// const reviewURL = "http://localhost:8088/reviews";
// const reviewAPI = {
//     getReviews: () => {
//         return fetch(reviewURL).then(response => response.json());
//     }
// }
// export default reviewAPI;
"use strict";

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

var _reviewData = _interopRequireDefault(require("./reviewData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This component includes the module that contains functions that are meant to deal with getting each review on the DOM with the correct product.
const reviewMODULE = {
  matchReviews: () => {
    let newArray = [];

    _reviewData.default.getReviews().then(reviewArray => reviewArray.forEach(review => {
      _productData.default.getProductNames().then(nameArray => nameArray.forEach(name => {
        if (review.product.includes(name)) {
          newArray.push({
            review: review,
            product: name
          });
        }
      }));
    }));

    return newArray;
  }
};
var _default = reviewMODULE;
exports.default = _default;

},{"./productData":5,"./reviewData":6}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2h0bWxGYWN0b3J5LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9uYXZCYXIuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3REYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXdEYXRhLmpzIiwiLi4vc2NyaXB0cy9yZXZpZXdMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0NBOzs7O0FBREE7QUFHQSxNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEtBQWtCO0FBQzlCLFNBQU8sS0FBSyxDQUFDLE9BQU4sS0FBa0IsS0FBekI7QUFDSCxDQUZEOztBQUlBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsaUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixFQUFoQixFQUFvQixJQUFwQixFQUEwQixHQUExQixLQUFrQztBQUNqRCxVQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjs7QUFDQSxRQUFHLElBQUgsRUFBUTtBQUNKLE1BQUEsVUFBVSxDQUFDLFdBQVgsR0FBeUIsSUFBekI7QUFDSDs7QUFDRCxRQUFHLEVBQUgsRUFBTTtBQUNGLE1BQUEsVUFBVSxDQUFDLEVBQVgsR0FBZ0IsRUFBaEI7QUFDSDs7QUFDRCxRQUFHLElBQUgsRUFBUTtBQUNKLE1BQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0MsSUFBaEM7QUFDSDs7QUFDRCxRQUFHLEdBQUgsRUFBTztBQUNILE1BQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsS0FBeEIsRUFBK0IsR0FBL0I7QUFDSDs7QUFDRCxXQUFPLFVBQVA7QUFDSCxHQWhCZTtBQWlCaEIsRUFBQSxZQUFZLEVBQUcsT0FBRCxJQUFhO0FBQ3ZCLFdBQU0sT0FBTyxDQUFD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ckUsMkJBQVcsZUFBWCxHQUE2QixJQUE3QixDQUFrQyxTQUFTLElBQUksU0FBUyxDQUFDLE9BQVYsQ0FBa0IsSUFBSSxJQUFJO0FBQ3JFLFlBQUcsTUFBTSxDQUFDLE9BQVAsQ0FBZSxRQUFmLENBQXdCLElBQXhCLENBQUgsRUFBaUM7QUFDN0IsVUFBQSxRQUFRLENBQUMsSUFBVCxDQUFjO0FBQ1YsWUFBQSxNQUFNLEVBQUUsTUFERTtBQUVWLFlBQUEsT0FBTyxFQUFFO0FBRkMsV0FBZDtBQUlIO0FBQ0osT0FQOEMsQ0FBL0M7QUFRSCxLQVQwQyxDQUEzQzs7QUFVQSxXQUFPLFFBQVA7QUFDSDtBQWRnQixDQUFyQjtlQWlCZSxZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBtb2R1bGUgdGhhdCBjb250YWlucyB0aGUgbWV0aG9kcyB0aGF0IGRlYWwgd2l0aCBjcmVhdGluZyBIVE1MLlxuaW1wb3J0IHJldmlld0FQSSBmcm9tIFwiLi9yZXZpZXdEYXRhXCJcblxuY29uc3QgaXNNYXRjaCA9IChhcnJheSwgbWF0Y2gpID0+IHtcbiAgICByZXR1cm4gYXJyYXkucHJvZHVjdCA9PT0gbWF0Y2g7XG59XG5cbmNvbnN0IGh0bWxGYWN0b3J5ID0ge1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50OiAoZWxlbWVudCwgdGV4dCwgaWQsIGhyZWYsIHNyYykgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgaWYodGV4dCl7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZihpZCl7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaHJlZil7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc3JjKXtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9LFxuICAgIGNsZWFyRWxlbWVudDogKGVsZW1lbnQpID0+IHtcbiAgICAgICAgd2hpbGUoZWxlbWVudC5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9LFxuICAgIEhUTUxmb3JQcm9kdWN0OiAocHJvZHVjdE9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0Q29udGFpbmVyID0gaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJzZWN0aW9uXCIsIHVuZGVmaW5lZCwgYHByb2R1Y3RDb250YWluZXItLSR7cHJvZHVjdE9iamVjdC5pZH1gKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImgyXCIsIHByb2R1Y3RPYmplY3QubmFtZSkpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiaW1nXCIsIHVuZGVmaW5lZCwgYGltYWdlLS0ke3Byb2R1Y3RPYmplY3QuaWR9YCwgdW5kZWZpbmVkLCBwcm9kdWN0T2JqZWN0LmltYWdlKSk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJoNFwiLCBwcm9kdWN0T2JqZWN0LmRlc2NyaXB0aW9uKSk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsIGAkJHtwcm9kdWN0T2JqZWN0LnByaWNlfWApKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcInBcIiwgYFF1YW50aXR5IEF2YWlsYWJsZTogJHtwcm9kdWN0T2JqZWN0LnF1YW50aXR5fWApKTtcbiAgICAgICAgY29uc3Qgc2VlUmV2aWV3QnV0dG9uID0gcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImJ1dHRvblwiLCBcIlNlZSBSZXZpZXdzXCIsIFwicmV2aWV3LWJ1dHRvblwiKSk7XG4gICAgICAgIHNlZVJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaHRtbEZhY3RvcnkuSFRNTGZvclJldmlldyk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuaW5uZXJIVE1MICs9IFwiPGhyLz5cIlxuICAgICAgICByZXR1cm4gcHJvZHVjdENvbnRhaW5lcjtcbiAgICB9LFxuICAgIEhUTUxmb3JSZXZpZXc6IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCByZXZpZXdDb250YWluZXIgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGV4dFRvTWF0Y2ggPSByZXZpZXdDb250YWluZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgbWF0Y2hlZFJldmlldyA9IHJldmlld0FQSS5nZXRSZXZpZXdzKCkudGhlbihyZXZpZXdBcnJheSA9PiByZXZpZXdBcnJheS5maW5kKGlzTWF0Y2gocmV2aWV3QXJyYXksIHRleHRUb01hdGNoKSkpLnRoZW4oKCkgPT4gaHRtbEZhY3RvcnkuY2xlYXJFbGVtZW50KHJldmlld0NvbnRhaW5lcikpO1xuICAgICAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJoNVwiLCBtYXRjaGVkUmV2aWV3LnVzZXJOYW1lKSk7XG4gICAgICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcInBcIiwgbWF0Y2hlZFJldmlldy5zdGFyUmF0aW5nKSk7XG4gICAgICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcInBcIiwgbWF0Y2hlZFJldmlldy5kYXRlKSk7XG4gICAgICAgIHJldmlld0NvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcInBcIiwgbWF0Y2hlZFJldmlldy5yZXZpZXcpKTtcbiAgICAgICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiYnV0dG9uXCIsIFwiR28gQmFjayB0byBQcm9kdWN0XCIsIFwicmV2aWV3LXJldHVyblwiLCB1bmRlZmluZWQpKVxuXG4gICAgICAgIHJldHVybiByZXZpZXdDb250YWluZXI7XG5cbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaHRtbEZhY3Rvcnk7IiwiaW1wb3J0IG5hdkJhck1vZHVsZSBmcm9tIFwiLi9uYXZCYXJcIlxuaW1wb3J0IEFQSSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdE1vZHVsZSBmcm9tIFwiLi9wcm9kdWN0XCJcbmltcG9ydCByZXZpZXdNT0RVTEUgZnJvbSBcIi4vcmV2aWV3TGlzdFwiXG5cblxubmF2QmFyTW9kdWxlLmNyZWF0ZU5hdkJhcigpO1xucHJvZHVjdE1vZHVsZS5saXN0UHJvZHVjdHMoKTtcbnJldmlld0FQSS5nZXRSZXZpZXdzKCkudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpO1xuY29uc29sZS5sb2cocmV2aWV3TU9EVUxFLm1hdGNoUmV2aWV3cygpKTsiLCIvL1RoaXMgZmlsZSBjb250YWlucyB0aGUgbW9kdWxlIHRoYXQgY3JlYXRlcyB0aGUgbmF2IGJhclxuXG5pbXBvcnQgaHRtbEZhY3RvcnkgZnJvbSBcIi4vaHRtbEZhY3RvcnlcIlxuXG5jb25zdCBuYXZCYXJNb2R1bGUgPSB7XG4gICAgY3JlYXRlTmF2QmFyOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcIm5hdlwiLCB1bmRlZmluZWQsIFwibmF2QmFyXCIpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJoMVwiLCBcIkJldHN5XCIsIFwibmF2QmFyLWhlYWRlclwiKSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImFcIiwgXCJDYXRlZ29yaWVzXCIsIFwibmF2QmFyLWNhdGVnb3JpZXNcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIikpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJhXCIsIFwiT3JkZXJzXCIsIFwibmF2QmFyLW9yZGVyc1wiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiKSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImFcIiwgXCJMb2cgT3V0XCIsIFwibmF2QmFyLWxvZ091dFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiKSk7XG4gICAgICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5pbm5lckhUTUwgKz0gXCI8aHIvPlwiXG4gICAgICAgIHJldHVybiBkaXNwbGF5Q29udGFpbmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyTW9kdWxlOyIsIi8vVGhpcyBjb21wb25lbnQgaXMgdGhlIG1vZHVsZSBmb3IgYnVpbGRpbmcgdGhlIGxheW91dCBvZiBlYWNoIGluZGl2aWR1YWwgcHJvZHVjdC4gSSBwbGFuIG9uIHVzaW5nIG9uZSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlIHNhbWUgZWxlbWVudHMgZm9yIGVhY2ggcHJvZHVjdCBsaXNpdG5nLlxuaW1wb3J0IGh0bWxGYWN0b3J5IGZyb20gXCIuL2h0bWxGYWN0b3J5XCJcbmltcG9ydCBBUEkgZnJvbSBcIi4vcHJvZHVjdERhdGFcIjtcblxuY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1jb250YWluZXJcIilcblxuY29uc3QgcHJvZHVjdE1vZHVsZSA9IHtcbiAgICBsaXN0UHJvZHVjdHM6ICgpID0+IHtcbiAgICAgICAgQVBJLmdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0QXJyYXkgPT4ge1xuICAgICAgICAgICAgcHJvZHVjdEFycmF5LmZvckVhY2gocHJvZHVjdCA9PiBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LkhUTUxmb3JQcm9kdWN0KHByb2R1Y3QpKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlDb250YWluZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TW9kdWxlOyIsIi8vVGhpcyBjb21wb25lbnQgaW5jbHVkZXMgbWV0aG9kcyB0aGF0IGRlYWwgd2l0aCB0aGUgZGF0YSBpbiBteSBkYXRhYmFzZVxuXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiXG5cbmNvbnN0IEFQSSA9IHtcbiAgICBnZXRQcm9kdWN0czogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfSxcbiAgICBnZXRQcm9kdWN0TmFtZXM6ICgpID0+IHtcbiAgICAgICAgY29uc3QganVzdE5hbWVzID0gQVBJLmdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0QXJyYXkgPT4gcHJvZHVjdEFycmF5Lm1hcChwcm9kdWN0ID0+IHByb2R1Y3QubmFtZSkpXG4gICAgICAgIHJldHVybiBqdXN0TmFtZXM7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiLy8gVGhpcyBjb21wb25lbnQgaXMgbWVhbnQgdG8gaG9sZCB0aGUgbW9kdWxlIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIHJlbGF0aW5nIHRvIHRoZSByZXZpZXcgZGF0YVxuXG4vLyBjb25zdCByZXZpZXdVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9yZXZpZXdzXCI7XG5cbi8vIGNvbnN0IHJldmlld0FQSSA9IHtcbi8vICAgICBnZXRSZXZpZXdzOiAoKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBmZXRjaChyZXZpZXdVUkwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHJldmlld0FQSTsiLCIvLyBUaGlzIGNvbXBvbmVudCBpbmNsdWRlcyB0aGUgbW9kdWxlIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIHRoYXQgYXJlIG1lYW50IHRvIGRlYWwgd2l0aCBnZXR0aW5nIGVhY2ggcmV2aWV3IG9uIHRoZSBET00gd2l0aCB0aGUgY29ycmVjdCBwcm9kdWN0LlxuXG5pbXBvcnQgcHJvZHVjdEFQSSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcmV2aWV3QVBJIGZyb20gXCIuL3Jldmlld0RhdGFcIlxuXG5jb25zdCByZXZpZXdNT0RVTEUgPSB7XG4gICAgbWF0Y2hSZXZpZXdzOiAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICByZXZpZXdBUEkuZ2V0UmV2aWV3cygpLnRoZW4ocmV2aWV3QXJyYXkgPT4gcmV2aWV3QXJyYXkuZm9yRWFjaChyZXZpZXcgPT4ge1xuICAgICAgICAgICAgcHJvZHVjdEFQSS5nZXRQcm9kdWN0TmFtZXMoKS50aGVuKG5hbWVBcnJheSA9PiBuYW1lQXJyYXkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZihyZXZpZXcucHJvZHVjdC5pbmNsdWRlcyhuYW1lKSl7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FycmF5LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2aWV3OiByZXZpZXcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0OiBuYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9KSlcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TU9EVUxFOyJdfQ==
