import React from 'react'
import wines4 from "../../../public/wine-middle.jpg"

function Contact() {
  return (
    <>
      {/* the main body kinda thing  */}
      <div className="border  p-4 bg-[url('/wines-4.png')] min-h-screen "
      >
        
        {/* img using tailwind  */}
        {/* bg-[url('/wine4.jpg')] */}


                    {/* for image */}
            {/* <div className="aspect-square">
              <img 
              className='w-full h-full object-cover'
              src={winery} alt="" />
            </div> */}



        <div className="border bg-[#2505052c] backdrop-blur-xs max-w-7xl mx-auto flex flex-col md:flex-row p-6 space-x-4">

          {/* container 1 */}
          <div className="text-black rounded-2xl bg-white border md:w-1/2 "
          >
          {/* kuch bhi heading idk */}
          <div className="text-left p-4">

            <h2 className=" text-3xl py-2">
              You Have Questions,
            </h2>
            <h2 className=" text-3xl pb-2 ">
              We Have the Finest Answers
            </h2>

          </div>

          <div className="aspect-[2/1]">
            <img 
            className='w-full h-full object-cover'
            src={wines4} />
          </div>



            {/* a grid?? */}
            <div className="grid grid-cols-2 gap-2 p-2">
              <div className=" px-2 py-4">
                  <h2 className="text-lg font-black">Location</h2>
                  <p className='font-'>Château Le Mirage</p>
                  <p>Rue des Vignobles, 78</p>
                  <p>France</p>
                </div>

              <div className=" px-2 py-4">
                  <h3 className="font-bold text-lg">Social Media</h3>
                  <ul className="flex flex-col">
                    <li className=""><a href="">Instagram</a></li>
                    <li className=""><a href="">Twitter</a></li>
                    <li className=""><a href="">Facebook</a></li>
                  </ul>
                </div>

              <div className=" py-4 px-2">
                <h3 className="text-lg font-bold ">Email</h3>
                <p className="">vinter1945@gmail.com</p>
              </div>

              <div className=" py-4 px-2">
                  <h3 className="font-bold text-lg">Contact</h3>
                  <p className="">+33 556 002 001</p>
              </div>

            </div>

          </div>

          {/* container 2 */}
          <div className="bg-white  rounded-2xl md:w-1/2">

                <h3 className="text-2xl p-6 pt-10 font-bo">Tell us what the fuck you need ?</h3>
                <p className="px-4 text-lg text-gray-600 mb-2">Our sommeliers and support team are here to assist you with every pour, bottle, or event</p>
                {/* FORM banaynege bc           */}
                <form className="flex flex-col px-2 py-4">
                  {/* first thing idk  */}
                  <div className=" flex py-2 px-2 justify-center items-center space-x-2 ">
                    {/* div 1  */}
                    <input type="text" placeholder='First Name' className="border py-2 px-2 rounded-lg w-1/2 focus:outline-none focus:ring-1 focus:ring-emerald-900 " />

                    <input type="text" placeholder='Last Name' className="border py-2 px-2 w-1/2 rounded-lg
                    focus:outline-none focus:ring-1 focus:ring-emerald-900 
                    " />
                  </div>

                  {/* contacct and email */}
                  <div className="flex justify-center items-center py-3 px-2 space-x-2
                  
                  ">


                    <input 
                    className='border w-1/2 rounded-lg py-2 px-2
                    focus:outline-none focus:ring-1 focus:ring-emerald-900 
                    '
                    placeholder='Country'
                    type="text" name="text" 
                    />

                    <input
                    className='border w-1/2 rounded-lg py-2 px-2 
                    focus:outline-none focus:ring-1 focus:ring-emerald-900 
                    '
                    placeholder='Contact no.'
                    type="number" name="contact"/>

                  </div>

                  {/* email */}
                  <div className="px-2 py-3 ">
                    <input 
                    className='border w-full rounded-lg py-2 px-2
                    focus:outline-none focus:ring-1 focus:ring-emerald-900 
                    '
                    placeholder='Email address'
                    type="email" name="email" />
                    </div>

{/*                   msg box */}
                    <div className="space-y-2 px-2 py-3">
                      <p className="px-1 text-gray-500 ">Ask a question</p>
                      {/* <input 
                      className='border px-2 py-2 min-h- w-full '
                      placeholder='Message'
                      type="text" name="msg-box" /> */}

                      <textarea name="msg-box"
                      className='w-full p-2 border border-gray-600 
                      rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-800
                      resize-none

                      '
                      placeholder='Message'
                      rows="5"></textarea>
                    </div>

                    <div className="py-2 px-2">
                      <button 
                      className='border w-full py-2 px-2 rounded-lg text-lg font-semibold text-gray-500
                      
                      '
                      type="submit">
                        Submit
                      </button>
                    </div>

                </form>
          </div>

        </div>




        {/* the flex container */}


      </div>
    </>
  )
}

export default Contact