import { useState, useEffect } from "react";
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

    useEffect(() => {
        console.log(`The value of the counter is ${count}`)

    }, [count])
    
    return (
        <div style={{
            backgroundColor:"green",
            borderRadius:"10px",
            width:"fit-content"
           }}>
        <CounterDisplay content={count}/>
        <button onClick={handleCounterIncrement}>Click me for increment!</button>
        <button onClick={handleCounterDecrement}>Click me for decrement!</button>
        <button onClick={handleCounterReset}>Click me for reset number!</button>
        </div>
    )
}

export default Counter;