import React from "react";

export default function PomodoroClock() {
  return (
    <div className="clock-container">
      <div className="clock-row">
        <div id="timer-label">
          Session<div id="time-left">25:00</div>
        </div>
      </div>
      <div className="clock-row">
        <div id="start_stop">{"=>"}</div>
        <div id="reset">{"<>"}</div>
      </div>
      <div className="clock-row">
        <div className="break-session-settings">
          <label htmlFor="break-length" id="break-label">
            Session Length
          </label>
          <span id="break-increment">+</span>
          <span id="break-length">5</span>
          <span id="break-decrement">-</span>
        </div>
        <div className="break-session-settings">
          <label htmlFor="session-length" id="session-label">
            Session Length
          </label>
          <span id="session-increment">+</span>
          <span id="session-length">25</span>
          <span id="session-decrement">-</span>
        </div>
      </div>
    </div>
  );
}
