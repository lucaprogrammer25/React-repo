import useGitHubUser from "./useGitHubUser"

const GitHubUser = ({username}) => {
    const {data , error} = useGitHubUser(username)
}