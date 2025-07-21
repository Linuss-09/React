import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className=" py-4 px-8 font-winky bg-emerald-900">
      <nav className=" mx-auto px-8 py-4 bg-violet-100 border flex justify-between items-center shadow-md rounded-lg backdrop-blur-lg ">
        {/* div for logo */}
        <div className="font-antiqua font-extrabold text-3xl text-gray-800 tracking-wide">
          VINTER
          </div>


        {/* div for center list */}
        <div className="">
          <ul className='flex space-x-12 text-lg'>
            <li>
              <NavLink to="/" 
              className={({isActive}) => `${isActive ? "text-red-900 font-bold " : "text-black"} hover:text-orange-700 hover:font-bold
               duration-75 `} >Home</NavLink>

            </li>

            <li>
              <NavLink to="/cocktails" className={({isActive}) => `${isActive ? "text-red-900": "text-black"} hover:text-orange-700 duration-75 hover:font-bold`} >Cocktails</NavLink>
            </li>
            <li>
              <NavLink to="/about" 
              className={({isActive}) => `${isActive ? "font-bold text-red-900 ": "text-black" } hover:text-orange-700 duration-75 hover:font-bold` 
            } 
              >About</NavLink>
            </li>

            <li>
              <NavLink to="/contact" 
              
              className={({isActive}) => `${isActive ? "font-bold text-red-900 ": "text-black"} hover:text-orange-700 duration-75 hover:font-bold`}  >Contact us</NavLink>
            </li>

          </ul>
        </div>

        {/* div for left part idk what its called */}
        <div className="">
          <button className='px-3 py-1.5 text-center rounded-md duration-150 text-white bg-black '>Contact us</button>
        </div>

      </nav>
    </header> 
  )
}

export default Header