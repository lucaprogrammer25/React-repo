import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Welcome } from "./Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome name="Luca" />} />
      </Routes>
    </>
  );
}

export default App;
