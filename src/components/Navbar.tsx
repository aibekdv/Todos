import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className=" indigo darken-1 px-1">
      <div className="nav-wrapper ">
        <Link to="/" className="brand-logo">
         <i className="material-icons">assignment</i>
         <span>ЗАМЕТКИ</span>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Список дел</Link>
          </li>
          <li>
            <Link to="/about">Информация</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
