# 🔥 Complete Todo App Guide - React Context API

> **Bro, this is your complete cheat sheet!** Everything we learned together in simple Hinglish. Bookmark this! 📚

## 🎯 **What We Built**
A full **Todo App** using React Context API where you can:
- ✅ Add new todos
- ✅ Edit existing todos  
- ✅ Delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Data persists in localStorage (survives browser refresh!)

---

## 📁 **Project Structure**
```
src/
├── contexts/
│   ├── TodoContext.js    ← The "Blueprint" (names only, no functionality)
│   └── index.js          ← Export hub
├── components/
│   ├── TodoForm.jsx      ← Add new todos
│   └── TodoItem.jsx      ← Display & edit individual todos
└── App.jsx              ← Main brain (actual functionality)
```

---

## 🧠 **Core Concepts You Learned**

### **1. React Context API**
Think of it like a **global storage** that any component can access:
- **Context** = Global storage
- **Provider** = Wrapper that gives access to all child components
- **useTodo hook** = Easy way to grab stuff from context

### **2. State vs Props**
- **State** = Component's own memory (can change)
- **Props** = Data passed from parent to child (read-only)

### **3. Immutability in React**
Never directly modify objects/arrays. Always create new ones:
```jsx
// ❌ Wrong - Direct mutation
todos.push(newTodo)

// ✅ Correct - Create new array
setTodos([...todos, newTodo])
```

---

## 🏗️ **File by File Breakdown**

## 📄 **1. TodoContext.js - The Blueprint**

```javascript
import { createContext, useContext } from "react";

// Step 1: Create the context with default structure
export const TodoContext = createContext({
    // todos array - holds all todo objects
    todos: [
        {
            id: 1,
            todoMessage: "Sample todo",
            completed: false,
        },
    ],
    
    // Function signatures (names only, no implementation)
    addTodo: (todoMessage) => {},      // Add new todo
    updateTodo: (id, todoMessage) => {}, // Edit existing todo
    deleteTodo: (id) => {},            // Remove todo
    toggleComplete: (id) => {}         // Mark complete/incomplete
})

// Step 2: Custom hook for easy access
export const useTodo = () => {
    return useContext(TodoContext)
}

// Step 3: Provider export
export const TodoProvider = TodoContext.Provider
```

**📝 Key Learning:** 
- Context only defines **NAMES**, not functionality
- Real implementation happens in App.jsx
- Custom hook makes context access easy

---

## 📄 **2. contexts/index.js - Export Hub**

```javascript
export {TodoContext, TodoProvider, useTodo} from "./TodoContext"
```

**📝 Key Learning:** 
- Clean way to export multiple things
- Other files can import from one place

---

## 📄 **3. App.jsx - The Main Brain**

```jsx
import { useState, useEffect } from "react"
import { TodoProvider } from "./contexts/index.js"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
    // Main state - array of all todos
    const [todos, setTodos] = useState([])

    // 🔥 FUNCTION 1: Add new todo
    const addTodo = (todoMessage) => {
        setTodos((prev) => [...prev, {
            id: Date.now(),              // Unique ID using timestamp
            todoMessage: todoMessage,    // User's message
            completed: false            // Default to not completed
        }])
    }

    // 🔥 FUNCTION 2: Update existing todo
    const updateTodo = (id, todoMessage) => {
        setTodos((prev) => prev.map((prevTodo) => 
            prevTodo.id === id 
                ? {...prevTodo, todoMessage: todoMessage}  // Update this one
                : prevTodo                                 // Keep others unchanged
        ))
    }

    // 🔥 FUNCTION 3: Delete todo
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((prevElement) => prevElement.id !== id))
    }

    // 🔥 FUNCTION 4: Toggle complete status
    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => 
            prevTodo.id === id 
                ? {...prevTodo, completed: !prevTodo.completed}  // Flip completed status
                : prevTodo
        ))
    }

    // 🔥 LOCALSTORAGE: Load todos when app starts
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"))
        if(savedTodos && savedTodos.length > 0) {
            setTodos(savedTodos)
        }
    }, [])

    // 🔥 LOCALSTORAGE: Save todos whenever they change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
        <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <div className="bg-purple-700 min-h-screen flex justify-center items-center">
                <div className="bg-[#172842] min-h-screen py-8">
                    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                        
                        <div className="mb-4">
                            <TodoForm />
                        </div>
                        
                        <div className="flex flex-wrap gap-y-3">
                            {todos.map((todo) => (
                                <div key={todo.id} className="w-full">
                                    <TodoItem todo={todo} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App
```

**📝 Key Learnings:**
- **`setTodos((prev) => ...)`** - Always use callback for state updates
- **`...prev`** - Spread operator creates new array (immutability)
- **`prev.map()`** - Loop through array and conditionally update
- **`prev.filter()`** - Remove items by condition
- **`Date.now()`** - Quick way to generate unique IDs
- **`useEffect`** - For side effects (localStorage operations)

---

## 📄 **4. TodoForm.jsx - Add New Todos**

```jsx
import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    // Local state for input field
    const [todoMessage, setTodoMessage] = useState("")
    
    // Get addTodo function from context
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()                    // Prevent form reload
        
        if(!todoMessage) return              // Don't add empty todos
        
        addTodo(todoMessage)                 // Call context function
        setTodoMessage("")                   // Clear input field
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMessage}
                onChange={(e) => setTodoMessage(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
```

