import React, { useState, useEffect, useContext } from "react";
import { ChangeLanguageContext } from "../language/ChangeLanguageContext";
import { NewShoppingItemContext } from "../../newshoppingItems/NewShoppingItemContext";

function TImeDateCategoryItemsDisplay() {
  const { displayLanguage } = useContext(ChangeLanguageContext);

  const [currentTime, setCurrentTime] = useState(new Date());

  const { itemState, dispatch } = useContext(NewShoppingItemContext);

  // total categories to display after the date and time
  const totalCategories = itemState.length;

  // total items in all categories to display after the date and time
  let totalItems = 0;
  const totalItemsInCategories = itemState.map((elem) => {
    totalItems = totalItems + elem.items.length;
  });

  useEffect(() => {
    let localTimeChangeAfterOneSecond = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // cleanup of localTimeChangeAfterOneSecond
    return () => clearInterval(localTimeChangeAfterOneSecond);
  });

  return (
    <div className="flex justify-between px-3 bg-color-primary-1 pb-4">
      <p className="text-xsm px-1 text-white">
        {`${currentTime.toLocaleTimeString()} ${
          displayLanguage.en ? "on" : "am"
        } ${currentTime.toLocaleDateString()}`}
      </p>

      <p className="text-xsm px-1 text-white">{`${totalItems} ${
        displayLanguage.en ? " Items in " : " Artikel in "
      }${totalCategories} ${
        displayLanguage.en ? "Categories" : "Kategorien"
      }`}</p>
    </div>
  );
}

export default TImeDateCategoryItemsDisplay;
