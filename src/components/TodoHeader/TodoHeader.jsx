import {Container} from "react-bootstrap"
import React from "react"
const TodoHeader = ({children, loading})=>{
   
    
    return (
        <>
    
        <Container as={"header"} >{React.Children.toArray(children).map((child)=> React.cloneElement(child, {loading})) }</Container>
           
        </>

        
    
        
    )
}

export {TodoHeader}