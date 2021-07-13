import React, { useEffect, useState } from "react";
import { getResident } from "../InfoApi/Api";
import ResidentInfo from "./ResidentInfo";

const ResidentContainer = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const promise = getResident(url);

    promise.then((response) => {
      setResident(response.data);
    });
  }, [url]);

  return (
    <div >
      {resident && <ResidentInfo data={resident} />}
    </div>
  );
};

export default ResidentContainer;
