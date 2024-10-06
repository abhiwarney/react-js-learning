import { useParams } from "react-router-dom"
function User() {
    const {username} = useParams()
    console.log(username);
    
  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4">User : {username}</div>
  )
}

export default User