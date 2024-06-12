import { useState } from "react"

export default function ButtonState(){
    const [title, setTitle] = useState(" - ")
    const [cont, setCont] = useState(0)
  
    const updateTitleClicked = () => {
      setTitle("Ok, titulu atualizado")
    }
  
    const updateCountClicked = () => {
      setCont(cont + 1)
    }
  
    return (
      <div>
        <p>Title: {title}</p>
        <p>Counter: {cont}</p>
        <button onClick={updateTitleClicked}>Update Title</button>
        <button onClick={updateCountClicked}>Update Counter: </button>
      </div>
    )
  }
  