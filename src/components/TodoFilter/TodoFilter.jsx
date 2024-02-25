
import {FormControl} from "react-bootstrap"


const TodoFilter = ({onSearch, loading})=>{
    
    
    
    

    

    return (

     <FormControl disabled={loading} onChange={(event)=> onSearch(event.target.value)} id="filter"className=" d-block text-center mx-auto  form-control form-control-lg my-3 w-50 border-3 todoSearch"
     type="text"
     placeholder="Buscar Tarea"
     aria-label=".form-control-lg tarea"
     style={{ backgroundColor: '#fff' }}></FormControl> 
    )
}

export {TodoFilter}