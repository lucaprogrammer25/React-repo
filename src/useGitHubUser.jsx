import { useEffect, useState } from "react";

const API_URL = `https://api.github.com/users/`;

const useGitHubUser = (username) => {
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

  return { data, error}
}

export default useGitHubUser