
const TodoCounter = ({completedTodos, totalTodos, loading})=>{

    return (
        <>
            <h1 id="mainTitle"  className={`${loading? "titleDisabled": ""} gradient-text titles text-center  justify-content-center align-content-center  align-items-center   `}>Has completado {completedTodos} de {totalTodos} Tareas</h1>
       
        
        </>

        
    
        
    )
}

export {TodoCounter}