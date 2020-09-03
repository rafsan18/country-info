import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  console.log(country);
  return (
    <div>
      <h3>This is country</h3>
    </div>
  );
};

export default CountryDetails;
