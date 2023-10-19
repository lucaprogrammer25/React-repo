import "./App.css";
import AlertClock from "./AlertClock";

function App() {

  const handleButtonClick = () => {
    const now = new Date();

    alert(`Sono le ${now.toLocaleTimeString()}`);
  };

  return (
    <>
      <AlertClock onClickHours={handleButtonClick} />
    </>
  );
}

export default App;
