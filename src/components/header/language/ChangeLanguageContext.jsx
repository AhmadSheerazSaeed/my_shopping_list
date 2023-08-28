import { createContext, useEffect, useState } from "react";

export const ChangeLanguageContext = createContext();

function ChangeLanguageContextProvider({ children }) {
  // function to change the display language
  const [displayLanguage, setDisplayLanguage] = useState({});

  const changeDisplayLanguagefunc = () => {
    setDisplayLanguage((prevState) => {
      return { en: !prevState.en };
    });
    // console.log("setState ", displayLanguage);
  };

  //   this useEffect will get the display language object from local storage
  useEffect(() => {
    const displayLanguageFromLocalStorage =
      localStorage.getItem("displayLanguage");

    if (displayLanguageFromLocalStorage !== null) {
      setDisplayLanguage(JSON.parse(displayLanguageFromLocalStorage));
    } else {
      setDisplayLanguage({ en: true });
    }
  }, []);

  // this useEfect will save the display language object
  useEffect(() => {
    localStorage.setItem("displayLanguage", JSON.stringify(displayLanguage));
  }, [displayLanguage]);

  return (
    <ChangeLanguageContext.Provider
      value={{ displayLanguage, changeDisplayLanguagefunc }}
    >
      {children}
    </ChangeLanguageContext.Provider>
  );
}

export default ChangeLanguageContextProvider;
