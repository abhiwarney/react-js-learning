
import Comp from './Comp' //importing the component here
function App() {
const myName = "Abhinav Warney !"  //to inject this var in element use {var} , like in line 9

  return ( //<></> is provide by react library as we can only return one element, so in orde rtoreturn many elements , we used to wrap it in a div, so seeing this react provided a template for us to simplfy this
    <> 
      <Comp/> 
      <h1>Helloe React | {myName}</h1> 
    </>
  )
}

export default App
