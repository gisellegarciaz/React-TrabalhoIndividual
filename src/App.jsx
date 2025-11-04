import React, { useState } from "react";
import {LoginPage} from "./pages/Login";
// import Home from "./pages/Home";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [user, setUser] = useState("");

  const handleLogin = (email, senha) => {
    if (email && senha) {
      setUser(email);
      setCurrentPage("home");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleLogout = () => {
    setUser("");
    setCurrentPage("login");
  };

  return (
    <>
      {/* {currentPage === "login" && <Login onLogin={handleLogin} />}
      {currentPage === "home" && <Home user={user} onLogout={handleLogout} />} */}

      <LoginPage onLogin={handleLogin}/>
    </>
  );
}
