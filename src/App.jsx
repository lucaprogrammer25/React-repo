import {Routes, Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserList";


const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/users'>GithubUser</Link>
      </nav>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Welcome name="User"/>}/>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/users" element={<GithubUserList/>}>
        <Route index element={<h2>Aggiungi un utente e selezionalo</h2>}/>
          <Route path=":username" element={<ShowGithubUser/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
