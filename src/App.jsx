import { useState } from "react"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("...")
  const [todos, setTodos] = useState([])
    
  function handlerSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos, {id: crypto.randomUUID, title: newItem,
        completed: false},
      ]
    })
  }

  return (
    <>
    <form onSubmit={handlerSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
        value = {newItem} 
        onChange={ e =>setNewItem(e.target.value)} 
        type="text" 
        id="item" 
      />
      </div>
      <button className="btn">Add</button>
    </form>
  <h1 className="header">TodoList</h1>
  <ul className="list">
    <li>
      <label htmlFor="">
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>

    <li>
      <label htmlFor="">
        <input type="checkbox" />
        Item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
} 