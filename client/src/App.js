import React from "react";
import { Link, Router, Redirect, navigate } from "@reach/router";
import "./App.css";
import AddCustomer from "./components/AddCustomer";
import LogReg from "./views/LogReg";
import UserList from "./views/UserList";

import axios from "axios";

function App() {
  const logout = () => {
    axios
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          // need to send the cookie in request so server can clear it
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch(console.log);

    navigate("/");
  };

  return (
    <>
      <div className="jumbotron">
        <h1>MERN Users</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <Router>
        <AddCustomer path="/customers/new" />
        <LogReg path="/" />
        <UserList path="/users" />
      </Router>
      <div className="container">
        <Link to="/users"> Get Users List</Link>
      </div>
    </>
  );
}

export default App;
