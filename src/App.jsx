import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  const handleSetLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
