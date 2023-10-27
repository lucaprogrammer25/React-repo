import { Outlet, Route, Routes } from "react-router-dom";
import Counter from "./Counter";

function App() {
  return (
    <Routes>
      <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1} decrementAmount={1} />}/>
    </Routes>
   
  )
}

export default App;
