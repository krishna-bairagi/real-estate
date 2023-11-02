import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-w6ncwz3db6fkw2hx.us.auth0.com"
     clientId="FYCz18oRm224oJXUtdcPNdmCdLFfJeEd"
     authorizationParams={{
      // redirect_uri: "http://localhost:5173/"
      redirect_uri: "https://real-estate-frontend-omega.vercel.app"
     }}
     audience="https://real-estate-topaz-psi.vercel.app/"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
