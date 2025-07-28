import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {

  const [todoMessage, settodoMessage] = useState("")
  // i need fucntionality of addtodo hence use useTodo hook 

  const {addTodo} = useTodo()

  const add = (e) => {
    e.preventDefault()

    if(!todoMessage) return

    // if you had taken object instead of string
    // addTodo({todo , completed: false})
    addTodo(todoMessage)
    settodoMessage("")

  }

    return (
        <form
        onSubmit={add}
        className="flex">
            <input
                   type="text"
                placeholder="Write Todo..."
             className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
             value={todoMessage}
            //  agar value me koi bhi change aaye toh u gotta do this thing that is update the state with the new value 
             onChange={(e) => settodoMessage(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

