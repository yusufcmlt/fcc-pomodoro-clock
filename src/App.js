import React from "react";
import "./App.css";
import PomodoroClock from "./PomodoroClock.js";

function App() {
  return (
    <div className="App">
      <div id="pomodoro-h1">Pomodoro Clock</div>
      <PomodoroClock />
    </div>
  );
}

export default App;
