import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/logo/shoppingCartHalf.png";

function Logo() {
  return (
    <div className="h-10 w-10">
      <Link to={"/"}>
        <img className="h-full w-full" src={mainLogo} />
      </Link>
    </div>
  );
}

export default Logo;
