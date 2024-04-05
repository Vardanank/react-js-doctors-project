import { useContext, createContext, useState } from "react";
import "./App.css";
import translation from "./Translation/Translation";

import { MainPage } from "./Pages/MainPage/MainPage";
import FooterGeneralContainer from "./Components/FooterComponents/FooterGeneralContainer";

export const TranslationContext = createContext(null);
function App() {
  const [language, setLanguage] = useState("RU");
  console.log(language);
  return (
    <div className="App">
      <TranslationContext.Provider
        value={{ language, setLanguage, t: translation[language] }}
      >
        <MainPage />
        <FooterGeneralContainer/>
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
