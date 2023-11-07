import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(response => response.json());
const useGithubUser = (API_URL, username) => {
  if(username) {
    const { data, error, mutate} = useSWR(API_URL, fetcher)
    
    const handleRefreshUser = () => {
      mutate(API_URL)
    }

    return {data, error, handleRefreshUser}
  }
  


  return { data: null, error: null}

}

export default useGithubUser;