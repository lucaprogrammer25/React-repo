import useCounter from "./useCounter"

const HookCounter = ({initialValue = 0}) => {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
        </>
    )
}

export default HookCounter