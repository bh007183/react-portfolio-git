import "./style.css";
import React, { Component } from "react";

export default class Center extends Component {
  render() {
    return (
     
      <div className="hexcontain" style={{ margin: "25vw 0vw 25vw 0vw" }}>
        <div className="tophex" style={{ margin: "3vw 0vw 0vw 0vw" }}>
          <div className="hexagon"></div>
          <div className="hexagon" style={{ margin: "0vw 0vw .5vw 2vw" }}></div>
          <div className="hexagon" style={{ margin: "0vw 0vw .5vw 2vw" }}></div>
        </div>
        <div className="centerhex">
          <div className="hexagon" style={{ margin: "5.5vw 0vw 0vw 0vw" }}></div>
          <div className="hexagon" style={{ margin: "5.5vw 0vw .5vw 2vw" }}></div>
        </div>
        <div className="lowerhex">
          <div className="hexagon" style={{ margin: "5.5vw 0vw 0vw 0vw" }}></div>
        </div>
      </div>
      
    
    );
  }
}
