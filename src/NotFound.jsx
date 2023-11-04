import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>This page doesn't exist</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;