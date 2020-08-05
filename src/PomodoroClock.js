import React, { useState, useEffect } from "react";
import "./PomodoroClock.css";

import startStopAudio from "./sound/startStop.mp3";
import incrementDecrementAudio from "./sound/incrementDecrement.mp3";
import timerAudio from "./sound/timerAudio.mp3";

export default function PomodoroClock() {
  const [timeLeftMinute, setTimeLeftMinute] = useState("25");
  const [timeLeftSecond, setTimeLeftSeconds] = useState("00");
  const [startToggle, setStartToggle] = useState(false);

  const [sessionSetting, setSessionSetting] = useState(25);
  const [breakSetting, setBreakSetting] = useState(5);

  useEffect(() => {
    console.log("00" - "1");
  }, []);

  const startStop = () => {
    !startToggle ? setStartToggle(true) : setStartToggle(false);
    playSound("button-audio");
  };

  const resetAll = () => {
    setTimeLeftMinute("25");
    setTimeLeftSeconds("00");
    playSound("button-audio");
  };

  const incrementDecrement = (whichSetting, operation) => {
    if (whichSetting === "session") {
      if (operation === "increment" && sessionSetting < 60) {
        setSessionSetting(sessionSetting + 1);
      } else if (operation === "decrement" && sessionSetting > 0) {
        setSessionSetting(sessionSetting - 1);
      }
    } else {
      if (operation === "increment" && breakSetting < 60) {
        setBreakSetting(breakSetting + 1);
      } else if (operation === "decrement" && breakSetting > 0) {
        setBreakSetting(breakSetting - 1);
      }
    }

    playSound("increment-decrement-audio");
  };
  const playSound = (soundSrc) => {
    const soundFile = document.getElementById(soundSrc);
    soundFile.currentTime = 0;
    soundFile.play();
  };

  return (
    <div className="clock-container">
      <div className="clock-row">
        <div className="clock-timer-container">
          <label htmlFor="time-left" id="timer-label">
            Session
          </label>
          <div id="time-left">
            <span className="time-left-minusecs">{timeLeftMinute}</span>
            <span id="minusecs-between">:</span>
            <span className="time-left-minusecs">{timeLeftSecond}</span>
          </div>
          <audio id="timer-audio" src={timerAudio}></audio>
        </div>
      </div>
      <div className="clock-row-start-stop">
        <i
          id="start_stop"
          className={
            !startToggle
              ? "clock-icon-start-stop fas fa-play-circle"
              : "clock-icon-start-stop fas fa-pause-circle"
          }
          onClick={() => startStop()}
        ></i>
        <i
          id="reset"
          className="clock-icon-start-stop fas fa-undo"
          onClick={() => resetAll()}
        ></i>
        <audio id="button-audio" src={startStopAudio}></audio>
      </div>
      <div className="clock-row-break-session">
        <div id="session-container" className="break-session-settings">
          <label
            htmlFor="session-length"
            id="session-label"
            className="break-session-label"
          >
            Session Length
          </label>
          <div>
            <i
              id="session-increment"
              className="clock-icon-plus-minus fas fa-plus-square"
              onClick={() => incrementDecrement("session", "increment")}
            ></i>
            <span id="session-length">{sessionSetting}</span>
            <i
              id="session-decrement"
              className="clock-icon-plus-minus fas fa-minus-square"
              onClick={() => incrementDecrement("session", "decrement")}
            ></i>
          </div>
        </div>
        <div id="break-container" className="break-session-settings">
          <label
            htmlFor="break-length"
            id="break-label"
            className="break-session-label"
          >
            Break Length
          </label>
          <div>
            <i
              id="break-increment"
              className="clock-icon-plus-minus fas fa-plus-square"
              onClick={() => incrementDecrement("break", "increment")}
            ></i>
            <span id="break-length">{breakSetting}</span>
            <i
              id="break-decrement"
              className="clock-icon-plus-minus fas fa-minus-square"
              onClick={() => incrementDecrement("break", "decrement")}
            ></i>
            <audio
              id="increment-decrement-audio"
              src={incrementDecrementAudio}
            ></audio>
          </div>
        </div>
      </div>
    </div>
  );
}
