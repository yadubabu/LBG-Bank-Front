import React from "react";

import "./header.css";
import { useState } from "react";
import MenuList from "./MenuList";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Header = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <div className="head">
      {show ? <MenuList /> : ""}
      <h1>Bank App</h1>
      <div className="menu" onClick={showMenu}>
        <MenuOpenIcon style={{ marginRight: "20px", marginTop: "5px" }} />
      </div>
    </div>
  );
};

export default Header;
