import React from 'react'
import { useEffect, useState } from "react";
import "./style.css"
export default function Card(props) {
    const [thisState, setThisState] = useState({
        linkArray: props.github,
        nameArray: props.name
       
      });




    return (
             

        <section className="row row_space">
          <div className="col-lg-6 column title">
            <h6>{props.title}</h6>
            <p>Check out their github profiles!</p>
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              {thisState.linkArray.map((github, index) => <button><a target={"_blank"} key={index} href={github}>{thisState.nameArray[index]}</a></button>)}
              
            </div>
          </div>
          <figure className="col-lg-6 column title">
            <img
              src={console.log(props.image)}
              alt={props.alt}
              className="img-thumbnail date-image"
              style={{ height: "auto", width: "60vw" }}
            />
          </figure>
          <hr/>
        </section>

    
     
    )
}
