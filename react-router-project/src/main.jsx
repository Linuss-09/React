import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Cocktails, {cocktailsLoader} from './components/Cocktails/Cocktails.jsx'
import "./index.css"

const router = createBrowserRouter([
  {
    //parent elements
    // here "/" shows "<Layout />" 
    path: "/",  //on this postition 
    element: <Layout />,  //go here 
    // children
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path:"contact",
        element: <Contact />
      },
      {
        path: "cocktails",
        element: <Cocktails />,
        loader: cocktailsLoader
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
