import React from "react";
import { Link, useHistory } from "react-router-dom";

const Country = (props) => {
  //console.log(props);
  const { name, capital, flag } = props.country;
  const history = useHistory();

  const handleButton = (countryName) => {
    const url = `/country/${countryName}`;
    history.push(url);
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="border p-3 mb-3">
        <img className="img-fluid rounded border" src={flag} alt="" />
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>
          <Link to={`/country/${name}`}>See Details</Link>
        </p>
        <button onClick={() => handleButton(name)} className="btn btn-primary">
          See Details
        </button>
      </div>
    </div>
  );
};

export default Country;
