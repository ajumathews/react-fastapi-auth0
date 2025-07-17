import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && <>{JSON.stringify(user)}</>;
}

export default Profile;
