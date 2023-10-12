import { useState } from "react"

const TodoList = () => {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAddItem = () => {
        if (inputValue !== '') {
          setItems([...items, inputValue]);
          setInputValue('')
        }
    }

    const handleResetItems = () => {
        setItems([])
    }
    
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Add new element"/>
      <button onClick={handleAddItem}>Add Element</button>
      <button type="reset" onClick={handleResetItems}>Reset</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;