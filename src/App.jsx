/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { About, Header, Home } from "./components";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
        <About/>
      </main>
    </BrowserRouter>
  );
}

export default App;
