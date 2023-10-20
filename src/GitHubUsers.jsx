import React, { useState } from "react";
import useGitHubUser from "./useGitHubUser";
import GitHubUser from "./GitHubUser";


const GitHubUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");
  const { loading, error, fetchUser, data } = useGitHubUser();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsername(searchQuery);
    fetchUser(searchQuery); 
  };

  return (
    <div>
      <h1>Github Users</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Inserisci lo username"/>
        <button type="submit">Invia</button>
      </form>
      {loading && <div>Caricamento...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <GitHubUser data={data} />} 
    </div>
  );
};

export default GitHubUsers;
