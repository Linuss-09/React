import Chai from './chai.jsx'



function App() {
  const username = "Jon Snow"
  return (
    <>
      <Chai/>
      {/* anything isnide {} will be treated as variable and its value can directly be access */}
      {/* also one mroe important thing is that yahan yani ki JSX me you can only wrtie "Evalutated expression" that means aap sirf final epression hi likh skte hain yahan you cant write actual js futnion or if/else or loops or soemthing like that yahan par sirf value hi allowed hai */}
      <h1>hola comos estas {username} </h1>
      <p>tell me that you love me</p>    
    </>

  )
}

export default App
