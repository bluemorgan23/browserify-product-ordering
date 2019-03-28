(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  }
};
var _default = API;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// This file contains the module that contains the methods that deal with creating HTML.
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
  HTMLforProduct: productObject => {
    const productContainer = htmlFactory.createHtmlElement("section", undefined, `productContainer--${productObject.id}`);
    productContainer.appendChild(htmlFactory.createHtmlElement("h2", productObject.name));
    productContainer.appendChild(htmlFactory.createHtmlElement("img", undefined, `image--${productObject.id}`, undefined, productObject.image));
    productContainer.appendChild(htmlFactory.createHtmlElement("h4", productObject.description));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", `$${productObject.price}`));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", `Quantity Available: ${productObject.quantity}`));
    productContainer.innerHTML += "<hr/>";
    return productContainer;
  }
};
var _default = htmlFactory;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _navBar = _interopRequireDefault(require("./navBar"));

var _data = _interopRequireDefault(require("./data"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_navBar.default.createNavBar();

_product.default.listProducts();

},{"./data":1,"./navBar":4,"./product":5}],4:[function(require,module,exports){
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

},{"./htmlFactory":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _htmlFactory = _interopRequireDefault(require("./htmlFactory"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//This component is the module for building the layout of each individual product. I plan on using one function that creates the same elements for each product lisitng.
const displayContainer = document.querySelector("#display-container");
const productModule = {
  listProducts: () => {
    _data.default.getProducts().then(productArray => {
      productArray.forEach(product => displayContainer.appendChild(_htmlFactory.default.HTMLforProduct(product)));
    });

    return displayContainer;
  }
};
var _default = productModule;
exports.default = _default;

},{"./data":1,"./htmlFactory":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2h0bWxGYWN0b3J5LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9uYXZCYXIuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUVBLE1BQU0sR0FBRyxHQUFHLGdDQUFaO0FBRUEsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLFdBQVcsRUFBRSxNQUFNO0FBQ2YsV0FBTyxLQUFLLENBQUMsR0FBRCxDQUFMLENBQVcsSUFBWCxDQUFnQixRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFBNUIsQ0FBUDtBQUNIO0FBSE8sQ0FBWjtlQU1lLEc7Ozs7Ozs7Ozs7QUNWZjtBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsaUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixFQUFoQixFQUFvQixJQUFwQixFQUEwQixHQUExQixLQUFrQztBQUNqRCxVQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjs7QUFDQSxRQUFHLElBQUgsRUFBUTtBQUNKLE1BQUEsVUFBVSxDQUFDLFdBQVgsR0FBeUIsSUFBekI7QUFDSDs7QUFDRCxRQUFHLEVBQUgsRUFBTTtBQUNGLE1BQUEsVUFBVSxDQUFDLEVBQVgsR0FBZ0IsRUFBaEI7QUFDSDs7QUFDRCxRQUFHLElBQUgsRUFBUTtBQUNKLE1BQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0MsSUFBaEM7QUFDSDs7QUFDRCxRQUFHLEdBQUgsRUFBTztBQUNILE1BQUEsVUFBVSxDQUFDLFlBQVgsQ0FBd0IsS0FBeEIsRUFBK0IsR0FBL0I7QUFDSDs7QUFDRCxXQUFPLFVBQVA7QUFDSCxHQWhCZTtBQWlCaEIsRUFBQSxjQUFjLEVBQUcsYUFBRCxJ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U2UsYSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vVGhpcyBjb21wb25lbnQgaW5jbHVkZXMgbWV0aG9kcyB0aGF0IGRlYWwgd2l0aCB0aGUgZGF0YSBpbiBteSBkYXRhYmFzZVxuXG5jb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiXG5cbmNvbnN0IEFQSSA9IHtcbiAgICBnZXRQcm9kdWN0czogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiLy8gVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBtb2R1bGUgdGhhdCBjb250YWlucyB0aGUgbWV0aG9kcyB0aGF0IGRlYWwgd2l0aCBjcmVhdGluZyBIVE1MLlxuXG5jb25zdCBodG1sRmFjdG9yeSA9IHtcbiAgICBjcmVhdGVIdG1sRWxlbWVudDogKGVsZW1lbnQsIHRleHQsIGlkLCBocmVmLCBzcmMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIGlmKHRleHQpe1xuICAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWQpe1xuICAgICAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIGlmKGhyZWYpe1xuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHNyYyl7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBzcmMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfSxcbiAgICBIVE1MZm9yUHJvZHVjdDogKHByb2R1Y3RPYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdENvbnRhaW5lciA9IGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwic2VjdGlvblwiLCB1bmRlZmluZWQsIGBwcm9kdWN0Q29udGFpbmVyLS0ke3Byb2R1Y3RPYmplY3QuaWR9YCk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJoMlwiLCBwcm9kdWN0T2JqZWN0Lm5hbWUpKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImltZ1wiLCB1bmRlZmluZWQsIGBpbWFnZS0tJHtwcm9kdWN0T2JqZWN0LmlkfWAsIHVuZGVmaW5lZCwgcHJvZHVjdE9iamVjdC5pbWFnZSkpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiaDRcIiwgcHJvZHVjdE9iamVjdC5kZXNjcmlwdGlvbikpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwicFwiLCBgJCR7cHJvZHVjdE9iamVjdC5wcmljZX1gKSk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsIGBRdWFudGl0eSBBdmFpbGFibGU6ICR7cHJvZHVjdE9iamVjdC5xdWFudGl0eX1gKSk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuaW5uZXJIVE1MICs9IFwiPGhyLz5cIlxuICAgICAgICByZXR1cm4gcHJvZHVjdENvbnRhaW5lcjtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaHRtbEZhY3Rvcnk7IiwiaW1wb3J0IG5hdkJhck1vZHVsZSBmcm9tIFwiLi9uYXZCYXJcIlxuaW1wb3J0IEFQSSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCBwcm9kdWN0TW9kdWxlIGZyb20gXCIuL3Byb2R1Y3RcIlxuXG5cbm5hdkJhck1vZHVsZS5jcmVhdGVOYXZCYXIoKTtcbnByb2R1Y3RNb2R1bGUubGlzdFByb2R1Y3RzKCk7XG4iLCIvL1RoaXMgZmlsZSBjb250YWlucyB0aGUgbW9kdWxlIHRoYXQgY3JlYXRlcyB0aGUgbmF2IGJhclxuXG5pbXBvcnQgaHRtbEZhY3RvcnkgZnJvbSBcIi4vaHRtbEZhY3RvcnlcIlxuXG5jb25zdCBuYXZCYXJNb2R1bGUgPSB7XG4gICAgY3JlYXRlTmF2QmFyOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXktY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcIm5hdlwiLCB1bmRlZmluZWQsIFwibmF2QmFyXCIpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJoMVwiLCBcIkJldHN5XCIsIFwibmF2QmFyLWhlYWRlclwiKSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImFcIiwgXCJDYXRlZ29yaWVzXCIsIFwibmF2QmFyLWNhdGVnb3JpZXNcIiwgXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIikpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJhXCIsIFwiT3JkZXJzXCIsIFwibmF2QmFyLW9yZGVyc1wiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiKSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImFcIiwgXCJMb2cgT3V0XCIsIFwibmF2QmFyLWxvZ091dFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiKSk7XG4gICAgICAgIGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5pbm5lckhUTUwgKz0gXCI8aHIvPlwiXG4gICAgICAgIHJldHVybiBkaXNwbGF5Q29udGFpbmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyTW9kdWxlOyIsIi8vVGhpcyBjb21wb25lbnQgaXMgdGhlIG1vZHVsZSBmb3IgYnVpbGRpbmcgdGhlIGxheW91dCBvZiBlYWNoIGluZGl2aWR1YWwgcHJvZHVjdC4gSSBwbGFuIG9uIHVzaW5nIG9uZSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlIHNhbWUgZWxlbWVudHMgZm9yIGVhY2ggcHJvZHVjdCBsaXNpdG5nLlxuaW1wb3J0IGh0bWxGYWN0b3J5IGZyb20gXCIuL2h0bWxGYWN0b3J5XCJcbmltcG9ydCBBUEkgZnJvbSBcIi4vZGF0YVwiO1xuXG5jb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKVxuXG5jb25zdCBwcm9kdWN0TW9kdWxlID0ge1xuICAgIGxpc3RQcm9kdWN0czogKCkgPT4ge1xuICAgICAgICBBUEkuZ2V0UHJvZHVjdHMoKS50aGVuKHByb2R1Y3RBcnJheSA9PiB7XG4gICAgICAgICAgICBwcm9kdWN0QXJyYXkuZm9yRWFjaChwcm9kdWN0ID0+IGRpc3BsYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuSFRNTGZvclByb2R1Y3QocHJvZHVjdCkpKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZGlzcGxheUNvbnRhaW5lcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RNb2R1bGU7Il19
