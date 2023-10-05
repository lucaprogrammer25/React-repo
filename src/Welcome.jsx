import Age from './Age';

export const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name} </p>
      <Age age={age}/> 
    </div>
  );
}

