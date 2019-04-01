//This file contains the module that creates the nav bar

import htmlFactory from "./htmlFactory"

const navBarModule = {
    createNavBar: () => {
        const mainContainer = document.querySelector("#display-container");
        const navContainer = mainContainer.appendChild(htmlFactory.createHtmlElement("div"));
        const navBar = htmlFactory.createHtmlElement("nav", undefined, "navBar", undefined, undefined, "navbar navbar-dark bg-dark mb-1");
        navBar.appendChild(htmlFactory.createHtmlElement("h1", "Betsy", "navBar-header"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Categories", "navBar-categories", "http://localhost:8080", undefined, "navbar-link"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Orders", "navBar-orders", "http://localhost:8080", undefined, "navbar-link"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Log Out", "navBar-logOut", "http://localhost:8080", undefined, "navbar-link"));
        navContainer.appendChild(navBar);
        return navContainer;
    }
}

export default navBarModule;