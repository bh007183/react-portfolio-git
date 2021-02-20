import "./style.css";
import React, { Component } from "react";
import date from "./date.jpg";
import day from "./day.jpg";
import dragon from "./dragon.jpg";
import turn from "./turn.jpg";
import weather from "./weather.jpg";

export default function Center(props) {
 
  return (
    <div className="hexcontain">
      <div className="tophex">
        <a className="hover" target="_blank" href="https://bh007183.github.io/shake-and-date/">
          <div className="hexagon uno">
            <img className="one" />
          </div>
        </a>
        <a className="hover" target="_blank" href="https://peaceful-gorge-36427.herokuapp.com/">
          <div className="hexagon two">
            <img className="one" />
          </div>
        </a>
        <a className="hover" target="_blank" href="https://bh007183.github.io/stock-app/">
          <div className="hexagon three">
            <img className="one" />
          </div>
        </a>
      </div>
      <div className="centerhex">
        <a className="hover" target="_blank" href="https://bh007183.github.io/day-planner/">
          <div className="hexagon adjust four">
            <img className="one" />
          </div>
        </a>
        <a className="hover" target="_blank" href="https://bh007183.github.io/old-man-weather/">
          <div className="hexagon adjust five">
            <img className="one" />
          </div>
        </a>
      </div>
      <div className="lowerhex">
        <a className="hover" target="_blank" href="https://github.com/bh007183">
          <div className="hexagon adjust six">
            <img
              className="one"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
