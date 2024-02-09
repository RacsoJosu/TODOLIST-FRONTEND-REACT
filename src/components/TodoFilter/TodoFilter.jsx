import { useContext } from "react"
import {FormControl} from "react-bootstrap"
import { todoContext } from "../../Context"

const TodoFilter = ()=>{
    const context = useContext(todoContext)
    
    
    

    

    return (

     <FormControl onChange={(event)=> context.setSearchValue(event.target.value)} className="filter form-control form-control-lg my-3 w-50 border-3"
     type="text"
     placeholder="Buscar Tarea"
     aria-label=".form-control-lg tarea"
     style={{ backgroundColor: '#fff' }}></FormControl> 
    )
}

export {TodoFilter}