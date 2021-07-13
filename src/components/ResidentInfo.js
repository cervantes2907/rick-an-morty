import React from "react";

const ResidentInfo = ({ data }) => {
  const { name, image, status, origin, episode } = data;
  return (
    <div className="infoCard">
      <img style={{ width: 250, height: 250 }} src={image} alt={name} />
      <div className="card">
      <ul>
        <li>Name: {name}</li>
        <li>Origin: {origin.name}</li>
        <li>Status: {status}</li>
        <li>Aparitions: {episode.length}</li>
      </ul>
      </div>
    </div>
  );
};

export default ResidentInfo;
