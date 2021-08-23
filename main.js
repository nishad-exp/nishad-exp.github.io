/*
Trying to build my own vanilla js framework, currently IDK how to make virutal DOMs and all
but ill try to use the component based design.
*/

import routes from "./router.js"

// we will inject HTML using js
var root = document.getElementById('root')
var title = document.getElementsByTagName('title')[0]

const renderDOM = (component) =>{
    root.innerHTML=""
    root.appendChild(generateDOM(component))
    title.innerText = component.title
}

const generateDOM = (componentObj) =>{
    let component = document.createElement(componentObj.element)
    component.className = componentObj.class
    if("text" in componentObj){
        component.innerText = componentObj.text
    }
    if("children" in componentObj){
        componentObj.children.forEach(child => {
            component.appendChild(generateDOM(child))
        });    
    }
    if("src" in componentObj){
        component.src = componentObj.src
    }
    if("styles" in componentObj){
        component.setAttribute('style',componentObj.styles);
    }
    if("click" in componentObj){
        /*if("route" in componentObj.click){
            component.addEventListener("click",renderDom(componentObj.click.route))
        }
        
        else{
            component.addEventListener("click", componentObj.click);
        }*/
        if("route" in componentObj.click ){
            console.log(111)
            let routeObj =  routes.filter(obj => {
                return obj.name === componentObj.click.route
              })
            component.addEventListener("click",()=>{
                renderDOM(routeObj[0].component())
            })

        }
        component.addEventListener("click", componentObj.click);
    }
    if("id" in componentObj){
        component.id = componentObj.id
    }
    return component
}

renderDOM(routes[0].component())