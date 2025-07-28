import React from 'react'
import wine from '/wine-bottles/w-022.webp'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* for boaundary */}
      <div className="bg-emerald-950 min-h-screen py-8">


      {/* main container */}
        <div className=" mx-4 flex flex-col lg:flex-row lg:gap-12 lg:px-16 px-4 lg:py-6 py-2 gap-6  ">

        {/* col 1 */}
          <div className="border overflow-hidden lg:w-1/2 w-full rounded-lg shadow-xl shadow-black md:mt-0 mt-4 "> 

            {/* img container */}
            <img src = {wine} alt="khamba" 
            className="w-full h-[250px] sm:h-[300px] lg:h-[500px] object-cover  " />


          </div>



          {/* col 2 */}
          <div 
          className="rounded-md lg:w-1/2 w-full
            lg:py-4 py-4 px-4 lg:px-16 flex flex-col   
          md:space-y-8 space-y-4
           text-amber-100 tracking-tight ">
          {/* h1 */}
          <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-3xl  max-w-3xl lg:mt-14 mt-8
          font-cinzel leading-10 tracking-wide '>SIP INTO 80 YEARS OF HERITAGE</h1>

          <p className="lg:text-2xl text-xl mb-8 font-cormo leading-9">Meet the timeless taste that aged like fine... well, wine.
          We've been bottling tradition since before your grandpa grew his first mustache.
          Smooth, rich, unapologetically classic — no hype, just history in every pour.
          </p>

          {/* button ig?? */}
          <Link
          to="/cocktails"
          >
          
          <button type="button" className='
          cursor-pointer md:text-md w-full sm:w-auto
          shadow-md px-4 py-2 font-pt rounded-md bg-black transition-all hover:bg-neutral-900 hover:scale-103 duration-300 '>Explore wines</button>
          </Link>
          
          </div>



        </div>

    </div>
    </>
  )
}

export default Home