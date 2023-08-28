import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { ChangeLanguageContext } from "../header/language/ChangeLanguageContext";
import { AddOrDeleteCategoriesContext } from "./AddOrDeleteCategoriesContext";

function AddOrDeleteCategories() {
  // get selected or default language
  const { displayLanguage } = useContext(ChangeLanguageContext);

  // get categoryState and dispatch funtion from AddOrDeleteCategoriesContext
  const { categoryState, dispatch } = useContext(AddOrDeleteCategoriesContext);

  // store the new entered category by the user to local state
  const [categoryInput, setCategoryInput] = useState("");

  const addNewCategoryfunc = (e) => {
    e.preventDefault();
    dispatch({
      type: "addNewCategory",
      payload: { categoryInput, displayLanguage },
    });
    setCategoryInput("");
  };

  const deleteCategoryBtn = (category) => {
    dispatch({ type: "deleteCategory", payload: category });
  };

  return (
    <div className="mt-20">
      <h1 className="text-white text-center font-bold ">
        {displayLanguage.en
          ? "Add Or Delete Categories"
          : "Kategorien hinzufügen oder löschen"}
      </h1>
      <form className="flex justify-around items-center pt-2">
        <input
          className="bg-color-primary-1 text-white border-b-2 p-1  focus:outline-none"
          placeholder={
            displayLanguage.en
              ? "Please, Enter Category"
              : "Bitte, Kategorie eingeben"
          }
          onChange={(e) => {
            setCategoryInput(e.target.value);
          }}
          value={categoryInput}
        />
        <button
          className="text-white focus:outline-none"
          onClick={addNewCategoryfunc}
        >
          {displayLanguage.en ? "add" : "hinzufügen"}
        </button>
      </form>

      {/* section for the whole categories to display when the app starts */}
      <section className="mt-5">
        {/* section to display single category with the delete icon */}
        {/*
        <section className="flex gap-8 px-3 py-2 justify-between items-center border-b mx-4">
          <div className="overflow-scroll flex justify-center">
            <p className="text-white">Dairy</p>
          </div>
          <div>
            <AiOutlineDelete className="text-lg pr-0 text-white" />
          </div>
        </section>
 */}
        {categoryState.length > 0 ? (
          categoryState
            .sort((a, b) => (a > b ? 1 : -1))
            .map((categories, i) => {
              return (
                <section
                  key={i}
                  className="flex gap-8 px-3 py-2 justify-between items-center border-b mx-4"
                >
                  <div className="overflow-scroll flex justify-center">
                    <p className="text-white">
                      {categories.substring(0, 1).toUpperCase()}
                      {categories.substring(1)}
                    </p>
                  </div>
                  <div>
                    <AiOutlineDelete
                      onClick={() => {
                        deleteCategoryBtn(categories);
                      }}
                      className="text-lg pr-0 text-white"
                    />
                  </div>
                </section>
              );
            })
        ) : (
          <h1 className="text-white text-center text-2xl pt-6">
            {displayLanguage.en
              ? "No Categories To Show"
              : "Keine Kategorien zum Anzeigen"}
          </h1>
        )}
      </section>
    </div>
  );
}

export default AddOrDeleteCategories;
