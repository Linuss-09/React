import { useState, useEffect } from "react"
import { TodoProvider } from "./context/Index.js"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem.jsx"


function App() {
  // now actually create all that stuff which you created there
  const [todoArr, setTodoArr] = useState([])

  // wrtie those mfkin fucntions now  
  const addTodoItem = (todoMessage) => {
    setTodoArr((prev) => [...prev, {
      id:Date.now(),
      todoMessage: todoMessage,
      completed: false
    }] )
  }

  const updateTodoItem = (id, todoMessage) => {
    setTodoArr((prev) => prev.map((prevTodoItem) => 
      prevTodoItem.id === id ?   //check this codn
     {...prevTodoItem, todoMessage: todoMessage}  //if true then spread the item and change the msg
      : prevTodoItem ))  //else whi item ko as its is rakh do 
  }

  const deleteTodoItem = (id) => {
    setTodoArr((prev) => prev.filter((prevTodoItem) => prevTodoItem.id !== id))
  }

  const toggleTodoItem = (id) => {
    setTodoArr((prev) => prev.map((prevTodoItem) => 
      prevTodoItem.id === id ?
      {...prevTodoItem, completed: !prevTodoItem.completed}
      :prevTodoItem
  ))
  }

  // now work on local storage:-
  // golden rule is to always get the things first so put everything inside useeffect 
  useEffect(() => {

    const savedTodo = JSON.parse(localStorage.getItem("todo"))

    if(savedTodo && savedTodo.length > 0) {
      setTodoArr(savedTodo)
    }
  }, [])

  // to set data to local storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoArr))
  }, [todoArr])
  


  return (
    <TodoProvider value = {{todoArr, addTodoItem, deleteTodoItem, updateTodoItem, toggleTodoItem}} >
      {/* body kinda div */}
      <div className="min-h-screen w-full bg-blue-300 flex justify-center items-center ">

        
        {/* todoForm */}
        <div className="border p-1">
          <TodoForm/>
        </div>

        {/* todoItem */}
        <div className="">
          {todoArr.map((TodoItem) => {
            <div key={TodoItem.id} className="">
              <TodoItem todoItem = {TodoItem} />
            </div>
          })}
        </div>

      </div>
    </TodoProvider>
  )
}

export default App
