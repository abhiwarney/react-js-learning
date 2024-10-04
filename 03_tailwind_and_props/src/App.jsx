import Card from './components/Card'

import './App.css'

function App() {
 const myObj = {
  age: 26,
  skill: "web dev"
 }
//the attribute in the tags are called the props in react, and are passed to the components
  return (
    <>
     <h1 className="bg-green-400 text-black p-4 rounded-xl m-4">Tailwind Test</h1>
     <Card username="abhinav" btnTxt = "vist me" other = {myObj}/>
     <Card username="Simran" btnTxt = "Reach me" other = {myObj}/>
    </>
  )
}

export default App
