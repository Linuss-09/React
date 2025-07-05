import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // // to get the folwoer info of github we need to call api also when jab page load ho ? and hence we'll use useEffect here :)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     } )
    // }, [])

  return (
    <>
    {/* main div */}
    <div className="flex flex-col border p-4 bg-violet-200">
        <div className='text-center bg-red-500 m-4 py-2 px-4 text-2xl text-blue-50 rounded-lg '>Github followers: {data.followers} </div>

        <div className="ml-10" >
            <img 
            className=' shadow-xl shadow-stone-700 rounded-md ' 
            src= {data.avatar_url} alt="Github pfp" width={300} /></div>

    </div>

    </>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}