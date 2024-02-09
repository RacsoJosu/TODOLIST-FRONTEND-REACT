import { Container } from "react-bootstrap"
import { TodoCard } from "./TodoCard/TodoCard"
import { AddTodo } from "../AddTodo/AddTodo"
import { Loading } from "../Loading/Loading"
import { todoContext } from "../../Context"
import { useContext } from "react"
import { ModalTodo } from "../ModalTodo"



const TodoList = ()=>{
    const context = useContext(todoContext)

    
    return (
        <>
        <Container>
            <Container className="d-flex justify-content-between  ">
                <h1 className=" subtitles  m-2 mt-3">Lista de Tareas</h1>
                <AddTodo/>
                {context.isOpen && <ModalTodo/> }
            </Container>
            <Container className="d-flex flex-column  m-2 bg-white border-light shadow-sm containerCustom"  >
                {context.isLoading && <Loading/>}
                {context.isError && <p>Lo siento algo salio mal :c</p>}
                {(!context.isLoading && context.searchedTodos.length < 1 ) && <div className=" d-flex flex-column justify-content-center containerCustom align-items-center  "> <p className="fs-3 fw-bold gradient-text">AGREGA TU PRIMER TAREA</p> </div>}
                {context.searchedTodos?.map((todo)=>{
                    
                    return <TodoCard key={todo.title} todo={todo}/>})
                }
            

            </Container >

        </Container>
        
        </>
    )
}

export {TodoList}