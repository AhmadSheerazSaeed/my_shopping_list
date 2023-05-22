export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "getCategoryFromLocalStorage": {
      // console.log("get category form local storage");
    }
    case "addNewCategory": {
      console.log(action.payload.categoryInput);
      if (action.payload.categoryInput.trim() === "") {
        alert(
          action.payload.displayLanguage.en
            ? "Please, Enter Category"
            : "Bitte, Kategorie eingeben"
        );
        return state;
      } else if (
        state.includes(action.payload.categoryInput.trim().toLowerCase())
      ) {
        alert(
          action.payload.displayLanguage.en
            ? "Category already exist !"
            : "Kategorie existiert bereits !"
        );
        return state;
      } else {
        return [...state, action.payload.categoryInput.toLowerCase()];
        // console.log(state);
      }
    }

    case "categoriesFromLocalStorage": {
      return action.payload;
    }

    case "deleteCategory": {
      const filteredCategories = state.filter(
        (categories) => categories !== action.payload
      );
      return filteredCategories;
    }
  } //  switch
};
