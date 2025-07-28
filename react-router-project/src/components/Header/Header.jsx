import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  console.log(isMenuOpen)

  return (
    <header className=" py-6 md:py-4 px-8  bg-emerald-950">
      <nav className=" mx-auto px-8 py-4 bg-white flex justify-between items-center shadow-md rounded-lg backdrop-blur-lg ">

        {/* div for logo */}
        <Link to="/" >
          <div className="font-antiqua font-extrabold text-3xl text-gray-800 tracking-wide">
            VINTER
            </div>
        </Link>



        {/* div for desktop nav center list */}
        {/* make it hidden for <md layout */}
        <div className="hidden md:flex"> 
          {/* its basically saying that greater than middle length display....felx rahega and rest par it would be hidden  */}
           {/* //insert yahan karenge aap */}
          <ul className='flex space-x-12 text-lg'>
            <li>
              <NavLink to="/" 
              className={({isActive}) => `${isActive ? "text-red-900 font-bold " : "text-black font-medium"} hover:text-red-700 hover:font-bold
               duration-75 transition-all hover:scale-105 `} >Home</NavLink>

            </li>

            <li>
              <NavLink to="/cocktails" className={({isActive}) => `${isActive ? "text-red-900 font-bold": "text-black font-medium"} hover:text-red-700 duration-75 transition-all hover:scale-105 hover:font-bold`} >Wine-Wall</NavLink>
            </li>
            <li>
              <NavLink to="/about" 
              className={({isActive}) => `${isActive ? "font-bold text-red-900 ": "text-black font-medium" } hover:text-red-800 duration-75 hover:scale-105 transition-all hover:font hover:font-bold` 
            } 
              >About</NavLink>
            </li>

            <li>
              <NavLink to="/contact" 
              
              className={({isActive}) => `${isActive ? "font-bold text-red-900 ": "text-black font-medium"} hover:text-red-700 transition-transform hover:scale-105 hover:font-bold duration-150 `}  >Contact us</NavLink>
            </li>

          </ul>
        </div>


        <div className="md:hidden">
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='p-2 text-gray-700  '
            >
              {/* HMB */}
              {!isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}

          </button>
        </div> 

        {/* div for contact part */}
        <div className="hidden md:flex">
          <Link to="/contact" >
          <button className='cursor-pointer px-3 py-1.5 text-center 
          transition-transform hover:scale-105
          rounded-md duration-300 text-white bg-black '>Contact us</button>
          </Link>
        </div>

      </nav>

      {/* mobile menu #DropDown  */}

      {isMenuOpen && (
        <div className="md:hidden bg-white mx-8 mt-2 rounded-2xl shadow-lg">
          <ul className=" bg-[#fffbf6] font-ubuntu rounded-lg flex flex-col py-2 ">
            <li >
              <NavLink to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => `block px-4 py-2.5 text-center transition-colors duration-200 ${isActive ? "bg-amber-900 text-white font-semibold" :"text-gray-800 hover:bg-gray-50 " }` }
              >Home</NavLink>
            </li >
            <li >
              <NavLink
              onClick={() => setIsMenuOpen(false)}
              className = {({isActive}) => `block px-4 py-2.5 text-center  transition-colors duration-200  ${isActive? "bg-amber-900 text-white font-semibold" : "text-gray-800 hover:bg-gray-50" }`}
              to="/cocktails">Wine-Wall</NavLink>
            </li>
            <li  >
              <NavLink to="/about"
              onClick={() => setIsMenuOpen(false)}
              className= {({isActive}) => `block py-2.5 px-4 text-center
              ${isActive ? "bg-amber-900 text-white font-semibold":"text-gray-700" }
              ` } 
              >About</NavLink>
            </li>
            <li >
              <NavLink 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={({isActive}) => `block text-center transition-colors duration-200 px-4 py-2.5 ${isActive? "bg-amber-900 text-white font-semibold " :"text-gray-700" } `}
              
              >Contact</NavLink>
            </li>
          </ul>
        </div>
      )}

    </header> 
  )
}

export default Header