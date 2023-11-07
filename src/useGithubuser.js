import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(response => response.json());
const useGithubUser = (API_URL) => {

  const { data, error} = useSWR(API_URL, fetcher)


  return { data, error}

}

export default useGithubUser;