export const Welcome = ({ name }) => {
  return (
    <p>
      Welcome, <strong>{name}</strong>!
    </p>
  );
};

export default Welcome;

//Se la prop name un'espressione jsx React la considererà parte del componente.
