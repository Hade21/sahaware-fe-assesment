import React from "react";
import { Brandlogo } from "../../../assets";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <div className="logo">
          <img src={Brandlogo} alt="brand-logo" />
          <div className="line w-[2px] h-full bg-abu"></div>
          <p className="text-abu">Assesment</p>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Article</li>
            <li>Create</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <p>login</p>
      </div>
    </header>
  );
};

export default Header;
