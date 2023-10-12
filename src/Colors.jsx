import Color from "./Color";

const Colors = ({ items }) => {
    return (
      <ul>
        {items.map((item) => (
          <Color key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
    );
  }
  
  export default Colors;