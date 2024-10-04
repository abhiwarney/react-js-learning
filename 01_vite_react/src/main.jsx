import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* 
  createRoot(document.getElementById('root')).render(<App />)
clear

  -> this line , is creating a virtual dom for the web using createRoot() from 'react-dom',
      it needs a root element from where the dom starts,
      then .render() is used to render the react components, it basically injecting the components in the Dom.

*/


/* 
we have seen that , a component is  nothing but just a function returning an element, so can we directly pass the function to the render??
->>>> Yes we can pass, but its not the standard followed

or, as we know, react pasrses the html element to an object than renders it, can we directly pass an cusotm object to render?
->>> yes we can, but it should be syntactically as per react , you cant just pass any random custom object

lets see with example below

*/

//directly createing function and rendering it
function elementOne(){
    return (<h1>this is direct function passed to render</h1>)
}

//direct cusotm object
const elementTwo = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target : '_blank'
    },
    children:'This is my custom react Element'
}

//lets create direct html element

const elementThree = (<p>This is cusotm Paragraph ELement</p>)


//now lets create a react element using react lib and pass it
const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'click me to reach google'
)

createRoot(document.getElementById('root')).render(
    //reactElement //this also works
    //elementThree //this one is working
    //elementTwo //this is not wroking
   // elementOne() //so here we can see we directly pass the function to render.
   <App /> //commenting it as testing other ways to render element
)
