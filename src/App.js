import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import "./Style/main.css";
function App() {
  return (
    <div className="container">
      <div className="airbnb">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
//8.22
export default App;
