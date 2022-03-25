import React, { useState, useEffect } from "react";
// Libraries
import axios from "axios";
// Components
import Dinosaur from "./DinosaurApi/Dinosaur";
// Style
import "./DinosaurApi/style/DinosaurAPI.css";

function DinosaurApi() {
  const [dinosaur, setDinosaur] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get("https://dinosaur-facts-api.shultzlab.com/dinosaurs")
      .then((res) => {
        setDinosaur(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const dinosaurData = dinosaur.map((data) => {
    return <Dinosaur Name={data.Name} Description={data.Description} />;
  });
  return (
    <div className="DinosaurApi-conatiner">
      <div className="DinosaurApi-cards">{dinosaurData}</div>
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default DinosaurApi;
