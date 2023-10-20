import React from "react";

const GitHubUser = ({ data }) => {
  const { login, name, avatar_url } = data;

  return (
    <div>
      <div>Username: {login}</div>
      <div>Name: {name}</div>
      <div>
        <img src={avatar_url} alt={`${login}'s avatar`} />
      </div>
    </div>
  );
};

export default GitHubUser;
