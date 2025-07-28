import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  
  const [todoMsg, settodoMsg] = useState(todo.todoMessage)

  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const toggleComplet = () => {
    toggleComplete(todo.id)
  }
  
  const editTodo = () => {
    // if it was an objext instead of string
    // updateTodo(todo.id, {...todo,  todoMessage: todoMsg} )
    updateTodo(todo.id, todoMsg)
    setIsTodoEditable(false)
  }
    

    return (
        <div
            className={`font-mono flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm  duration-300   ${
                todo.completed ? "bg-teal-900 text-amber-50" : "bg-[#928093] text-black"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleComplet}
            />
            <input
                type="text"
                className={`font-mono border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => settodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
