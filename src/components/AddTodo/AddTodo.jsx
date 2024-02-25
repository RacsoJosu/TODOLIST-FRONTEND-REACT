
import {PlusCircleFill} from "react-bootstrap-icons"

// eslint-disable-next-line react/prop-types
const AddTodo = ({setIsOpen, isOpen})=>{
    return (
        <div className="d-flex flex-row-reverse h-75 w-75    ">

            <button onClick={ ()=> setIsOpen(!isOpen) } id="button" className="btn  btn-lg  btn-primary d-flex   justify-content-center align-items-center me-4 fw-bold  " >
                Agregar Tarea <PlusCircleFill  size={30} 
                className="btn-outline-primary m-2 "/>
            </button>

        </div>
    )
}

export {AddTodo}