/* 
this is basically a demo about, how React renders the element under the hood
*/

//setting the root element of the DOM
const rootElement = document.querySelector('#root')

//react make this object of the element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target : '_blank'
    },
    children:'This is my custom react Element'
}

//react has renders which renders the html
function customReactRender(reactElement,root){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    for (const key in reactElement.props) {
        element.setAttribute(key,reactElement.props[key])
    }
    root.appendChild(element)
}

customReactRender(reactElement,rootElement)