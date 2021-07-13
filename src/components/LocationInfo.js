import React from "react";

const LocationInfo = ({ data }) => {
  const { name, type, dimension, residents, created, id } = data;
  return (
    <div  className="info">
    <ul>
      <li>Name: {name}</li>
      <li>Type: {type}</li>
      <li>Dimension: {dimension}</li>
      <li>Residents: {residents.length}</li>
    </ul>
    </div>
  );
};

export default LocationInfo;