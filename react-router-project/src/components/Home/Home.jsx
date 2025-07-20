import React from 'react'
import wine from '../../assets/wine.jpg'

function Home() {
  return (
    <>
      {/* for boaundary */}
      <div className="bg-emerald-900 h-screen">


      {/* main container */}
        <div className=" mx-4 flex justify-around px-16 py-2 space-x-2 p-8">

        {/* col 1 */}
          <div className="bg-purple-400 flex items-center justify-center h-[500px] mt-12 overflow-hidden w-1/2 rounded-lg shadow-xl shadow-black "> 
            <img src = {wine} alt="khamba" 
            className="max-w-full object-cover " />
          </div>



          {/* col 2 */}
          <div 
          className="font-mono rounded-md w-1/2 py-2 px-16 flex flex-col justify-start space-y-10 text-amber-100 tracking-tight ">
          {/* h1 */}
          <h1 className='text-7xl max-w-3xl mt-12 font-pt  '>SIP INTO 80 YEARS OF HERITAGE</h1>

          <p className="text-xl font-inter">Meet the timeless taste that aged like fine... well, wine.
          We've been bottling tradition since before your grandpa grew his first mustache.
          Smooth, rich, unapologetically classic — no hype, just history in every pour.
          </p>

          {/* button ig?? */}
          <button type="button" className='shadow-md max-w-30 mt-4 px-2 py-2 font-pt rounded-md bg-black  '>Explore wines</button>
          
          </div>



        </div>

    </div>
    </>
  )
}

export default Home