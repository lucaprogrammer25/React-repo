import { useState } from "react"

const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const handleCounterIncrement = () => {
        setCounter((c) => c + 1 )
    }

    const handleCounterDecrement = () => {
        setCounter((c) => c - 1)
    }

    const handlecCounterReset = () => {
        setCounter(initialValue)
    }

    return(
        {
            counter: counter,
            onIncrement: handleCounterIncrement,
            onDecrement: handleCounterDecrement,
            onReset: handlecCounterReset,
        }
    )
}

export default useCounter