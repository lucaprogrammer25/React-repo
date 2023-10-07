import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({initialValue, incrementAmount, decrementAmount}) => {
    const [count, setCount] = useState(initialValue)

    const handleCounterIncrement = () => {
        setCount((count) => {
            return count + incrementAmount
        })
    }

    const handleCounterDecrement = () => {
        setCount((count) => {
            return count - decrementAmount
        })
    }

    const handleCounterReset = () => {
        setCount(initialValue)
    }
    return (
        <>
        <CounterDisplay content={count}/>
        <button onClick={handleCounterIncrement}>Click me for increment!</button>
        <button onClick={handleCounterDecrement}>Click me for decrement!</button>
        <button onClick={handleCounterReset}>Click me for reset number!</button>
        </>
    )
}

export default Counter;

