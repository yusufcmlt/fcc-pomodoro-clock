import React from "react";
import "./App.css";
import PomodoroClock from "./PomodoroClock.js";

function App() {
  return (
    <div className="App">
      <div id="pomodoro-h1">Pomodoro Clock</div>
      <PomodoroClock />
      <p style={{ fontSize: "20px" }}>
        <a
          className="github-link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yusufcmlt/fcc-pomodoro-clock"
        >
          {"  "}
        </a>
      </p>
    </div>
  );
}

export default App;
