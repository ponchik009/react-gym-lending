import React from "react";

import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const click = () => {
    console.log(getComputedStyle(document.documentElement, "").fontSize);
  };

  return (
    <div className="header">
      <img src={Logo} alt="Лого" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
