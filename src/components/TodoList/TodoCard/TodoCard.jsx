import { useContext, useEffect, useState } from "react"
import { Button, Card, CardBody, Container } from "react-bootstrap"
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons"
import { todoContext } from "../../../Context"

const TodoCard = ({todo})=>{
    const context = useContext(todoContext)
    
    const [isFinished, setIsFinished]= useState(false)

    const stylesFinishedTodo = { Container: "FinishedTodo__container", button: "visually-hidden"}
    useEffect(()=>{
        setIsFinished(todo.completed)

    },[])


    const handleFinishedtodo = ()=>{
        context.completeTodos(todo.title)
        setIsFinished(todo.completed);
    }

    const handleDeleteTodo = ()=>{
        context.deleteTodos(todo.title)

    }

    return (
    <Card className=" m-3  border-light  shadow-lg  " role="button">
        <CardBody className={`${isFinished ? stylesFinishedTodo.Container: ""} d-flex flex-row    align-content-center align-items-center`}>
            
            <Card.Text className="textCard w-100">{todo?.title}</Card.Text>

            
            <Container className="  d-flex flex-row-reverse  ms-2" >
                
                <Button onClick={handleDeleteTodo} className="btn btn-danger btn-lg  d-block d-flex flex-row align-content-center align-items-center fw-bold ms-2   ">Borrar <XCircleFill className="ms-2" size={20}/></Button>
                <Button onClick={handleFinishedtodo} className={`${isFinished ? stylesFinishedTodo.button: ""} btn btn-success btn-lg  d-block d-flex flex-row align-content-center align-items-center fw-bold`}>Hecho <CheckCircleFill className="ms-2" size={20}/></Button>

            </Container>
        </CardBody>

        

    </Card>)
}

export {TodoCard}