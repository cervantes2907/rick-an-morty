import React from "react";
import { useEffect, useState } from "react";
import { getLocation } from "../InfoApi/Api";
import LocationInfo from "./LocationInfo";
import Pagination from "./Pagination";
import ResidentContainer from "./ResidentContainer";
const LocationContainer = ({search }) => {
  const [location, setLocation] = useState(null);
  const [residents, setResidents] = useState([]);
  const [residentsOnPage, setResidentsOnPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const RESIDENT_LIMIT = 10;

  useEffect(() => {
    if (search) {
      const promise = getLocation(search);

      promise.then((response) => {
        console.log(response.data)
        setLocation(response.data);
        setResidents(response.data.residents);
      });
    }
  }, [search]);

  useEffect(() => {
    if (currentPage === 1) {
      setResidentsOnPage(residents.slice(0, RESIDENT_LIMIT));
      return;
    }
    const offset = currentPage * RESIDENT_LIMIT;
    setResidentsOnPage(residents.slice(offset - RESIDENT_LIMIT, offset));
  }, [currentPage, residents]);

  const handlePageChanged = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {location && <LocationInfo data={location} />}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {residentsOnPage.map((value) => (
          <ResidentContainer
            key={value.split("https://rickandmortyapi.com/api/character/")[1]}
            url={value}
          />
        ))}
      </div>
      <Pagination
        total={Math.ceil(residents.length / RESIDENT_LIMIT)}
        onPageChange={handlePageChanged}
      />
    </>
  );
};

export default LocationContainer;