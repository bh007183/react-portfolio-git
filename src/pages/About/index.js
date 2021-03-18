import React from "react";
import "./style.css"

export default function About() {
  return (
    <div className="">
      <div className="row bio">
        <div className="col s10 m6 l4 test">
          <div className="card-panel">
              
              <img className="me" src="http://placekitten.com/g/200/300" />
              
              
            <p className="white-text">
              Hello! I hail from a small town two hours east of Seattle and I recently graduated from University of Washingtons Full Stack Web Development Bootcamp (thats a mouth full)! My employment history has never included anything tech related (as of yet) so I will not mention former accomplishments. I did graduate with my BA in Criminal Justice back in 2014 but never really used it in the work force (accept for a short gig in the freezing waste lands of northern Alaska). I am excited to launch into a tech career and learn as much as I can! Curently, I can work with: 
              <li>Javascript</li>
              <li>JQuery</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>mySql via sequelize</li>
              <li>mongoDB via mongoose</li>
              
              </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
