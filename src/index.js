import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./App.jsx";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "./fonts/Nunito.ttf";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HomePage />);
serviceWorkerRegistration.register();
