// This file contains the module that contains the methods that deal with creating HTML.

const htmlFactory = {
    createHtmlElement: (element, text, id) => {
        const newElement = document.createElement(element);
        if(text){
            newElement.textContent = text;
        }
        if(id){
            newElement.id = id;
        }
        return newElement;
    }
}


export default htmlFactory;