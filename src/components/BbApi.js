import React, { useState, useEffect } from "react";
// Libraries
import axios from "axios";
// Components
import Card from "./BbApi/Card";
// Style
import "./BbApi/style/BbApi.css";

function BbApi() {
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((res) => {
        setActor(res.data);
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

  const actorData = actor.map((data) => {
    return (
      <Card
        key={data.char_id}
        id={data.char_id}
        name={data.name}
        occupation={data.occupation}
        img={data.img}
      />
    );
  });
  return (
    <div className="BbApi-container">
      <div className="BbApi-data">{actorData}</div>
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default BbApi;
