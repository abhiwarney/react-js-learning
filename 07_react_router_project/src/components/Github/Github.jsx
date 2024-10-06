//import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    /* const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/abhiwarney')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []) */
    //will implement this functionality using loader and useLoader hook

    return (
        <div className='bg-gray-700 text-white text-center text-3xl p-4 m-3'>Github Followers :  {data.followers}
        <img src={data.avatar_url}  alt='Github image' width={300}/></div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/abhiwarney')
    return response.json()
}