import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Messaggio from "./Message";
import Hello from "./Hello";

function App() {
  return (
    <>
      <Hello />
      <Hello />
      <Messaggio />;
    </>
  );
}

export default App;
