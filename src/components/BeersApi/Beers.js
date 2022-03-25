import React from "react";
// Style
import "./style/Beers.css";

function Beers({ name, tagline, first_brewed, description, image_url }) {
  return (
    <div className="Beers-container">
      <img className="Beers-images" src={image_url} alt="" />
      <p>Name: {name}</p>
      <p>Tagline: {tagline}</p>
      <p>First brewed: {first_brewed}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Beers;
