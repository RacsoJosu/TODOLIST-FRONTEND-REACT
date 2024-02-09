import { useContext } from "react"
import {PlusCircleFill} from "react-bootstrap-icons"
import { todoContext } from "../../Context"
const AddTodo = ()=>{
    const {setIsOpen, isOpen} = useContext(todoContext)
    
    return (
        <div className="d-flex flex-row-reverse ">
            <button onClick={ ()=> setIsOpen(!isOpen) } id="button" className="btn btn-lg btn-primary d-flex justify-content-center align-items-center me-4 fw-bold  " >
                Agregar Tarea <PlusCircleFill  size={30} 
                className="btn-outline-primary m-2 "/>
            </button>

        </div>
    )
}

export {AddTodo}