import React, { useContext } from "react";
import { MdCopyright } from "react-icons/md";
import { ChangeLanguageContext } from "../header/language/ChangeLanguageContext";

function Footer() {
  const { displayLanguage } = useContext(ChangeLanguageContext);

  return (
    <div className="max-w-sm fixed bottom-0 left-0 right-0 ml-0 mr-0 bg-color-primary-1 flex justify-center items-center gap-1 text-white py-4">
      <MdCopyright className="text-xsm" />

      <p className="text-xsm pt-1">
        2023 http://sheeraz.me
        {displayLanguage.en
          ? "(All Rights Reserved)"
          : "(Alle Rechte Vorbehalten)"}
      </p>
    </div>
  );
}

export default Footer;
