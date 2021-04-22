import React from "react";
import "./style.css"
import pic from "./profilepic.JPG";

export default function About() {
  return (
    <div className="">
      <div className="row bio">
        <div className="col s10 m6 l4 test">
          <div className="card-panel">
          <h4><p style={{textAlign: "center"}} className="white-text">Ben Hopkins</p></h4>
            <div className="ratio">
              
              <img className="me" src={pic} />

            </div>
              
              
            <p className="white-text">
            A Full Stack Web Developer with a background in FireFighting and Communications. Experience working in team environments, teachable, hardworking, and enjoys learning new things. Started working towards a BA in Criminal Justice at age 16, graduating at age 21 having achieved the Arnold Fletcher Award. Recently, graduated from University of Washington’s Full-Stack Web Development Bootcamp in March 2021 with the desire to continue learning and improving. Curently, I can work with: 
              <br></br>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MySql via sequelize</li>
              <li>mongoDB via mongoose</li>
              
              </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
