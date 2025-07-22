import React from 'react'
import boiler from "../../assets/boiler.avif"

function About() {
  return (
    <>
      {/* main body kinda div */}
      <div className="bg-neutral-100 py-8">
        {/* flex container */}
        <div className="p-6 max-w-7xl mx-auto bg-gradient-to-b from-emerald-900 to-[#00382a] flex flex-col md:flex-row rounded-xl shadow-lg shadow-neutral-600 ">

          {/* col 1 */}
          <div className="md:w-1/2 shadow-lg shadow-neutral-900 rounded-2xl">
            <div className="aspect-square  ">
              <img 
              className='w-full h-full object-cover rounded-lg'
              src={boiler} alt="" />
            </div>
          </div>

          {/* col 2 */}
          <div className="md:w-1/2 p-8 text-left text-white ">
            <h2 className="text-6xl font-antiqua mb-8">About Us</h2>
            <p className="text-3xl font-antiqua font-light leading-relaxed ">
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