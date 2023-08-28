import React, { useContext, useEffect, useState } from "react";
import { BsPlusLg, BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ChangeLanguageContext } from "../language/ChangeLanguageContext";

function Navigation() {
  const [iconNav, setIconNav] = useState(true);
  const { displayLanguage } = useContext(ChangeLanguageContext);

  const changeIconNavState = () => {
    setIconNav((prevState) => !prevState);
  };

  return (
    <div className="h-10 w-10">
      <button
        className="cursor-pointer h-full w-full"
        onClick={changeIconNavState}
      >
        {iconNav ? (
          <BsPlusLg className="h-full w-full text-white" />
        ) : (
          <BsXLg className="h-full w-full text-white" />
        )}
      </button>

      {iconNav || (
        <nav className="absolute left-0 top-20 w-full h-screen text-center pt-14 flex flex-col gap-3 z-10 bg-color-primary-1">
          <Link onClick={changeIconNavState} to={"/"}>
            {displayLanguage.en
              ? "Add New Shopping Items"
              : "Neue Einkaufsartikel hinzufügen"}
          </Link>
          <Link onClick={changeIconNavState} to={"/addordeletecategories"}>
            {displayLanguage.en
              ? "Add or Delete Categories"
              : "Kategorien hinzufügen oder löschen"}
          </Link>
          <Link onClick={changeIconNavState} to={"/contact"}>
            {displayLanguage.en ? "Contact" : "Kontakt"}
          </Link>
          <Link onClick={changeIconNavState} to={"/help"}>
            {displayLanguage.en ? "Help" : "Hilfe"}
          </Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
