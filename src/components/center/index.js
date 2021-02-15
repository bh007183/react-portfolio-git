import "./style.css";
import React, { Component } from "react";

export default function Center(props) {
  
console.log(props)
if (props.data === "bio"){

  return(
  <div>
    Little miss muffit
  </div>
  )
}
if (props.data === "contact"){

  return(
  <div>
    contact miss muffit
  </div>
  )
}

if (props.data === "colaborators"){

  return(
  <div>
    colaborate with miss muffit
  </div>
  )
}

if(props.data === ""){
    return (
     <section className="center-back">
      <div className="hexcontain">
        <div className="tophex">
          <div className="hexagon"></div>
          <div className="hexagon" style={{ margin: "0vw 0vw .5vw 2vw" }}></div>
          <div className="hexagon" style={{ margin: "0vw 0vw .5vw 2vw" }}></div>
        </div>
        <div className="centerhex">
          <div className="hexagon adjust" style={{ margin: "5.5vw 0vw 0vw 0vw" }}></div>
          <div className="hexagon adjust" style={{ margin: "5.5vw 0vw .5vw 2vw" }}></div>
        </div>
        <div className="lowerhex">
          <div className="hexagon adjust" style={{ margin: "5.5vw 0vw 0vw 0vw" }}></div>
        </div>
      </div>
      </section>
      
    
    );
}
  
}
