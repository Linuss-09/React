import { useEffect, useState } from "react"
import "./contexts/index.js"
import { TodoProvider } from "./contexts/index.js"
import TodoForm from "./components/TodoForm.jsx"
import TodoItem from "./components/TodoItem.jsx"


function App() {

  // here "todos" is actually that arr that contain all the todo objects...
  const [todos, setTodos] = useState([])

  // write down the functionlaity
  // message from user 
  // here todo is a string
  const addTodo = (todoMessage) => {
    // basically take the old arr which is todos and add a new task to it that is totomsg and update the arr and return that updated arr...
    // here todoMessage nahi pass kar skte you gotta pass a whole fking object 
    setTodos((prev) => [...prev, {
      id: Date.now(),
      todoMessage: todoMessage,
      completed: false    
    }])
  }

  // update the fking todo
  const updateTodo = (id, todoMessage) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, todoMessage: todoMessage} : prevTodo ))
    // here prevTodo is basically prev[i] mtlb single element
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevElement) => prevElement.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos( (prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo) )
  }

  // to get the data from localstorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0) {
      setTodos(todos)
    }
  }, [])

  // useefect to set the data into todos
  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos) )
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      {/* here todos is the state and other rest are methods that means they are action */}
     {/* body kinda div */}
        <div className="bg-[#172842] min-h-screen py-8">
                        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                            <div className="mb-4">
                                <TodoForm/>
                            </div>
                            <div className="flex flex-wrap gap-y-3">

                                {/*Loop and Add TodoItem here */}
                                {todos.map((todo) => (
                                  <div 
                                  key={todo.id}
                                  className="w-full">
                                    <TodoItem todo={todo} />
                                  </div>
                                ))}
                            </div>
                        </div>
                    </div>
    </TodoProvider>
  )
}

export default App
