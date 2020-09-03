import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  const { name, capital, flag, area, population, region } = country;

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, []);

  return (
    <div className="container mt-3">
      <h2 className="text-center">{name}</h2>
      <img className="img-fluid border rounded" src={flag} alt="" />
      <h4 className="mt-5">Capital: {capital}</h4>
      <p>Area: {area}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
    </div>
  );
};

export default CountryDetails;
