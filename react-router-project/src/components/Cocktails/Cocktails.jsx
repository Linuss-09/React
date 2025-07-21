import React from 'react'
import {useLoaderData} from "react-router-dom"

function Cocktails() {

    const data = useLoaderData()
    console.log(data)


  return (
    <>
    {/* main body kind container */}
    <div className="min-h-screen bg-emerald-900 border py-6">

        <h1 className='text-center text-4xl  text-white font-antiqua '>Cocktails</h1>
        {/* a main contianer */}
        <div className="max-w-7xl mx-auto py-4">
            {/* a main grid div  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 rounded-lg ">
                {data.drinks.map(drink => (
                    <div 
                    key={drink.idDrink}
                    className="bg-neutral-900 rounded-xl shadow-md shadow-neutral-950">

                        <img 
                        className='w-full rounded-lg '
                        src={drink.strDrinkThumb} alt="Drink" />
                        <h2 className='text-center text-white mt-2 mb-1 text-lg  ' >{drink.strDrink} </h2>
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
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    if(!res.ok) {
        throw new Response ("Failed to load the data", {status: 404})

    }
    return res.json();
}