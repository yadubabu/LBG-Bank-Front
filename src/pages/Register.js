import React, { useEffect, useState } from "react";
import { api } from "../api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pancard, setPancard] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const fetchUsers = async () => {
    await api
      .get("/getusers")
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchUsers();
  }, [users]);
  console.log(users);
  const submitHandler = async (e) => {
    e.preventDefault();
    await api
      .post("/adduser", {
        name,
        email,
        pancard,
        password,
        confirmpassword,
      })
      .then((data) => setUsers(data.data))
      .then((err) => console.log(err));
  };

  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="pancard"
          value={pancard}
          onChange={(e) => setPancard(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import "./formStyle.css";
// import { api } from "../api";
// import AttachEmailIcon from "@mui/icons-material/AttachEmail";
// import PanCardIcon from "@mui/icons-material/CreditCard";
// import KeyIcon from "@mui/icons-material/Key";
// import LockIcon from "@mui/icons-material/Lock";
// import PersonIcon from "@mui/icons-material/Person";

// const Register = () => {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [pancard, setPancard] = useState();
//   const [password, setPassword] = useState();
//   const [confirmpassword, setConfirmpassword] = useState();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     getAllUsers();
//   }, [users]);
//   const getAllUsers = async () => {
//     await api
//       .get("/getuser")
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.log(err));
//   };
//   const registerForm = async (e) => {
//     e.preventDefault();
//     await api
//       .post("/adduser", {
//         name,
//         email,
//         pancard,
//         password,
//         confirmpassword,
//       })
//       .then((data) => setUsers(data.data))
//       .then((err) => console.log(err));
//   };
//   console.log(users);
//   return (
//     <div className="login">
//       <h1 className="top">Register</h1>
//       <div className="Container">
//         <form onSubmit={registerForm}>
//           <div className="box">
//             <PersonIcon style={{ margin: "8px" }} />
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="box">
//             <AttachEmailIcon style={{ margin: "8px" }} />
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="box">
//             <PanCardIcon style={{ margin: "8px" }} />
//             <input
//               type="text"
//               name="pancard"
//               value={pancard}
//               onChange={(e) => setPancard(e.target.value)}
//             />
//           </div>
//           <div className="box">
//             <KeyIcon style={{ margin: "8px" }} />
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="box">
//             <LockIcon style={{ margin: "8px" }} />
//             <input
//               type="password"
//               name="confirmpassword"
//               value={confirmpassword}
//               onChange={(e) => setConfirmpassword(e.target.value)}
//             />
//           </div>
//           <input type="submit" className="btn" value="Register" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
