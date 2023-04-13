import { createContext, useEffect, useReducer, useState } from "react";
import { categoryReducer } from "./AddOrDeleteCategoriesReducer";

export const AddOrDeleteCategoriesContext = createContext();

function AddOrDeleteCategoriesContextProvider({ children }) {
  const [categoryState, dispatch] = useReducer(categoryReducer, []);

  useEffect(() => {
    const categoriesFromLocalStorage = JSON.parse(
      localStorage.getItem("categories")
    );

    if (categoriesFromLocalStorage !== null) {
      dispatch({
        type: "categoriesFromLocalStorage",
        payload: categoriesFromLocalStorage,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categoryState));
  }, [categoryState]);

  return (
    <AddOrDeleteCategoriesContext.Provider value={{ categoryState, dispatch }}>
      {children}
    </AddOrDeleteCategoriesContext.Provider>
  );
}

export default AddOrDeleteCategoriesContextProvider;
