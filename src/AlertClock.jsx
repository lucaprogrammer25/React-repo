const AlertClock = ({onClickHours}) => {
  
  return (
    <>
      <p>Clicca qui per sapere l'ora</p>
      <button onClick={onClickHours}>Clicca qui</button>
    </>
  );
};

export default AlertClock;
