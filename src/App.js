import React from "react";
import "./App.css";
import PomodoroClock from "./PomodoroClock.js";

function App() {
  return (
    <div className="App">
      <div id="pomodoro-h1">Pomodoro Clock</div>
      <PomodoroClock />
      <p style={{ fontSize: "20px" }}>
        Created by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/pdouu"
        >
          pdouu
        </a>
      </p>
    </div>
  );
}

export default App;
