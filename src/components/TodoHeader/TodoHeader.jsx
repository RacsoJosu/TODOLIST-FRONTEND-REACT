import { useContext } from "react"
import { todoContext } from "../../Context"

const TodoHeader = ()=>{
    const context = useContext(todoContext)
    
    return (
        <>
            <h1 className="titles justify-content-center align-content-center  align-items-center  ">Has completado {context.completedTodos.length} de {context.totalTodos} Tareas</h1>
        
        </>

        
    
        
    )
}

export {TodoHeader}