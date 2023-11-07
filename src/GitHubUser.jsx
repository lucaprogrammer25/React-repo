import useGithubUser from "./useGithubUser";




const GitHubUser = ({ username }) => {
   const API_URL = `https://api.github.com/users/${username}`;
   const {data, error} = useGithubUser(API_URL, username)


  return (
    <div>
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <div>Username: {data.login}</div>
          <div>Name: {data.name}</div>
          <div>
            <img src={data.avatar_url} alt={`${data.login}'s avatar`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubUser;
