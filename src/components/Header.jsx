import React from "react";
import LOGO from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <div id="header">
      <img src={LOGO} alt="" />
      <h1>Investment Calculator</h1>
    </div>
  );
};

export default Header;
