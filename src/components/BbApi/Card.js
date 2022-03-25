import React from "react";
import { Link } from "react-router-dom";
// Style
import "./style/Card.css";

function Card({ name, occupation, img, id }) {
  return (
    <div className="Card-container">
      <img className="Card-image" src={img} alt="" />
      <h3>Name: {name}</h3>
      <p>Occupation: {occupation}</p>
      <Link to={`./profile/${id}`}>
        <button className="Card-button">More information &raquo;</button>
      </Link>
    </div>
  );
}

export default Card;
