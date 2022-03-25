import React from "react";
import { Link } from "react-router-dom";
// style
import "./style/Navigation.css";

function Navigation() {
  return (
    <nav className="Nav-container">
      <h1 className="Nav-title">API works</h1>
      <ul className="Nav-links">
        <li>
          <Link to="/bbapi">The Breaking Bad API</Link>
        </li>
        <li>
          <Link to="/beersapi">Beers API</Link>
        </li>
        <li>
          <Link to="/dinosaurapi">Dinosaur description API</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
