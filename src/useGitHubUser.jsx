import { useEffect, useState } from "react";

const API_URL = `https://api.github.com/users/`;

const useGitHubUser = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async (username) => {
    setLoading(true);
    setError(null);

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
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchUser };
}

export default useGitHubUser;
