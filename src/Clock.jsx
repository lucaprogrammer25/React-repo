import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const language = useContext(LanguageContext);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <h2>
        {language === "en" ? "the updated time is:" : "L'orario aggiornato è:"}{" "}
        {date.toLocaleTimeString()}
      </h2>
    </>
  );
};

export default Clock;
