import React from "react";
import "./menulist.css";

const MenuList = () => {
  return (
    <div className="menu">
      <nav className="navbar">
        <ul>
          <li>
            <a style={{ color: "yellow" }} href="/">
              Home
            </a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuList;
