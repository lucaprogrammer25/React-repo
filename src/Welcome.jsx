import Age from "./Age";

export const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name} </p>
      {age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
    </div>
  );
};
