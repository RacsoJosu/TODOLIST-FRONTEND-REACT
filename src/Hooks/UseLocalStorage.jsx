import { useEffect, useState } from "react"

function useLocalStorage(itemName, initialValue){
  
  const [item, setItem]= useState(initialValue);
  const [isLoading, setIsLoading] = useState(true)  
  const [isError, setIsError] = useState(false)  
  
  
  useEffect(()=>{

    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName)
     
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
      }else{
        
        setItem(JSON.parse(localStorageItem))
      }
  
      setIsLoading(false)
        
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
        
      }
      


    }, 2000)
    
  },[initialValue, itemName])
  
  const saveItems = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)

  }
  return [item, saveItems, isLoading, isError]


}



export {useLocalStorage}