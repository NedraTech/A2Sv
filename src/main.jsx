import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="234654393506-r45du6ria3q27dshg5rps64jn0okut6m.apps.googleusercontent.com>">
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
