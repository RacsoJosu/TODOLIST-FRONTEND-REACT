import { useContext } from "react"
import { ModalBody, ModalTitle, ModalDialog, ModalHeader,} from "react-bootstrap"
import { createPortal } from "react-dom"
import { todoContext } from "../../Context"
import { TodoForm } from "../TodoForm"

export const ModalTodo = ()=>{
    const {setIsOpen, isOpen} = useContext(todoContext)

    
    const handleDoubleClick = (event)=>{
        if (event.target.id =="bg") {
            setIsOpen(!isOpen)
            
        }
    }
  
    return createPortal(
        
                <div id="bg" onDoubleClick={handleDoubleClick} className="modal d-flex justify-content-center align-items-center bg-black  bg-opacity-25  "
        
                >

                    
                     
                    <ModalDialog className=" w-100 ">
                        
                        <ModalHeader>
                            <ModalTitle>Escribe una nueva tarea :D</ModalTitle>

                        </ModalHeader>
                        <ModalBody>
                            <TodoForm/>
                        </ModalBody>
        
                            
                            


                        
                    </ModalDialog>
                </div>
            
        , document.getElementById("modal"))

        
}