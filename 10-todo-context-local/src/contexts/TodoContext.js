import { createContext, useContext } from "react";

// here in todo contxt we only write the thenames and not the fuctionalities...

// for fucntionality we will use app.jsx and write everything there

export const TodoContext = createContext({
    // today is going to be an arr which has its own id , msgs, completion info and all 
    todos: [
        {
            id: 1,
            todoMessage : "Todo msg",
            completed: false,
        },
    ],
    // 2nd element of object similarly yahan par bhi we are doing the same thing that is only write the name but we decide the functionality later
    addTodo: (todoMessage) => {},

    // updated todo me msg yani todo jayega and id bhi jayega nah liek which elemnt we gotta update
    updateTodo: (id, todoMessage) => {},

    // now we only need id to delete anything 
    deleteTodo: (id) => {},

    toggleComplete: (id) => {}

})

// custom hook
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider