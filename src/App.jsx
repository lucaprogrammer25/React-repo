import {Routes, Route, Link} from "react-router-dom"
import ShowGithubUser from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserList";


const App = () => {
  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/users'>GithubUser</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="User" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
