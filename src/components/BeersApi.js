import React, { useState, useEffect } from "react";
// Libraries
import axios from "axios";
// Components
import Beers from "./BeersApi/Beers";
// Style
import "./BeersApi/style/BeersApi.css";

function BeersApi() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        setBeers(res.data);
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
  const beersData = beers.map((data) => {
    return (
      <Beers
        key={data.id}
        id={data.id}
        name={data.name}
        tagline={data.tagline}
        first_brewed={data.first_brewed}
        description={data.description}
        image_url={data.image_url}
      />
    );
  });
  return (
    <div className="BeersApi-container">
      <div className="Beers-cards">{beersData}</div>
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default BeersApi;
