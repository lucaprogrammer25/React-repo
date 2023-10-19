import { useState, useContext } from "react";
import "./App.css";
import Clock from "./Clock";
import LanguageContext from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  const handleSetLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      {/* <LanguageContext.Provider value={language}> */}
        <Clock />
      {/* </LanguageContext.Provider> */}
    </div>
  );
}

export default App;

// Rimuovendo "LanguageContext.provider" il componente Clock non ha più accesso al componente LanguageContext e quindi il parametro language sarà undefined;
// l'orario verrà comunque mostrato ma non sarà possibile fare lo switch tra le due lingue.
