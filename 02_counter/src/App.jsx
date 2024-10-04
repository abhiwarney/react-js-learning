import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(20) //useState() this is called react hook, returns an array

  /* 
  React hook is used here to reflect the state of the variable in the UI, without using hook, if we update the variable it wont reflectin the UI

  explore react hooks more

  note, this makes it easy to update values sat more than one place without usingb getElementById() or selectors for every tag
  
  */
 //let count = 40 //let create this count

function increaseCount(){
  count = count + 1
  setCount(count)
console.log("In count :",count);


}

function decreaseCount(){
  if(count > 0){
  count = count - 1
  setCount(count)
  console.log("Dc count : ",count)
  }else console.log("Further Count decrease not allowed !!")
  
}

  return (
    <>
      <div>
        <h1>Counter Demo</h1>
        <h2>counter : {count} </h2>
        <button onClick={increaseCount}>Increase</button><p> </p>
        <button onClick={decreaseCount}>Decrease</button>
        <h3>counter: {count}</h3>
        <p>footer : {count}</p>
      </div>
      
    </>
  )
}

export default App
