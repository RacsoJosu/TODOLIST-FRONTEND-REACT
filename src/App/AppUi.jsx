import { TodoHeader } from '../components/TodoHeader'
import { TodoFilter } from '../components/TodoFilter'
import { TodoList } from '../components/TodoList/TodoList'
import { Col, Container, Row } from 'react-bootstrap'

function AppUi() {
  



  return (
    <>
      <Container >
        <Row>
          {/* <Col>
          
          </Col> */}
          <Col className=' main container  py-4 px-5 mx-auto d-flex  flex-column  align-items-center justify-content-center  align-content-center '>
            <TodoHeader />
            <TodoFilter />
            <TodoList />
            
            
            
          </Col>
         

        </Row>
        
      
      </Container>
      
    </>
  )
}

export default AppUi