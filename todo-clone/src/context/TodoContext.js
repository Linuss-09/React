import { createContext, useContext } from "react";


export const TodoContext = createContext({
    // todos: arry to hold taks objects basically
    todoArr: [
        {
            id: 1,
            todoMessage: "what the fuck",
            completed: false
        }
    ],

    // fuccntions to execute and work with this todoArr
    // just write the names here we will define the funtionality in app.jsx
    addTodoItem: (todoMessage) => {},
    updateTodoItem: (id,todoMessage) => {},
    deleteTodoItem: (id) => {},
    // coz you can access inside things of an todoItem somehow idk xd 
    toggleTodoItem: (id) => {}
})

// crete a hook (basicalay a mfkin fuctin) to avoid so much importing shit 
export const useTodo = () => {
    return useContext(TodoContext)
}

// also create a provider please
export const TodoProvider = TodoContext.Provider