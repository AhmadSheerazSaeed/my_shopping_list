export const categoryReducer = (state, action) => {
  switch (action.type) {
    case "getCategoryFromLocalStorage": {
      console.log("get category form local storage");
    }
    case "addNewCategory": {
      if (action.payload.trim() === "") {
        alert("Please, enter the category");
        return state;
      } else if (state.includes(action.payload.trim().toLowerCase())) {
        alert("Category already exist !");
        return state;
      } else {
        return [...state, action.payload.toLowerCase()];
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
