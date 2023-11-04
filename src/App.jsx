import {Routes, Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import Counter from "./Counter";

function App() {
  return (
    <>
    <nav className="flex-row gap-10" >
      <Link to="/" element={<Welcome/>}>Home</Link>
      <Link to="/users/:username" element={<ShowGithubUser/>}>ShowGithubUser</Link>
      <Link to="/counter" element={<Counter/>}>Counter</Link>
    </nav>
    <Routes>
       <Route exact path="/" element={<Welcome name="Luca"/>} />
       <Route path="/users/:username" element={<ShowGithubUser/>}/>
       <Route path="/counter" element={<Counter initialValue={0} incrementAmount={1} decrementAmount={1} />}/>
    </Routes>
    </>
  );
}

export default App;
