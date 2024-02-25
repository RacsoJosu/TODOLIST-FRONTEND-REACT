
import { TodoHeader } from '../components/TodoHeader'
import { TodoList } from '../components/TodoList/TodoList'
import { Col, Container, Row } from 'react-bootstrap'
import {TodoCounter} from "../components/TodoCounter"
import {TodoFilter} from "../components/TodoFilter"
import { useTodos } from '../Hooks/useTodos'
import { Loading } from '../components/Loading/Loading'
import { TodoCard } from '../components/TodoList/TodoCard/TodoCard'
import {AddTodo} from '../components/AddTodo'
import {ModalTodo} from '../components/ModalTodo'
import { TodoForm } from "../components/TodoForm"
import '../App.scss'
import { Error } from '../components/Erro'
import {ContainerEmpty} from '../components/ContainerEmpty'

function App() {
  

  const {
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
    searchValue,
    addTodo} = useTodos()
  



  return (
    <>
      <Container >
        <Row>
          
          <Col className=' main container  py-4 px-5 mx-auto d-flex  flex-column  align-items-center justify-content-center  align-content-center '>
            <TodoHeader loading={isLoading}>
              <TodoCounter completedTodos={completedTodos.length} totalTodos={totalTodos}  />
              <TodoFilter onSearch={setSearchValue}/>
            </TodoHeader>

            {/* Titulo y boton */}
            <Container className="d-flex justify-content-between  align-items-center  ">
                <Container>
                  <h1 className=" subtitles fw-semibold justify-content-center   m-2 mt-3">Lista de Tareas</h1>
                </Container>

                <AddTodo setIsOpen={setIsOpen} isOpen={isOpen}/>
                {isOpen && 
                <ModalTodo setIsOpen={setIsOpen} isOpen={isOpen}>
                  <TodoForm setIsOpen={setIsOpen} addTodo={addTodo}/>
                </ModalTodo> 
                }
            </Container>
            
            <TodoList 
            error={isError}
            loading={isLoading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            onLoading={()=> <Loading/>}
            onError={()=> <Error/>}
            onEmpty={()=> <ContainerEmpty text="Agrega tu primer Tarea"/>}
            onSearch= {(searchTodo)=> <ContainerEmpty text={`No existen resultados para ${searchTodo}`}/>}
            searchValue = {searchValue}
            // render={(todo)=> <TodoCard key={todo.title} todo={todo} completeTodos={completeTodos} 
            
            // deleteTodos={deleteTodos}/>}
             >
              {/* Render functions */}
              {(todo)=> <TodoCard key={todo.title} todo={todo} completeTodos={completeTodos} deleteTodos={deleteTodos}/>}

            </TodoList>
            
            
            
          </Col>
         

        </Row>
        
      
      </Container>
      
      
    </>
  )
}

export {App}
