import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

function Profile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [changeHistory, setChangeHistory] = useState();

  useEffect(() => {
    async function fetchData() {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        console.log(token);
        try {
          const response = await Axios.get("http://localhost:8000/change-history", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (response.data) {
            console.log(response.data);
            setChangeHistory(response.data.message);
          } else {
            console.log("error fetching data from Api");
          }
        } catch (error) {
          console.log("API error:", error);
        }
      }
    }
    fetchData();
  }, [isAuthenticated]);

  return (
    isAuthenticated && (
      <>
        <div>{JSON.stringify(user)}</div>
        <div>{changeHistory}</div>
      </>
    )
  );
}

export default Profile;
