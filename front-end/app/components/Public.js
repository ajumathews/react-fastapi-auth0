import React, { useEffect, useState } from "react";
import Axios from "axios";

function Public() {
  const [responseFromApi, setResponseFromApi] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get("/public");
      if (response.data) {
        console.log(response.data);
        setResponseFromApi(response.data.message);
      }
    }
    fetchData();
  }, []);

  return <div className="container">{responseFromApi}</div>;
}

export default Public;
