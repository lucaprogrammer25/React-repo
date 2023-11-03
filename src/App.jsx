import {Routes, Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import NotFound from "./NotFound";

function App() {
  return (
    <>
    <nav className="flex-row gap-10" >
      <Link to="/" element={<Welcome/>}>Home</Link>
      <Link to="/users/:username" element={<ShowGithubUser/>}>ShowGithubUser</Link>
      <Link to="/counter" element={<Counter/>}>Counter</Link>
    </nav>
    <Routes>
       <Route path="*" element={<NotFound />} />
       <Route exact path="/" element={<Welcome name="Luca"/>} />
       <Route path="/users/:username" element={<ShowGithubUser/>}/>
       <Route path="/counter" element={<Counter/>}/>
    </Routes>
    </>
  );
}

export default App;
