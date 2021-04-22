import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
export default function Card(props) {
  const [thisState, setThisState] = useState({
    linkArray: props.github,
    nameArray: props.name,
  });

  return (
    <section className="row row_space">
      <div className="card collaboratorsCard">
      <div className="col-lg-6 column title">
        <h6>{props.title}</h6>
        <p>Check out their GitHub profiles!</p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {thisState.linkArray.map((github, index) => (
            <button key={index}>
              <a target={"_blank"} className="gitHubLink" key={index} href={github}>
                {thisState.nameArray[index]}
              </a>
            </button>
          ))}
        </div>
      </div>
      <figure className="col-lg-6 column title">
        <img
          src={props.image}
          alt={props.alt}
          className="img-thumbnail image"
          
        />
      </figure>
      </div>
      <hr />
    </section>
  );
}
