import { Container } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
const TodoList = ({children,render,error,loading,searchedTodos, onLoading, onError, onEmpty, onSearch, searchValue, totalTodos})=>{
    const renderFunc = children || render
    

    
    return (
        <>
        <Container>
            
            <Container className="d-flex flex-column  m-2 bg-white border-light shadow-sm containerCustom"  >       
                {loading && onLoading()}
                {error && onError()}
                {(!loading && !searchedTodos?.length && searchValue!= "")  && onSearch(searchValue) }
                {(!loading && !totalTodos) && onEmpty()}
                {searchedTodos?.map(renderFunc)}

               
            

            </Container >

        </Container>
        
        </>
    )
}

export {TodoList}