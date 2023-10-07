import { useState } from "react";

const Counter = ({initialValue, incrementAmount}) => {
    const [count, setCount] = useState(initialValue)

    const handleCounterIncrement = () => {
        setCount((count) => {
            return count + incrementAmount
        })
    }
    return (
        <>
        <h2>Counter:{count}</h2>
        <button onClick={handleCounterIncrement}>Click me!</button>
        </>
    )
}

export default Counter;

// Il parametro deve essere una funzione così da poter essere aggiornato in modo asyncrono.