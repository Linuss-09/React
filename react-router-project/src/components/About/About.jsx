import React from 'react'
import boiler from "../../assets/boiler.avif"

function About() {
  return (
    <>
      {/* main body kinda div */}
      <div className="bg-neutral-100 py-6 px-4 md:py-8">
        {/* flex container */}
        <div className="p-6 max-w-6xl mx-auto bg-gradient-to-b from-emerald-950 to-[#00382a] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg shadow-neutral-600 
        md:gap-8 gap-2
        ">
          


          {/* col 1 */}
          <div className="w-full md:w-1/2 shadow-lg shadow-neutral-900 rounded-2xl">
            <div className=" lg:aspect-[1/1] aspect-[15/12]  ">
              <img 
              className='w-full h-full object-cover rounded-lg'
              src={boiler} alt="Wine Distillery" />
            </div>
          </div>

          {/* col 2 */}
          <div className="w-full md:w-1/2 py-8 px-6 lg:p-10 text-white flex flex-col justify-center ">
            <h2 className="text-3xl md:text-6xl font-cinzel mb-4 lg:mb-8 text-center lg:text-left">About Us</h2>
            <p className="text-lg md:text-2xl font-winky font-light text-center lg:text-left leading-relaxed ">
              We are a modern wine company rooted in timeless taste.
              From crafting our own signature wines to curating bottles from the world’s finest vineyards — we do it all.
            
              Think of us as your gateway to global wine culture, one sip at a time.
              Whether you're a collector, a casual drinker, or just wine-curious — you're in good hands.


              Welcome to where great wine meets greater stories.


            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About