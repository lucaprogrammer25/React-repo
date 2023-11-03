import {Routes, Route} from "react-router-dom"
import GitHubUser from "./GitHubUser";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  return (
    <Routes>
       <Route exact path="/users/:username" element={<ShowGithubUser/>} />
    </Routes>
  );
}

export default App;
