import React from "react";
import ChangeLanguage from "./language/ChangeLanguage";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import TimeDateCategoryItemsDisplay from "./timeDateCategoryItems/TImeDateCategoryItemsDisplay";

function Header() {
  return (
    <div className="fixed w-full max-w-sm">
      <section className="text-white bg-color-primary-1 flex justify-between items-center px-4 py-1 w-full">
        <Logo className="" />
        <ChangeLanguage />
        <Navigation />
      </section>
      <TimeDateCategoryItemsDisplay />
    </div>
  );
}

export default Header;
