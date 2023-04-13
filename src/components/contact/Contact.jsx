import React, { useContext } from "react";
import { ChangeLanguageContext } from "../header/language/ChangeLanguageContext";

function Contact() {
  const { displayLanguage } = useContext(ChangeLanguageContext);

  if (displayLanguage.en) {
    return (
      <section className="text-white flex flex-col items-center">
        <h1 className="text-3xl mt-20">Contact</h1>
        <p>If you want to contact me, </p>
        <p>just send me an email on</p>
        <a href="mailto:khera724@gmail.com">khera724@gmail.com</a>
      </section>
    );
  } else {
    return (
      <section className="text-white flex flex-col items-center">
        <h1 className="text-3xl mt-20">Kontakt</h1>
        <p>Wenn Sie mich kontaktieren möchten,</p>
        <p>Senden Sie mir einfach eine E-Mail an</p>
        <a href="mailto:khera724@gmail.com">khera724@gmail.com</a>
      </section>
    );
  }
}

export default Contact;
