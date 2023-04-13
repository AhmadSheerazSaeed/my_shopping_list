import React, { useContext } from "react";
import { ChangeLanguageContext } from "../header/language/ChangeLanguageContext";

function Help() {
  const { displayLanguage } = useContext(ChangeLanguageContext);

  if (displayLanguage.en === true) {
    return (
      <section className="text-white px-5 mt-20 overflow-scroll text-justify">
        <h1 className="text-3xl text-center font-bold">How to use the App</h1>

        <h3 className="py-3 underline ">About the App</h3>
        <p className="pb-3">
          The main purpose of this app is to save the shopping items inside
          different Categories. For example, if you want to buy tomatoes,
          ginger, potatoes. You have to enter these items in the vegetables
          category. If there are no categories and you try to enter the shopping
          items. You will be notified that that there are no categories and you
          have enter categories first to use the app.
        </p>

        <p className="pb-3">
          If you don't save the shopping list items in different categories then
          you have to create one general category to use the app.
        </p>

        <h3 className="pb-3 underline">Add Categories</h3>
        <p className="pb-3">
          To create different or one category, you have to click on the menu
          icon which is a plus + sign at the top right conrner of the app. From
          there you have to choose an option, Add Or Delete Categories.
        </p>

        <p className="pb-3">
          In there you have options to add the new category and delete the
          existing category by pressing the delete icon infront of all the
          categories.
        </p>

        <h3 className="pb-3 underline">Add New Items in the Shopping List</h3>
        <p className="pb-3">
          To add the buying items in the shopping list. You have to select Enter
          New Shopping Items from the menu which is the plus + sign at the top
          right conrner of the app.
        </p>

        <p className="pb-14 mb-9">
          Here you have to first select the category and then you will be able
          to add the items. If you don't select any category from the drop down
          the first category will be selected by default
        </p>
      </section>
    );
  } else {
    return (
      <section className="text-white px-5 mt-20 overflow-scroll text-justify break-all">
        <h1 className="text-3xl text-center font-bold">
          Wie man die App benutzt
        </h1>

        <h3 className="py-3 underline ">Über die App</h3>
        <p className="pb-3 pl-6">
          Der Hauptzweck dieser App ist es, die Einkaufsartikel in verschiedenen
          verschiedenen Kategorien zu speichern. Zum Beispiel, wenn Sie Tomaten,
          Ingwer, Kartoffeln. Sie müssen diese Artikel in der Kategorie Gemüse
          eingeben. Wenn keine Kategorien vorhanden sind und Sie versuchen, die
          Einkäufe einzugeben. Sie werden Sie darauf hingewiesen, dass es keine
          Kategorien gibt und Sie zuerst die Kategorien eingeben müssen, um die
          App nutzen zu können.
        </p>

        <p className="pb-3 pl-6">
          Wenn Sie die Artikel der Einkaufsliste nicht in verschiedenen
          Kategorien speichern, müssen Sie müssen Sie eine allgemeine Kategorie
          erstellen, um die App nutzen zu können.
        </p>

        <h3 className="pb-3 underline">Kategorien hinzufügen</h3>
        <p className="pb-3 pl-6">
          Um eine oder mehrere Kategorien zu erstellen, müssen Sie auf das
          Menüsymbol klicken, das ein Pluszeichen (+) in der oberen rechten Ecke
          der App darstellt. Von dort müssen Sie die Option "Kategorien
          hinzufügen oder löschen" wählen.
        </p>

        <p className="pb-3 pl-6">
          Dort haben Sie die Möglichkeit, die neue Kategorie hinzuzufügen und
          die bestehende Kategorie zu löschen, indem Sie auf das Löschsymbol vor
          allen Kategorien.
        </p>

        <h3 className="pb-3 underline">
          Neue Artikel in die Einkaufsliste aufnehmen
        </h3>
        <p className="pb-3 pl-6">
          Um die gekauften Artikel in die Einkaufsliste aufzunehmen. Sie müssen
          Enter Neue Einkäufe aus dem Menü wählen, das das Pluszeichen + in der
          oberen rechten Ecke der App.
        </p>

        <p className="pb-14 pl-6">
          Hier müssen Sie zuerst die Kategorie auswählen und dann können Sie die
          Artikel hinzufügen. Wenn Sie keine Kategorie aus der Dropdown-Liste
          auswählen, wird die wird standardmäßig die erste Kategorie ausgewählt.
        </p>
      </section>
    );
  }
}

export default Help;
