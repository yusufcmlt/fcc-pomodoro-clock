import React, { useState, useEffect } from "react";
import "./PomodoroClock.css";

import startStopAudio from "./sound/startStop.mp3";
import incrementDecrementAudio from "./sound/incrementDecrement.mp3";
import timerAudio from "./sound/timerAudio.mp3";

export default function PomodoroClock() {
  const [timeLeftMinute, setTimeLeftMinute] = useState(25);
  const [timeLeftSecond, setTimeLeftSeconds] = useState(0);
  const [startToggle, setStartToggle] = useState(false);

  const [sessionSetting, setSessionSetting] = useState(25);
  const [breakSetting, setBreakSetting] = useState(5);

  const [sessionBreakToggle, setSBToggle] = useState(false);

  useEffect(() => {
    let timerInterval = null;
    if (startToggle) {
      timerInterval = setInterval(() => {
        if (timeLeftSecond === 0 && timeLeftMinute > 0) {
          setTimeLeftMinute(timeLeftMinute - 1);
          setTimeLeftSeconds(59);
        } else if (timeLeftSecond > 0) {
          setTimeLeftSeconds(timeLeftSecond - 1);
        } else if (timeLeftMinute === 0 && timeLeftSecond === 0) {
          if (!sessionBreakToggle) {
            setTimeLeftMinute(breakSetting);
            setSBToggle(true);
          } else {
            setSBToggle(false);
            setTimeLeftMinute(sessionSetting);
          }
        }
      }, 1000);
    } else if (!startToggle && timeLeftSecond !== 0) {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [
    startToggle,
    timeLeftSecond,
    timeLeftMinute,
    breakSetting,
    sessionBreakToggle,
    sessionSetting,
  ]);

  useEffect(() => {
    if (timeLeftSecond === 0 && timeLeftMinute === 0) {
      playSound("beep");
    }
  });
  const startStop = () => {
    setStartToggle(!startToggle);

    playSound("button-audio");
  };

  const resetAll = () => {
    setTimeLeftMinute(25);
    setTimeLeftSeconds(0);
    setSBToggle(false);
    setStartToggle(false);
    setSessionSetting(25);
    setBreakSetting(5);
    playSound("button-audio");
    let beepSound = document.getElementById("beep");
    beepSound.currentTime = 0;
    beepSound.pause();
  };

  const incrementDecrement = (whichSetting, operation) => {
    if (!startToggle) {
      if (whichSetting === "session") {
        let sessionRef = sessionSetting;
        if (operation === "increment" && sessionSetting <= 59) {
          setSessionSetting(sessionSetting + 1);
          if (!sessionBreakToggle) {
            setTimeLeftMinute(sessionRef + 1);
            setTimeLeftSeconds(0);
          }
        } else if (operation === "decrement" && sessionSetting > 1) {
          setSessionSetting(sessionSetting - 1);
          if (!sessionBreakToggle) {
            setTimeLeftMinute(sessionRef - 1);
            setTimeLeftSeconds(0);
          }
        }
      } else {
        let breakRef = breakSetting;
        if (operation === "increment" && breakSetting <= 59) {
          setBreakSetting(breakSetting + 1);
          if (sessionBreakToggle) {
            setTimeLeftMinute(breakRef + 1);
            setTimeLeftSeconds(0);
          }
        } else if (operation === "decrement" && breakSetting > 1) {
          setBreakSetting(breakSetting - 1);
          if (sessionBreakToggle) {
            setTimeLeftMinute(breakRef - 1);
            setTimeLeftSeconds(0);
          }
        }
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
            {sessionBreakToggle ? "Break" : "Session"}
          </label>
          <div id="time-left">
            <span className="time-left-minusecs">
              {timeLeftMinute < 10 ? "0" + timeLeftMinute : timeLeftMinute}
            </span>
            <span id="minusecs-between">:</span>
            <span className="time-left-minusecs">
              {timeLeftSecond < 10 ? "0" + timeLeftSecond : timeLeftSecond}
            </span>
          </div>
          <audio id="beep" src={timerAudio}></audio>
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
