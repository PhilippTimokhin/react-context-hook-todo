import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NoteProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
