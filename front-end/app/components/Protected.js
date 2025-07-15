import React, { useEffect, useState } from "react";
import Axios from "axios";

function Protected() {
  const [responseFromApi, setResponseFromApi] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get("/protected");
      if (response.data) {
        console.log(response.data);
        setResponseFromApi(response.data.status);
      }
    }
    fetchData();
  }, []);

  return <div className="container">{responseFromApi}</div>;
}

export default Protected;
