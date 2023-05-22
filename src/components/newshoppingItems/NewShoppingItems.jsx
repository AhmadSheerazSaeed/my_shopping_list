import React, { useContext, useEffect, useState } from "react";
import { AddOrDeleteCategoriesContext } from "../addOrDeleteCategories/AddOrDeleteCategoriesContext";
import { ChangeLanguageContext } from "../header/language/ChangeLanguageContext";
import { NewShoppingItemContext } from "./NewShoppingItemContext";
import { MdOutlineDeleteSweep } from "react-icons/md";

function NewShoppingItems() {
  const { categoryState } = useContext(AddOrDeleteCategoriesContext);
  const { displayLanguage } = useContext(ChangeLanguageContext);
  const { itemState, dispatch } = useContext(NewShoppingItemContext);

  // on first render stores the first category in the categoryState
  // and after stores the selected category from the drop down
  const [selectedCategory, setSelectedCategory] = useState("");

  //  store the item from the input
  const [inputItem, setInputItem] = useState("");

  // function to handle and store the selected category from the drop down
  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  // function to set input item state
  const handleItemInput = (e) => {
    setInputItem(e.target.value);
  };

  // function to handle add item button
  const addItemBtn = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: { selectedCategory, inputItem, displayLanguage },
    });
    setInputItem("");
  };

  // function to delete the item
  const handleItemDelete = (itemToDelete, categoryToDelete) => {
    dispatch({
      type: "DELETE_ITEM",
      payload: { itemToDelete, categoryToDelete },
    });
    // console.log(itemToDelete, categoryToDelete);
  };

  // store the first category in the categoryState
  useEffect(() => {
    setSelectedCategory(categoryState[0]);
  }, [categoryState]);

  if (categoryState.length > 0) {
    return (
      <section className="mt-20  ">
        <h1 className="text-white text-center text-2xl">
          {displayLanguage.en
            ? "Add Shopping Items"
            : "Einkaufsartikel hinzufügen"}
        </h1>
        {/*this is select section for categories */}
        <section className="mt-3 text-center">
          <label className="text-white">
            {displayLanguage.en ? "Select Category" : "Kategorie auswählen"}
            <select
              className="bg-color-primary-1 pl-6 focus:outline-none "
              defaultValue={selectedCategory}
              onChange={handleCategorySelect}
            >
              {categoryState
                .sort((a, b) => (a > b ? 1 : -1))
                .map((elem, i) => (
                  <option key={i}>
                    {elem.substring(0, 1).toUpperCase() + elem.substring(1)}
                  </option>
                ))}
            </select>
          </label>
          {/* select section for category */}
        </section>

        <section className="flex justify-center pt-2">
          <form>
            <input
              className="bg-color-primary-1 text-white border-b-2 p-1  focus:outline-none"
              value={inputItem}
              name="itemInput"
              type="text"
              placeholder={
                displayLanguage.en
                  ? "Please, Enter Item"
                  : "Bitte Artikel eingeben"
              }
              onChange={handleItemInput}
            />
            <button onClick={addItemBtn} className="text-white pl-1">
              {displayLanguage.en ? "add" : "hinzufügen"}
            </button>
          </form>
        </section>

        {/* render the items on the screen starts */}

        <section className="">
          {itemState.length > 0 ? (
            <section className="">
              {itemState
                .sort((a, b) => (a.category > b.category ? 1 : -1))
                .map((elemInItemState, i) => (
                  <div key={i} className="">
                    {/*elemInItemState.category*/}

                    <p className=" text-white pl-4 pt-5">
                      {elemInItemState.category.substring(0, 1).toUpperCase()}
                      {elemInItemState.category.substring(1)}
                    </p>

                    {elemInItemState.items.length > 0
                      ? elemInItemState.items
                          .sort((a, b) => (a > b ? 1 : -1))
                          .map((elemInItems, i) => (
                            <section
                              key={i}
                              className="flex items-center justify-between px-10 text-white"
                            >
                              <div>
                                <p className="pt-1 ">
                                  {elemInItems.substring(0, 1).toUpperCase()}
                                  {elemInItems.substring(1)}
                                </p>
                              </div>
                              <div>
                                <MdOutlineDeleteSweep
                                  type="button"
                                  onClick={() => {
                                    handleItemDelete(
                                      elemInItems,
                                      elemInItemState.category
                                    );
                                  }}
                                  className=""
                                />
                              </div>
                            </section>
                          ))
                      : null}
                  </div>
                ))}
            </section>
          ) : (
            <h4 className="text-white text-center pt-8 text-xl">
              {displayLanguage.en
                ? "No Items To Display"
                : "Keine Artikel zum Anzeigen"}
            </h4>
          )}
        </section>

        {/* render the items on the screen ends */}
      </section> /* main section for add items */
    );
  } else {
    // this return will display information when there are no categories to select
    return (
      <section className="mt-20">
        <h1 className="text-white text-center text-2xl">
          {displayLanguage.en
            ? "Add Shopping Items"
            : "Einkaufsartikel hinzufügen"}
        </h1>

        {displayLanguage.en ? (
          <section className=" text-white mt-3 text-justify px-8">
            <div>
              <p>
                To enter the shopping items, you have to first select a category
                inwhich you want to add the shopping item.
              </p>

              <p className="pt-3">
                As it seems that there are no category so first you have to
                enter category by following steps.
              </p>

              <p className="pt-3">
                1. Click on the menu which is a plus sign (+) on top right
                corner.
              </p>

              <p className="pt-3"> 2. Select Add or Delete Categories </p>

              <p className="pt-3">
                3. Then you can enter new categories, which you will use in the
                future to enter shopping items.
              </p>
            </div>
          </section>
        ) : (
          <section className=" text-white mt-3 text-justify px-8">
            <div>
              <p>
                Um die Einkaufsartikel einzugeben, müssen Sie zunächst eine
                Kategorie auswählen auswählen, in der Sie den Artikel einkaufen
                möchten.
              </p>

              <p className="pt-3">
                Da es anscheinend keine Kategorie gibt, müssen Sie zuerst
                Kategorie durch folgende Schritte eingeben.
              </p>

              <p className="pt-3">
                1. Klicken Sie auf das Menü mit dem Pluszeichen (+) in der
                rechten oberen Ecke Ecke.
              </p>

              <p className="pt-3">
                2. Wählen Sie Kategorien hinzufügen oder löschen.
              </p>

              <p className="pt-3">
                3. Dann können Sie neue Kategorien eingeben, die Sie in Zukunft
                künftig für die Eingabe von Einkaufsartikeln.
              </p>
            </div>
          </section>
        )}
      </section>
    );
  }
}

export default NewShoppingItems;

// Please add categories <br />
// by choosing <br />
// Add or Delete Categories <br />
// from the menu
