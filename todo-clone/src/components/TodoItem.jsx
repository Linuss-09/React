import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [todoMsg, setTodoMsg] = useState(todo.todoMessage)

    // cotext ke function bulao 
    const {updateTodoItem, deleteTodoItem, toggleTodoItem} = useTodo()

    const editTodo = () => {
        updateTodoItem(todo.id, todoMsg)
        // exit edit mode
        setIsTodoEditable(false)
    }

  return (
    <div 
    className=''>


    </div>
  )
}

export default TodoItem