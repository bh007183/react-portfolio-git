import React from 'react'
import Button from "../../components/buttons"
import { useEffect, useState } from "react";

export default function Card(props) {
    const [thisState, setThisState] = useState({
        array: props.github,
       
      });


     



    return (
             

        <section className="row row_space">
          <div className="col-lg-6 column title">
            <h6>{props.title}</h6>
            <p>Check out their github profiles!</p>
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {props.github.map(github => {return  <button href={github}>{github}</button>}
              ), props.github.map(bla => console.log(bla))}
            </div>
          </div>
          <figure className="col-lg-6 column title">
            <img
              src={props.image}
              alt={props.alt}
              className="img-thumbnail date-image"
              style={{ height: "auto", width: "60vw" }}
            />
          </figure>
        </section>
    
     
    )
}
