//This file contains the module that creates the nav bar

import htmlFactory from "./htmlFactory"

const navBarModule = {
    createNavBar: () => {
        const displayContainer = document.querySelector("#display-container");
        const navBar = htmlFactory.createHtmlElement("nav", undefined, "navBar");
        navBar.appendChild(htmlFactory.createHtmlElement("h1", "Betsy", "navBar-header"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Categories", "navBar-categories"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Orders", "navBar-orders"));
        navBar.appendChild(htmlFactory.createHtmlElement("a", "Log Out", "navBar-logOut"));
        displayContainer.appendChild(navBar);
        return displayContainer;
    }
}

export default navBarModule;