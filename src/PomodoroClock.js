import React from "react";
import "./PomodoroClock.css";

export default function PomodoroClock() {
  return (
    <div className="clock-container">
      <div className="clock-row">
        <div className="clock-timer-container">
          <label htmlFor="time-left" id="timer-label">
            Session
          </label>
          <div id="time-left">
            <span className="time-left-minusecs">25</span>
            <span id="minusecs-between">:</span>
            <span className="time-left-minusecs">00</span>
          </div>
        </div>
      </div>
      <div className="clock-row-start-stop">
        <i
          id="start_stop"
          className={
            true
              ? "clock-icon-start-stop fas fa-play-circle"
              : "clock-icon-start-stop fas fa-pause-circle"
          }
        ></i>
        <i id="reset" className="clock-icon-start-stop fas fa-undo"></i>
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
            ></i>
            <span id="session-length">25</span>
            <i
              id="session-decrement"
              className="clock-icon-plus-minus fas fa-minus-square"
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
            ></i>
            <span id="break-length">5</span>
            <i
              id="break-decrement"
              className="clock-icon-plus-minus fas fa-minus-square"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
