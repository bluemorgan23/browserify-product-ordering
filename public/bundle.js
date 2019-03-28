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
  createHtmlElement: (element, text, id) => {
    const newElement = document.createElement(element);

    if (text) {
      newElement.textContent = text;
    }

    if (id) {
      newElement.id = id;
    }

    return newElement;
  },
  HTMLforProduct: productObject => {
    const productContainer = htmlFactory.createHtmlElement("section", undefined, `productContainer--${productObject.id}`);
    productContainer.appendChild(htmlFactory.createHtmlElement("h3", productObject.name));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", productObject.description));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", productObject.price));
    productContainer.appendChild(htmlFactory.createHtmlElement("p", productObject.quantity));
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
    navBar.appendChild(_htmlFactory.default.createHtmlElement("a", "Categories", "navBar-categories"));
    navBar.appendChild(_htmlFactory.default.createHtmlElement("a", "Orders", "navBar-orders"));
    navBar.appendChild(_htmlFactory.default.createHtmlElement("a", "Log Out", "navBar-logOut"));
    displayContainer.appendChild(navBar);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGEuanMiLCIuLi9zY3JpcHRzL2h0bWxGYWN0b3J5LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9uYXZCYXIuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUVBLE1BQU0sR0FBRyxHQUFHLGdDQUFaO0FBRUEsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLFdBQVcsRUFBRSxNQUFNO0FBQ2YsV0FBTyxLQUFLLENBQUMsR0FBRCxDQUFMLENBQVcsSUFBWCxDQUFnQixRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFBNUIsQ0FBUDtBQUNIO0FBSE8sQ0FBWjtlQU1lLEc7Ozs7Ozs7Ozs7QUNWZjtBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsaUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixFQUFoQixLQUF1QjtBQUN0QyxVQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjs7QUFDQSxRQUFHLElBQUgsRUFBUTtBQUNKLE1BQUEsVUFBVSxDQUFDLFdBQVgsR0FBeUIsSUFBekI7QUFDSDs7QUFDRCxRQUFHLEVBQUgsRUFBTTtBQUNGLE1BQUEsVUFBVSxDQUFDLEVBQVgsR0FBZ0IsRUFBaEI7QUFDSDs7QUFDRCxXQUFPLFVBQVA7QUFDSCxHQVZlO0FBV2hCLEVBQUEsY0FBYyxFQUFHLGFBQUQsSUFBbUI7QUFDL0IsVUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsaUJBQVosQ0FBOEIsU0FBOUIsRUFBeUMsU0FBekMsRUFBcUQscUJBQW9CLGFBQWEsQ0FBQyxFQUFHLEVBQTFGLENBQXpCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixXQUFXLENBQUMsaUJBQVosQ0FBOEIsSUFBOUIsRUFBb0MsYUFBYSxDQUFDLElBQWxELENBQTdCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixXQUFXLENBQUMsaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsYUFBYSxDQUFDLFdBQWpELENBQTdCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixXQUFXLENBQUMsaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsYUFBYSxDQUFDLEtBQWpELENBQTdCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixXQUFXLENBQUMsaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsYUFBYSxDQUFDLFFBQWpELENBQTdCO0FBQ0EsV0FBTyxnQkFBUDtBQUNIO0FBbEJlLENBQXBCO2VBc0JlLFc7Ozs7OztBQ3hCZjs7QUFDQTs7QUFDQTs7OztBQUdBLGdCQUFhLFlBQWI7O0FBQ0EsaUJBQWMsWUFBZDs7Ozs7Ozs7OztBQ0pBOzs7O0FBRkE7QUFJQSxNQUFNLFlBQVksR0FBRztBQUNqQixFQUFBLFlBQVksRUFBRSxNQUFNO0FBQ2hCLFVBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCOztBQUNBLFVBQU0sTUFBTSxHQUFHLHFCQUFZLGlCQUFaLENBQThCLEtBQTlCLEVBQXFDLFNBQXJDLEVBQWdELFFBQWhELENBQWY7O0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixxQkFBWSxpQkFBWixDQUE4QixJQUE5QixFQUFvQyxPQUFwQyxFQUE2QyxlQUE3QyxDQUFuQjtBQUNBLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIscUJBQVksaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsWUFBbkMsRUFBaUQsbUJBQWpELENBQW5CO0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixxQkFBWSxpQkFBWixDQUE4QixHQUE5QixFQUFtQyxRQUFuQyxFQUE2QyxlQUE3QyxDQUFuQjtBQUNBLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIscUJBQVksaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsU0FBbkMsRUFBOEMsZUFBOUMsQ0FBbkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLE1BQTdCO0FBQ0EsV0FBTyxnQkFBUDtBQUNIO0FBVmdCLENBQXJCO2VBYWUsWTs7Ozs7Ozs7Ozs7QUNoQmY7O0FBQ0E7Ozs7QUFGQTtBQUlBLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCO0FBRUEsTUFBTSxhQUFhLEdBQUc7QUFDbEIsRUFBQSxZQUFZLEVBQUUsTUFBTTtBQUNoQixrQkFBSSxXQUFKLEdBQWtCLElBQWxCLENBQXVCLFlBQVksSUFBSTtBQUNuQyxNQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixxQkFBWSxjQUFaLENBQTJCLE9BQTNCLENBQTdCLENBQWhDO0FBQ0gsS0FGRDs7QUFHQSxXQUFPLGdCQUFQO0FBQ0g7QUFOaUIsQ0FBdEI7ZUFTZSxhIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9UaGlzIGNvbXBvbmVudCBpbmNsdWRlcyBtZXRob2RzIHRoYXQgZGVhbCB3aXRoIHRoZSBkYXRhIGluIG15IGRhdGFiYXNlXG5cbmNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Byb2R1Y3RzXCJcblxuY29uc3QgQVBJID0ge1xuICAgIGdldFByb2R1Y3RzOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSTsiLCIvLyBUaGlzIGZpbGUgY29udGFpbnMgdGhlIG1vZHVsZSB0aGF0IGNvbnRhaW5zIHRoZSBtZXRob2RzIHRoYXQgZGVhbCB3aXRoIGNyZWF0aW5nIEhUTUwuXG5cbmNvbnN0IGh0bWxGYWN0b3J5ID0ge1xuICAgIGNyZWF0ZUh0bWxFbGVtZW50OiAoZWxlbWVudCwgdGV4dCwgaWQpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIGlmKHRleHQpe1xuICAgICAgICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYoaWQpe1xuICAgICAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH0sXG4gICAgSFRNTGZvclByb2R1Y3Q6IChwcm9kdWN0T2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RDb250YWluZXIgPSBodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcInNlY3Rpb25cIiwgdW5kZWZpbmVkLCBgcHJvZHVjdENvbnRhaW5lci0tJHtwcm9kdWN0T2JqZWN0LmlkfWApO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiaDNcIiwgcHJvZHVjdE9iamVjdC5uYW1lKSk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJwXCIsIHByb2R1Y3RPYmplY3QuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcInBcIiwgcHJvZHVjdE9iamVjdC5wcmljZSkpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwicFwiLCBwcm9kdWN0T2JqZWN0LnF1YW50aXR5KSk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0Q29udGFpbmVyO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBodG1sRmFjdG9yeTsiLCJpbXBvcnQgbmF2QmFyTW9kdWxlIGZyb20gXCIuL25hdkJhclwiXG5pbXBvcnQgQVBJIGZyb20gXCIuL2RhdGFcIlxuaW1wb3J0IHByb2R1Y3RNb2R1bGUgZnJvbSBcIi4vcHJvZHVjdFwiXG5cblxubmF2QmFyTW9kdWxlLmNyZWF0ZU5hdkJhcigpO1xucHJvZHVjdE1vZHVsZS5saXN0UHJvZHVjdHMoKTtcbiIsIi8vVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBtb2R1bGUgdGhhdCBjcmVhdGVzIHRoZSBuYXYgYmFyXG5cbmltcG9ydCBodG1sRmFjdG9yeSBmcm9tIFwiLi9odG1sRmFjdG9yeVwiXG5cbmNvbnN0IG5hdkJhck1vZHVsZSA9IHtcbiAgICBjcmVhdGVOYXZCYXI6ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwibmF2XCIsIHVuZGVmaW5lZCwgXCJuYXZCYXJcIik7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImgxXCIsIFwiQmV0c3lcIiwgXCJuYXZCYXItaGVhZGVyXCIpKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiYVwiLCBcIkNhdGVnb3JpZXNcIiwgXCJuYXZCYXItY2F0ZWdvcmllc1wiKSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChodG1sRmFjdG9yeS5jcmVhdGVIdG1sRWxlbWVudChcImFcIiwgXCJPcmRlcnNcIiwgXCJuYXZCYXItb3JkZXJzXCIpKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiYVwiLCBcIkxvZyBPdXRcIiwgXCJuYXZCYXItbG9nT3V0XCIpKTtcbiAgICAgICAgZGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICByZXR1cm4gZGlzcGxheUNvbnRhaW5lcjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhck1vZHVsZTsiLCIvL1RoaXMgY29tcG9uZW50IGlzIHRoZSBtb2R1bGUgZm9yIGJ1aWxkaW5nIHRoZSBsYXlvdXQgb2YgZWFjaCBpbmRpdmlkdWFsIHByb2R1Y3QuIEkgcGxhbiBvbiB1c2luZyBvbmUgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRoZSBzYW1lIGVsZW1lbnRzIGZvciBlYWNoIHByb2R1Y3QgbGlzaXRuZy5cbmltcG9ydCBodG1sRmFjdG9yeSBmcm9tIFwiLi9odG1sRmFjdG9yeVwiXG5pbXBvcnQgQVBJIGZyb20gXCIuL2RhdGFcIjtcblxuY29uc3QgZGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheS1jb250YWluZXJcIilcblxuY29uc3QgcHJvZHVjdE1vZHVsZSA9IHtcbiAgICBsaXN0UHJvZHVjdHM6ICgpID0+IHtcbiAgICAgICAgQVBJLmdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0QXJyYXkgPT4ge1xuICAgICAgICAgICAgcHJvZHVjdEFycmF5LmZvckVhY2gocHJvZHVjdCA9PiBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LkhUTUxmb3JQcm9kdWN0KHByb2R1Y3QpKSlcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlDb250YWluZXI7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TW9kdWxlOyJdfQ==
