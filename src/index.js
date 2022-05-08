import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// render react content in the body of index.html
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
