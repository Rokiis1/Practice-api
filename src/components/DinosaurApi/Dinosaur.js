import React from "react";
import "./style/Dinosaur.css";

function Dinosaur({ Name, Description }) {
  return (
    <div className="Dinosaur-container">
      <h3>Name: {Name}</h3>
      <p> Description: {Description}</p>
    </div>
  );
}

export default Dinosaur;
