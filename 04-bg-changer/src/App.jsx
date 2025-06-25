import { useState } from 'react'


function App() {

  const [color, setColor] = useState("pink")

  return (
    // the main body kinda thing here
    <div className="h-screen w-full duration-600"
    style={{backgroundColor: color}}
    >
      {/* another contianer jo ki niche aayega kinda:- main purpose btn ke bar ko position karne ke liye use kar rhe hain...coz woh directly karna is difficult so its easier to use this nigg...it hold the niche ke btn baar */}
      <div className="fixed inset-x-0 bottom-12
      py-2 px-2 flex justify-center flex-wrap ">
        <div className="px-4 rounded-lg
        py-3 flex justify-center items-center flex-wrap gap-4 bg-linear-to-br from-black/70 to-blue-950/70 text-white backdrop-blur-md
        ">
          <button 
          onClick={() => setColor('#b91c1c')}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-red-700  "
          >Red</button>
          <button
          onClick = {() => setColor('#1d4ed8')}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-blue-700"
           >Blue</button>
          <button 
          onClick = {()=> setColor('#15803d')}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-green-700">Green</button>
          <button 
          onClick = {()=> setColor('#6d28d9')}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-violet-700">Violet</button>
          <button 
          onClick = {()=> setColor('#be185d')}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-pink-700">Pink</button>
          <button 
          onClick={() => {setColor('#0e7490')}}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-cyan-700">Cyan</button>
          <button 
          onClick={() => {setColor('#374151')}}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-gray-700">Grey</button>
          <button 
          onClick={()=> {setColor('#b45309')}}
          className="px-2 py-1 rounded-md outline-none shadow-lg bg-amber-700">Amber</button>
        </div>
      </div>
    </div>
  )
}

export default App
