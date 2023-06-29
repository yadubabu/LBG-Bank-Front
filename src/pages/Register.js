import React from "react";
import "./formStyle.css";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PanCardIcon from "@mui/icons-material/CreditCard";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

const Register = () => {
  return (
    <div className="login">
      <h1 className="top">Register</h1>
      <div className="Container">
        <div className="box">
          <PersonIcon style={{ margin: "8px" }} />
          <input type="text" />
        </div>
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
        <div className="box">
          <LockIcon style={{ margin: "8px" }} /> <input type="text" />
        </div>
        <button className="btn">Register</button>
      </div>
    </div>
  );
};

export default Register;
