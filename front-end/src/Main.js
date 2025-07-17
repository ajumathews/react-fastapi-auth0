import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./Home";

const domain = "dev-etn3wquyukbbmijk.us.auth0.com";
const clientId = "oVakBTdjIpBH7T1ltoEgY9IKjJWk0Lr9";

function Main() {
  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <Home />
    </Auth0Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
