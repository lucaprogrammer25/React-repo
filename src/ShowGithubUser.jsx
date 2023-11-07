import { useParams } from "react-router-dom";
import GitHubUser from "./GitHubUser";

function ShowGithubUser() {
  let { username } = useParams();

  return (
    <div>
      <h2>Dettagli Utente GitHub</h2>
      <GitHubUser username={username} />;
    </div>
  );
}

export default ShowGithubUser;
