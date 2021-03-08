import React from "react";
import "./style.css";
import Date from "./date.jpg";
import Litzia from './litzia.jpg'
import Review from "./review.jpg";
import { useEffect, useState } from "react";
import data from "./col.json";
import Card from "../Cards"



export default function Collaborators() {
  const [Image, setImage] = useState({
    image: [Date, Review, Litzia]
  })

  return (
    <div className="collaborators-body">
      <section
        className="container containerc container_margin row"
        style={{ textAlign: "center" }}
      >
        <header className="col-12 column" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "0%" }}>Collaborators</h2>
          <hr />
        </header>
        
        {data.map((obj, index) =>  <Card 
        key={index}
        title={obj.title}
        image={Image.image[index]}
        github={obj.github}
        name={obj.name}
        alt={obj.alt}
        />)}
        
      </section>
    </div>
  );
}
