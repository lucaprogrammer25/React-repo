import { useState } from "react"
import { Welcome } from "./src/Welcome";

const InteractiveWelcome = () => {
    const [name, setName] = useState('')

    const handleNameInputChange = (event) => {
       const value = event.target.value;
       setName(value)
    }

    return (
        <>
         <input type="text" value={name} onChange={handleNameInputChange} />
         <Welcome name={name}/>
        </>
    )
}

export default InteractiveWelcome