import "./style.css";
import React, { Component } from "react";
import date from "./date.jpg"
import day from "./day.jpg"
import dragon from "./dragon.jpg"
import turn from "./turn.jpg"
import weather from "./weather.jpg"

export default function Center(props) {
  



    return (
     <section className="center-back">
      <div className="hexcontain">
        <div className="tophex">
    <div className="hexagon">
      <img className="one" src={date} />
    </div>
          <div className="hexagon two" >
          <img className="one" src={date} style={{ margin: "0vw 0vw .5vw 2vw" }}/>
          </div>
          <div className="hexagon three" >
          <img className="one" src={date} style={{ margin: "0vw 0vw .5vw 2vw" }}/>
          </div>
        </div>
        <div className="centerhex">
          <div className="hexagon adjust four" >
          <img className="one" src={date} style={{ margin: "0vw 0vw 0vw 0vw" }}/>
          </div>
          <div className="hexagon adjust five" >
          <img className="one" src={date} style={{ margin: "0vw 0vw .5vw 2vw" }}/>
          </div>
        </div>
        <div className="lowerhex">
          <div className="hexagon adjust six">
          <img className="one" src={date} style={{ margin: "0vw 0vw 0vw 0vw" }}/>
          </div>
        </div>
      </div>
      </section>
      
    
    );

  
}
