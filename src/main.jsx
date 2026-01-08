import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Authprovider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="162696293512-pvad6o85ku42ku9rf5482i7uvqcpkfem.apps.googleusercontent.com">
      <BrowserRouter>
        <Authprovider>
          <App />
        </Authprovider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
);
