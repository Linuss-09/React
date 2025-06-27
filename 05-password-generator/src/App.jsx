import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState("8")
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef() hook
  const passwordRef = useRef(null)



  // useCallback() hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()-_+=[]{}<>?/"
  
    for (let i = 1; i <= Number(length); i++) {
      let char = Math.floor(Math.random() * str.length )
      console.log(char);
      pass += str.charAt(char)
    }

    setPassword(pass)
    // here ths setPassword method will take this pass value and update the paosword value.....kaise karega woh react ki chinta hai humari chinta nhi hai..:)

    // and whenever we will call this password generator fn this whole thing will run and a new pass value be created every time and it value will be updated using setPassword fn...

    // so basically 
    // setPassword(pass) updates the password state with the new value.
    // How React updates the state internally is not our concern.
    // Every time passwordGenerator() runs, it creates a new password and updates the state.



  }, [length, numberAllowed, characterAllowed, setPassword])
  // yahan par sePassword kyun pass kiya jano zara... zara mehkata hai aachkl mera tn badan woh pyasi ha....
  

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  }, [password])


  // useeffect is basically ke in dependecies me kuch bhi change ho toh callback wal fn run krdo..while useCallback me sirf hum optimize karne ke liye daal rhe hain chizen
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto px-4 py-2 my-8 shadow-lg bg-gray-800 rounded-lg ">
        <h1 className=" text-center text-2xl text-white my-3">Password Generator</h1>

        {/* div for the input and the btn */}
        <div className="border border-white flex justify-center items-center py-2 px-4 rounded-lg overflow-hidden mb-4 ">
          <input 
          className='border text-white outline-none px-3 py-1 w-full '
          type="text" 
          value={password}
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
          {/* Copy butotn */}
          <button 
          onClick = {copyPasswordToClipboard}
          className="bg-blue-800 py-1.5 px-2 rounded-md ml-2 cursor-pointer hover:bg-blue-600 shrink-0 text-gray-200"
          >Copy</button>
        </div>

        {/* div 2 for other parts */}
        <div className="border flex items-center justify-between px-4 text-white py-2 text-sm rounded-lg
        ">


          {/* div the slider */}
          <div className="flex items-center gap-x-1.5">
          <input 
          type="range"
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label >Length: {length} </label>
          </div>


          {/* for numb */}
          <div className="flex items-center gap-x-1.5">
            <input 
            type="checkbox" 
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev)
              // yeh dekho yehan par kya ho rha hai
            }}
            />
            <label>Number</label>
          </div>


          {/* for character */}
          <div className="flex items-center gap-x-1.5">
            <input 
            type="checkbox" 
            defaultChecked = {characterAllowed}
            id="characterInput"
            onChange={() => {
              setcharacterAllowed((prev) => !prev)
            }}
            />
            <label>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
