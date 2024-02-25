
import { useState } from "react"
import { ModalFooter } from "react-bootstrap"

import {SaveFill, XCircleFill} from "react-bootstrap-icons"


// eslint-disable-next-line react/prop-types
const TodoForm = ({setIsOpen, addTodo})=>{

    const [newTodo, setNewTodo] = useState("")
    const [isError, setIsError] = useState(true)

   
    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(newTodo.split(" ").length)
            if (newTodo.split(" ").length < 2 ) {   
                setIsError(true)
                       
            }else{
                addTodo(newTodo)
                setNewTodo("");
                setIsError(false);
            }
        
        }}>
            <div className="mb-3">
                <label htmlFor="" className="form-label fs-5  fw-lighter ">Ingrese su tarea: </label>
                <textarea cols={5} rows={7} value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className="form-control" ></textarea>
                {isError && (<div className="invalid-feedback"> Por favor, ingresa más de una palabra</div>)}
            </div>
            <ModalFooter>
                <button className=" btn btn-primary ">Guardar<SaveFill className="ms-2" /></button>
                <button onClick={()=> setIsOpen(false)} className="btn btn-danger">Cerrar <XCircleFill/></button>

            </ModalFooter>
        
        </form>
    )
}

export {TodoForm}