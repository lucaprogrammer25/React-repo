import React, { useState } from "react";
import GitHubUser from "./GitHubUser";

const GithubUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsername(searchQuery); 
  };

  return (
    <div>
      <h1>Github Users</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Inserisci lo username"/>
        <button type="submit">Invia</button>
      </form>
      {username && <GitHubUser username={username} />}
    </div>
  );
};

export default GithubUsers;
