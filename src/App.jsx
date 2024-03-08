/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Header, Home } from "./components";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
      </main>
    </BrowserRouter>
  );
}

export default App;
