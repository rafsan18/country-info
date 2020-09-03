import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => {
  //console.log(props);
  const { name, capital, flag } = props.country;

  return (
    <div className="col-md-3 col-sm-6">
      <div className="border p-3 mb-3">
        <img className="img-fluid rounded" src={flag} alt="" />
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>
          <Link to={`/country/${name}`}>See Details</Link>
        </p>
      </div>
    </div>
  );
};

export default Country;
