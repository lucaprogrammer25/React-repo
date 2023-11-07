import { useEffect, useState } from "react";

const API_URL = `https://api.github.com/users/`;

const GitHubUser = ({ username }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setError(false)
      try {
        const response = await fetch(`${API_URL}${username}`);
        const result = await response.json();

        if (response.ok) {
          setData(result);
        } else {
          setError(result);
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
