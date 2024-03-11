/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { About, Contact, Footer, Header, Home, Qualification, ScrollUp, Skills } from "./components";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Qualification/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </BrowserRouter>
  );
}

export default App;
