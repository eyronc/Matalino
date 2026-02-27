import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./auth/Keycloak";

const keycloakInitOptions = {
  onLoad: "check-sso",
  pkceMethod: "S256",
  checkLoginIframe: false,
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactKeycloakProvider  
    authClient={keycloak}
    initOptions={keycloakInitOptions}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ReactKeycloakProvider>
  </StrictMode>,
);
