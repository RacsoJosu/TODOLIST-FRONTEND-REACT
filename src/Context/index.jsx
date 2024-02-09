import { createContext, useState, } from "react"
import { useLocalStorage } from "../Hooks/UseLocalStorage";

export const todoContext = createContext()

export function TodoProvider({children}){
    const [todos,saveTodos, isLoading, isError] = useLocalStorage('TODOS_V1', [])
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false)
    const completedTodos = todos.filter((todo)=> todo.completed === true)
    const searchedTodos = todos.filter((todo)=> todo.title.toLowerCase().match(searchValue.toLowerCase()))
   
  
    const completeTodos = (title)=>{
      const newTodos = [...todos];
      const indexTodo = newTodos.findIndex((todo)=> todo.title == title)
      newTodos[indexTodo].completed=true;
      saveTodos(newTodos)
  
  
  
  
    }
  
    
    const deleteTodos = (title)=>{
      const newTodos = [...todos];
      const indexTodo = newTodos.findIndex((todo)=> todo.title == title)
      // delete newTodos[indexTodo] una forma para borrar
      newTodos.splice(indexTodo, 1)
      saveTodos(newTodos)
  
  
  
    }
    const addTodo = (title)=>{
      const newTodos = [...todos];
      newTodos.push({title,completed:false})
      saveTodos(newTodos)
  
  
  
    }
  
    
    
    const totalTodos = todos.length
   
  
    return (
        <>
        <todoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchedTodos,
            isLoading,
            isError,
            setSearchValue,
            completeTodos,
            deleteTodos,
            isOpen, 
            setIsOpen,
            addTodo

        }}>
            {children}

        </todoContext.Provider>
        
        </>

    )
}

