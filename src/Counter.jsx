import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCounterIncrement = () => {
    setCount((count) => {
      return count + 1;
    });
  };
  return (
    <>
      <h2>Counter:{count}</h2>
      <button onClick={handleCounterIncrement}>Click me!</button>
    </>
  );
};

export default Counter;

// Il parametro deve essere una funzione così da poter essere aggiornato in modo asyncrono.
