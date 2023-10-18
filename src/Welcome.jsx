import Age from "./Age";

export const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name} </p>
      {age > 18 && age < 65 && name === "John" && <Age age={age} />}
    </div>
  );
};
