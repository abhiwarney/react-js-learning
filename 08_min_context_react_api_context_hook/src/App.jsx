import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>This is abput React useContext() hook for state management.</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
