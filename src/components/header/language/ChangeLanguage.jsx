import React, { useContext } from "react";
import { ChangeLanguageContext } from "./ChangeLanguageContext";

function ChangeLanguage() {
  const { displayLanguage, changeDisplayLanguagefunc } = useContext(
    ChangeLanguageContext
  );

  // console.log("ChangeLanguageContext", displayLanguage);
  return (
    <div>
      <p onClick={changeDisplayLanguagefunc}>
        {displayLanguage.en ? "Deutsch" : "English"}
      </p>
    </div>
  );
}

export default ChangeLanguage;
