//This file contains the module that creates the nav bar

import htmlFactory from "./htmlFactory"

const navBarModule = {
    createNavBar: () => {
        const displayContainer = document.querySelector("#display-container");
        const navBar = htmlFactory.createHtmlElement("nav", undefined, "navBar");
        navBar.appendChild(htmlFactory.createHtmlElement("h1", "Betsy", "navBar-header"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Categories", "navBar-categories", "http://localhost:8080"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Orders", "navBar-orders", "http://localhost:8080"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Log Out", "navBar-logOut", "http://localhost:8080"));
        displayContainer.appendChild(navBar);
        displayContainer.innerHTML += "<hr/>"
        return displayContainer;
    }
}

export default navBarModule;