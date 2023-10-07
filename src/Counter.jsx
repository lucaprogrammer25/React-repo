import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({initialValue, incrementAmount}) => {
    const [count, setCount] = useState(initialValue)

    const handleCounterIncrement = () => {
        setCount((count) => {
            return count + incrementAmount
        })
    }
    return (
        <>
        <CounterDisplay content={count}/>
        <button onClick={handleCounterIncrement}>Click me!</button>
        </>
    )
}

export default Counter;

