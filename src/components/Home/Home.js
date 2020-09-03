import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-primary">
        Total Number of Country: {countries.length}{" "}
      </h1>
      <div className="row">
        {countries.map((country) => (
          <Country key={country.alpha3Code} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Home;
