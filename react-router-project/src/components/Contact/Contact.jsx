import React from 'react'
import wines4 from "../../assets/wine-middle.jpg"

function Contact() {

  const handlgeSubmit = (e) => {
    e.preventDefault()
    alert('Thank You! Your message has been sent sucessfully.')
  }

  return (
    <>
      {/* the main body kinda thing  */}
      <div className="pb-12 pt-6 px-4 bg-amber-50 min-h-screen"
      >

        {/* bg-[url('/wines-4.png')] min-h-screen */}


        <div className="border bg-gradient-to-b from-emerald-900 to-[#012119] rounded-2xl
        shadow-xl shadow-neutral-800
        backdrop-blur-xs max-w-7xl mx-auto flex flex-col md:flex-row p-4 lg:p-8 gap-6 ">

          {/* container 1 */}
          <div className="text-white  rounded-2xl space-y-3 md:space-y-6 lg:w-1/2 "
          >
          {/* kuch bhi heading idk */}
          <div className="bg-gradient-to-b from-neutral-800 to-neutral-900 mb-4 rounded-2xl text-left p-6 lg:p-8">

            <h2 className="text-2xl md:text-3xl font-sans py-2">
              You Have Questions,
            </h2>
            <h2 className="text-2xl lg:text-3xl font-sans  ">
              We Have the Finest Answers
            </h2>

          </div>

            <div className="lg:aspect-[2/1] aspect-[3/2] ">
            <img 
            className='w-full h-full object-cover rounded-2xl'
            src={wines4} />
          </div>



            {/* a grid?? */}
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4 ">
              {/* col1 */}
              <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl mt-4 md:mt-0 p-6 md:p-8">
                  <h2 className="text-lg font-black mb-2">Location</h2>
                  <p className='text-sm md:text-base ' >Château Le Mirage</p>
                  <p className='text-sm md:text-base ' >Rue des Vignobles, 78</p>
                  <p className='text-sm md:text-base ' >France</p>
                </div>

              <div className=" bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl p-6 md:p-8 ">
                  <h3 className="font-bold text-lg mb-2">Social Media</h3>
                  <ul className="flex flex-col space-y-1 text-sm md:text-base ">
                    <li className=""><a href="">Instagram</a></li>
                    <li className=""><a href="">Twitter</a></li>
                    <li className=""><a href="">Facebook</a></li>
                  </ul>
                </div>

              <div className=" bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg mb-2 font-bold ">Email</h3>
                <p className="text-sm md:text-base">vinter1945@gmail.com</p>
              </div>

              <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl p-6 md:p-8">
                  <h3 className="font-bold text-lg mb-2">Contact</h3>
                  <p className="text-sm md:text-base">+33 556 002 001</p>
              </div>

            </div>

          </div>

          {/* container 2 */}
          <div className=" text-white bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-2xl  md:w-1/2">


            <div className="p-6 lg:p-8">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">Get Started</h3>

                <p className="text-base md:text-lg  text-gray-300 ">Our sommeliers and support team are here to assist you with every pour, bottle, or event</p>
              </div>            
              
                {/* FORM banaynege bc           */}
                <form 
                onSubmit={handlgeSubmit}
                className="flex flex-col px-4 md:px-8 md:space-y-10 text-gray-200 space-y-4 pb-8 md:pb-0 ">
                  {/* first thing idk  */}
                  <div className=" flex flex-col sm:flex-row  gap-4  ">
                    {/* div 1  */}
                    <input type="text" placeholder='First Name' className="border border-gray-200 flex-1 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800  " />

                    <input type="text" placeholder='Last Name' className="border border-gray-200 flex-1 py-3 px-4 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-emerald-800 
                    " />
                  </div>

                  {/* phone numb and ocuntry */}
                  <div className="flex flex-col sm:flex-row gap-4
                  ">
                    <input 
                    className='border flex-1 rounded-lg py-3 px-4
                    focus:outline-none focus:ring-2 focus:ring-emerald-800
                    '
                    placeholder='Country'
                    type="text" name="text" 
                    />

                    <input
                    className='border flex-1 rounded-lg py-3 px-4 
                    focus:outline-none focus:ring-2 focus:ring-emerald-800 
                    '
                    placeholder='Contact no.'
                    type="tel" name="contact"/>

                  </div>

                  {/* email */}
                    <input 
                    className='border w-full rounded-lg py-3 px-4
                    focus:outline-none focus:ring-2 focus:ring-emerald-800 
                    '
                    placeholder='Email address'
                    type="email" name="email" />


                  {/*msg box */}
                    <div className="space-y-4 ">
                      <p className="text-lg border-b text-gray-300 inline-block">Ask a question</p>

                      <textarea name="msg-box"
                      className='w-full p-4 border border-gray-300 
                      rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800
                      resize-none
                      '
                      placeholder='Message'
                      rows="5"></textarea>
                    </div>

                      <button 
                      className='border mt-2 w-full py-3 px-4 rounded-lg text-lg font-semibold text-gray-300 hover:bg-neutral-900 duration-75 transition
                      border-gray-300
                      '
                      type="submit">
                        Submit
                      </button>

                </form>
          </div>

        </div>




        {/* the flex container */}


      </div>
    </>
  )
}

export default Contact