import {useState} from 'react'
import {useTodo} from "../context/Index.js"

// i gotta crete a state here which will hold the 

function TodoForm() {

  const [todoMessage, setTodoMessage] = useState("")
  const {addTodoItem} = useTodo()

  const add = (e) => {
    e.preventDefault()
    if(!todoMessage) return

    addTodoItem(setTodoMessage)

    // make the input field empty
    setTodoMessage("")     

  }


  return (
    <form
    onSubmit={add}
    className="border p-4 flex">
      <input
      
      type="text" 
      placeholder='write something here'
      value={todoMessage}
      onChange={(e) => setTodoMessage(e.target.value)}
      className="bg-red-400 px-4 py-2 border border-gray-700 w-full rounded-l-lg outline-none " />
      <button 
      className='border-r-lg rounded-r-lg px-2 bg-green-900 text-white cursor-pointer shrink-0'
      type="submit">
        Add
      </button>
    </form>
  )
}

export default TodoForm