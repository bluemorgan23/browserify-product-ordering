(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  }
};
var _default = htmlFactory;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _navBar = _interopRequireDefault(require("./navBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_navBar.default.createNavBar();

},{"./navBar":3}],3:[function(require,module,exports){
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

},{"./htmlFactory":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2h0bWxGYWN0b3J5LmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9uYXZCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsaUJBQWlCLEVBQUUsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixFQUFoQixLQUF1QjtBQUN0QyxVQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFuQjs7QUFDQSxRQUFHLElBQUgsRUFBUTtBQUNKLE1BQUEsVUFBVSxDQUFDLFdBQVgsR0FBeUIsSUFBekI7QUFDSDs7QUFDRCxRQUFHLEVBQUgsRUFBTTtBQUNGLE1BQUEsVUFBVSxDQUFDLEVBQVgsR0FBZ0IsRUFBaEI7QUFDSDs7QUFDRCxXQUFPLFVBQVA7QUFDSDtBQVZlLENBQXBCO2VBY2UsVzs7Ozs7O0FDaEJmOzs7O0FBRUEsZ0JBQWEsWUFBYjs7Ozs7Ozs7OztBQ0FBOzs7O0FBRkE7QUFJQSxNQUFNLFlBQVksR0FBRztBQUNqQixFQUFBLFlBQVksRUFBRSxNQUFNO0FBQ2hCLFVBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCOztBQUNBLFVBQU0sTUFBTSxHQUFHLHFCQUFZLGlCQUFaLENBQThCLEtBQTlCLEVBQXFDLFNBQXJDLEVBQWdELFFBQWhELENBQWY7O0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixxQkFBWSxpQkFBWixDQUE4QixJQUE5QixFQUFvQyxPQUFwQyxFQUE2QyxlQUE3QyxDQUFuQjtBQUNBLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIscUJBQVksaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsWUFBbkMsRUFBaUQsbUJBQWpELENBQW5CO0FBQ0EsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixxQkFBWSxpQkFBWixDQUE4QixHQUE5QixFQUFtQyxRQUFuQyxFQUE2QyxlQUE3QyxDQUFuQjtBQUNBLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIscUJBQVksaUJBQVosQ0FBOEIsR0FBOUIsRUFBbUMsU0FBbkMsRUFBOEMsZUFBOUMsQ0FBbkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLE1BQTdCO0FBQ0EsV0FBTyxnQkFBUDtBQUNIO0FBVmdCLENBQXJCO2VBYWUsWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFRoaXMgZmlsZSBjb250YWlucyB0aGUgbW9kdWxlIHRoYXQgY29udGFpbnMgdGhlIG1ldGhvZHMgdGhhdCBkZWFsIHdpdGggY3JlYXRpbmcgSFRNTC5cblxuY29uc3QgaHRtbEZhY3RvcnkgPSB7XG4gICAgY3JlYXRlSHRtbEVsZW1lbnQ6IChlbGVtZW50LCB0ZXh0LCBpZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgaWYodGV4dCl7XG4gICAgICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgICBpZihpZCl7XG4gICAgICAgICAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGh0bWxGYWN0b3J5OyIsImltcG9ydCBuYXZCYXJNb2R1bGUgZnJvbSBcIi4vbmF2QmFyXCJcblxubmF2QmFyTW9kdWxlLmNyZWF0ZU5hdkJhcigpO1xuIiwiLy9UaGlzIGZpbGUgY29udGFpbnMgdGhlIG1vZHVsZSB0aGF0IGNyZWF0ZXMgdGhlIG5hdiBiYXJcblxuaW1wb3J0IGh0bWxGYWN0b3J5IGZyb20gXCIuL2h0bWxGYWN0b3J5XCJcblxuY29uc3QgbmF2QmFyTW9kdWxlID0ge1xuICAgIGNyZWF0ZU5hdkJhcjogKCkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJuYXZcIiwgdW5kZWZpbmVkLCBcIm5hdkJhclwiKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiaDFcIiwgXCJCZXRzeVwiLCBcIm5hdkJhci1oZWFkZXJcIikpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJhXCIsIFwiQ2F0ZWdvcmllc1wiLCBcIm5hdkJhci1jYXRlZ29yaWVzXCIpKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGh0bWxGYWN0b3J5LmNyZWF0ZUh0bWxFbGVtZW50KFwiYVwiLCBcIk9yZGVyc1wiLCBcIm5hdkJhci1vcmRlcnNcIikpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaHRtbEZhY3RvcnkuY3JlYXRlSHRtbEVsZW1lbnQoXCJhXCIsIFwiTG9nIE91dFwiLCBcIm5hdkJhci1sb2dPdXRcIikpO1xuICAgICAgICBkaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgICAgIHJldHVybiBkaXNwbGF5Q29udGFpbmVyO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2QmFyTW9kdWxlOyJdfQ==
