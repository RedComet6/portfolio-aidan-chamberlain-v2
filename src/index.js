import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// render react content in the body of index.html with the id "root"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
