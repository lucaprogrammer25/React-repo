import { useEffect, useState } from "react";

const API_URL = `https://api.github.com/users/`;

const GitHubUser = ({ username }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setError(false)
      try {
        const result = await fetch(`${API_URL}${username}`);
        const response = await result.json();

        if (result.ok) {
          setData(response);
        } else {
          setError(response);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [username]);

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
