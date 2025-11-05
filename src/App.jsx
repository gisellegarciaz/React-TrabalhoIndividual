import React, { useState } from "react";
import {LoginPage} from "./pages/Login";
import { HomePage } from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
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
    <GlobalStyle />

      {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
      {currentPage === "home" && <HomePage />}

    </>
  );
}
