import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const GithubUserList = () => {
  const [listGithub, setListGithub] = useState([]);
  const [username, setUsername] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const existingIndex = listGithub.indexOf(username);
  
    if (existingIndex === -1) {
      setListGithub(d => [...d, username]);
    }
    setUsername('');
  }
  

  return (
    <>
      <div >
        <form onSubmit={handleSubmitForm}>
          <label >insert username</label>
          <input type="text" name="username" value={username} onChange={handleUsername} />
          <button disabled={username.length <= 0} type="submit">Submit</button>
        </form>
        <ul>
          {
            listGithub.length > 0 && (
              listGithub.map((username, index) => (
                <li key={index}>
                  <Link to={`/users/${username}`}>{username}</Link>
                </li>
              ))
            )
          }
        </ul>

        <Outlet />
      </div>
    </>

  )
}

export default GithubUserList;