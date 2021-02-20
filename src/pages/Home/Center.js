import "./style.css";
import React, { Component } from "react";
import date from "./date.jpg";
import day from "./day.jpg";
import dragon from "./dragon.jpg";
import turn from "./turn.jpg";
import weather from "./weather.jpg";



export default function Center(props) {
  
 const dateLaunch = "https://bh007183.github.io/shake-and-date/"
 const dateRepo = "https://github.com/bh007183/shake-and-date"

 const turnLaunch = "https://peaceful-gorge-36427.herokuapp.com/"
 const turnRepo = "https://github.com/bh007183/eightysixed-app"



  const urlFunction = (url) =>{
    
    window.location.href = url
  }


  return (
    
      <div className="hexcontain">
        <div className="tophex">
          <a target="_blank" href="https://github.com/bh007183/eightysixed-app">
          <div className="hexagon uno" >
            <img className="one"  />
          </div>
          </a>
          <div className="hexagon two">
            <img
              className="one"
              
            />
          </div>
          <div className="hexagon three">
            <img
              className="one"
            
            />
          </div>
        </div>
        <div className="centerhex">
          <div className="hexagon adjust four">
            <img
              className="one"
             
              
            />
          </div>
          <div className="hexagon adjust five">
            <img
              className="one"
             
              
            />
          </div>
        </div>
        <div className="lowerhex">
          <div className="hexagon adjust six">
            <img
              className="one"
              
              // style={{ margin: "0vw 0vw .5vw 23vw" }}
            />
          </div>
        </div>
      </div>
    
  );
}
