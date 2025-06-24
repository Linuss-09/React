import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom app !!!!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>click me to visit google</a>
)

const anotherUser = " Danerys "

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'click me to visit google',
  // jab yeh sare upar ki html ki bkchodi ho jati hai compltete then only varibles of js are exeucted here and unko fir ineect kiya jata hai so take exp from anoterhrUser 
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // // MyApp()  ase bhi likh skate hain and its comltey fine 
  // <App />
  ReactElement
)
