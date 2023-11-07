import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(response => response.json());
const useGithubUser = (API_URL, username) => {
  if(username) {
    const { data, error} = useSWR(API_URL, fetcher)
    return {data, error}
  }
  


  return { data: null, error: null}

}

export default useGithubUser;