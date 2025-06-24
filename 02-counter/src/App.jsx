import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [counter, setCounter] = useState(15)
  // here basically useState is a funtion which manages the state....simple bhasha me it cretes a varibale and uske saath me ek function hota hai jo responsible hota hai uske state varible ko manage karne ke liye(ofc humko hi mannually karna hoga but it helps kinda....)
  // also is varible me defualt value woh hogi jo hum dalnege as arg in useStae() thats how it works  
  // u cansee jahan jahan counter varibale hai react will restructre the dom and update the value at every counter variable in one go :)
  
  // let counter = 5
  const addValue = () => {
    // console.log("value added", Math.random());
    if(counter >= 20) return
    ++counter
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)
    setCounter(counter)

    // yahna par har ek setcoutner increment karta hai value but the thing is due to fibre algo yahan par pehle batch bnta hai chizon ka and wh check karta that all the above funcctoin trying to do the same job toh...read it mfk
    
    console.log(counter);
  }

  const decValue = () => {
    if(counter <= 0) {
      return
    }

    setCounter(counter - 1)
    // it will dec the value of ccounter variable in the whole ui bro i its so cool
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter} </h2>

    <button
    onClick={addValue}
    // but why only ref...coz addValue() likhenge toh turant execute ho jayega we jsut want it to be get executed on click only hence ref pass kara 
    >Add Value {counter} </button>
    <br />
    <button
    onClick={decValue} 
    >Decrease value {counter} </button>
    </>
  )
}

export default App
