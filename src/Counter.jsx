import { useState, useRef, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({initialValue, incrementAmount, decrementAmount}) => {
    const [count, setCount] = useState(initialValue);
    const prevCountRef = useRef(initialValue);
    const ref = useRef("");

    const handleCounterIncrement = () => {
        setCount((count) => count + incrementAmount);
    }

    const handleCounterDecrement = () => {
        setCount((count) => count - decrementAmount);
    }

    const handleCounterReset = () => {
        setCount(initialValue);
    }

    useEffect(() => {
        if (count > prevCountRef.current) {
            ref.current = "su";
        } else if (count < prevCountRef.current) {
            ref.current = "giù";
        }

        if(ref.current !== prevCountRef.current) {
            console.log(ref.current);
        }

        prevCountRef.current = count;
    }, [count]);

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
