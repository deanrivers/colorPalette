import React from "react";
import ReactDOM from "react-dom";
import Boxes from "../src/boxes.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Boxes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
