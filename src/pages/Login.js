import React from "react";
import "./formStyle.css";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PanCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";

const Login = () => {
  return (
    <div className="login">
      <h1 className="top">Login</h1>
      <div className="Container">
        <div className="box">
          <AttachEmailIcon style={{ margin: "8px" }} />
          <input type="text" />
        </div>
        <div className="box">
          <PanCardIcon style={{ margin: "8px" }} /> <input type="text" />
        </div>
        <div className="box">
          <KeyIcon style={{ margin: "8px" }} /> <input type="text" />
        </div>
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
