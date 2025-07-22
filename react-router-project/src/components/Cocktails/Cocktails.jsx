import React from 'react'
import {useLoaderData} from "react-router-dom"

function Cocktails() {

    const data = useLoaderData()
    console.log(data)


  return (
    <>
    {/* main body kind container */}
    <div className="min-h-screen bg-emerald-900 py-6">

        <h1 className='text-center text-4xl  text-white font-antiqua '>Wine-Wall</h1>
        {/* a main contianer */}
        <div className="max-w-7xl mx-auto py-4">
            {/* a main grid div  */}
            <div className="grid grid-cols-1 md:grid-cols-3  px-4 ">
                {data.map(item => (
                    <div 
                    key={item.idDrink}
                    className="bg-white overflow-hidden h-full border-2 ">
                    

                        {/* IMAGE */}
                        <div className=" aspect-[1] bg-white py-8 ">

                            <img 
                            className='w-full h-full object-contain '
                            src={item.image} alt="Drink" />

                            <div className="flex flex-col justify-center items-center p-4">

                        <h2 className='text-center bg-white text-black mt-2 mb-1 text-lg' >{item.wine} </h2>
                        <p className="text-center bg-white text-black">From- {item.winery} </p>


                            </div>
                        
                        </div>

                    </div>
                ))}
            </div>
        </div>

    </div>
    </>
  )
}

export default Cocktails        

export async function cocktailsLoader({params}) {
    const res = await fetch('https://api.sampleapis.com/wines/reds')
    if(!res.ok) {
        throw new Response ("Failed to load the data", {status: 404})
        
    }
    const allWines = await res.json()
    const wines = allWines.slice(0,9)
    return wines;
}