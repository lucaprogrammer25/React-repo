import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



function App() {
  const sum = (a, b) => {
    const result = a + b;
    return result;
  }

  const result = sum(10, 4);

  return <h2>{result}</h2>;
}

export default App;