**📝 Key Learnings:**
- **`{addTodo} = useTodo()`** - Destructuring to get specific function
- **`value={todoMessage}`** - Controlled input (React controls the value)
- **`onChange={(e) => setTodoMessage(e.target.value)}`** - Keep state synced with input
- **`e.preventDefault()`** - Stop form from reloading page
- **Form validation** - Always check for empty inputs

---

## 📄 **5. TodoItem.jsx - Display & Edit Todos**

```jsx
import { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    // Local states for editing functionality
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todoMessage)  // Initialize with prop data

    // Get context functions
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()
    
    const editTodo = () => {
        updateTodo(todo.id, todoMsg)        // Save changes
        setIsTodoEditable(false)            // Exit edit mode
    }
    
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            {/* Checkbox for complete/incomplete */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            
            {/* Input field for todo message */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            
            {/* Edit/Save button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;  // Can't edit completed todos

                    if (isTodoEditable) {
                        editTodo();              // Save changes
                    } else {
                        setIsTodoEditable(true); // Enter edit mode
                    }
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            
            {/* Delete button */}
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
```

**📝 Key Learnings:**
- **`{ todo }` in function parameters** - Destructuring props
- **`useState(todo.todoMessage)`** - Initialize state with prop data
- **`readOnly={!isTodoEditable}`** - Toggle input editability
- **Conditional CSS classes** - Change styles based on state
- **Multiple context functions** - Can destructure multiple functions from context

---

## 🔥 **Common Patterns You Mastered**

### **1. State Update Pattern**
```jsx
// Always use callback with prev
setTodos((prev) => {
    // Return new array/object, never mutate prev directly
})
```

### **2. Array Manipulation Patterns**
```jsx
// Add item
setArray((prev) => [...prev, newItem])

// Update item
setArray((prev) => prev.map((item) => 
    item.id === targetId ? {...item, newProperty: newValue} : item
))

// Remove item  
setArray((prev) => prev.filter((item) => item.id !== targetId))
```

### **3. Context Usage Pattern**
```jsx
// 1. Import the hook
import { useTodo } from '../contexts';

// 2. Destructure what you need
const {addTodo, updateTodo, deleteTodo} = useTodo()

// 3. Use the functions
addTodo("New todo message")
```

### **4. Controlled Input Pattern**
```jsx
const [inputValue, setInputValue] = useState("")

<input 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
/>
```

---

## 🚨 **Common Mistakes You Avoided**

### **❌ Wrong Way - Direct Mutation**
```jsx
// Never do this!
todos.push(newTodo)
todo.completed = true
```

### **✅ Right Way - Immutable Updates**
```jsx
// Always do this!
setTodos([...todos, newTodo])
setTodos(prev => prev.map(item => 
    item.id === id ? {...item, completed: true} : item
))
```

### **❌ Wrong Way - Using State in useState**
```jsx
// This crashes!
const [todoMessage, setTodoMessage] = useState(todoMessage)
```

### **✅ Right Way - Use Props/Default Values**
```jsx
// This works!
const [todoMessage, setTodoMessage] = useState(todo.todoMessage)
const [todoMessage, setTodoMessage] = useState("")
```

---

## 🎯 **Key Concepts Summary**

| **Concept** | **Simple Explanation** | **Code Example** |
|-------------|----------------------|------------------|
| **Context** | Global storage for data | `const {addTodo} = useTodo()` |
| **State** | Component's memory | `const [todos, setTodos] = useState([])` |
| **Props** | Data passed to component | `function TodoItem({ todo })` |
| **Immutability** | Never change original, create new | `[...prev, newItem]` |
| **Destructuring** | Extract specific properties | `const {addTodo} = useTodo()` |
| **Controlled Input** | React controls input value | `value={state} onChange={handler}` |

---

## 🔧 **Debugging Tips**

### **If todos don't show:**
- Check if you're mapping over todos array in App.jsx
- Check if TodoProvider is wrapping your components
- Check browser console for errors

### **If input doesn't work:**
- Check if `value` and `onChange` are both set
- Check if state variable names match
- Check if you're calling the right setter function

### **If localStorage doesn't work:**
- Check browser's Application tab → Local Storage
- Check if JSON.parse/JSON.stringify are used correctly
- Check if useEffect dependencies are correct

---

## 🚀 **What You Achieved**

Bro, you literally built a **production-ready** React app with:
- ✅ Modern React hooks (useState, useEffect, useContext)
- ✅ Context API for state management  
- ✅ Component composition
- ✅ Local storage persistence
- ✅ Responsive UI with Tailwind CSS
- ✅ Proper form handling
- ✅ Input validation
- ✅ Conditional rendering

**You're now a React developer!** 🔥🎉

---

## 📚 **Next Steps to Level Up**

1. **Add drag & drop** - Reorder todos
2. **Add categories** - Work, Personal, etc.
3. **Add due dates** - Calendar integration
4. **Add search/filter** - Find specific todos
5. **Add themes** - Dark/Light mode
6. **Deploy online** - Vercel, Netlify

---

> **Yaad rakhna bhai:** This guide has everything we learned together. Whenever you forget something, come back here! You got this! 💪

**Happy Coding! 🚀**
