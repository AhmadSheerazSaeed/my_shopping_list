import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddOrDeleteCategories from "./components/addOrDeleteCategories/AddOrDeleteCategories";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ChangeLanguageContextProvider from "./components/header/language/ChangeLanguageContext";
import Help from "./components/help/Help";
import Contact from "./components/contact/Contact";
import NewShoppingItems from "./components/newshoppingItems/NewShoppingItems";
import AddOrDeleteCategoriesContextProvider from "./components/addOrDeleteCategories/AddOrDeleteCategoriesContext";
import NewShoppingItemProvider from "./components/newshoppingItems/NewShoppingItemContext";

function App() {
  return (
    <div className="App max-w-sm">
      <NewShoppingItemProvider>
        <AddOrDeleteCategoriesContextProvider>
          <ChangeLanguageContextProvider>
            {/*section for the components which will be displayed on the screen.
           the reason for this section is that the addOrDeleteCategories, Contact and Help compnents
           will be displayed in the middle */}
            <section className="flex  flex-col">
              <BrowserRouter>
                <Header />
                {/*the following section is to define different routes for the components */}
                <section className="grow">
                  <Routes>
                    <Route path="/" element={<NewShoppingItems />} />
                    <Route
                      path="/addordeletecategories"
                      element={<AddOrDeleteCategories />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/help" element={<Help />} />
                  </Routes>
                </section>
                <Footer />
              </BrowserRouter>
            </section>
            {/*section for whole app */}
          </ChangeLanguageContextProvider>
        </AddOrDeleteCategoriesContextProvider>
      </NewShoppingItemProvider>
    </div>
  );
}

export default App;
