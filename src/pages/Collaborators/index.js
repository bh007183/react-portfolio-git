import React from "react";
import "./style.css"
import date from "./date.jpg"
import review from "./review.jpg"

export default function Collaborators() {
  return (
    <div className="collaborators-body">
      <section
        className="container containerc container_margin row"
        style={{textAlign: "center"}}
      >
        <header className="col-12 column" style={{textAlign: "center"}}>
          <h2 style={{marginBottom: "0%"}}>Collaborators</h2>
          <hr />
        </header>

        <section className="row row_space">
        <div className="col-lg-6 column title">
            <h6>Shake-N-Date:</h6>
            <p>Check out their github profiles!</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button href="https://github.com/khsieh95">Kevin H</button>
              <button href="https://github.com/threeeyesxght">Keon</button>
            </div>
          </div>
          <figure className="col-lg-6 column title">
            <img
              src={date}
              alt="Date App"
              className="img-thumbnail date-image"
              style={{height: "auto", width: "60vw"}}
            />
          </figure>
          
        </section>

        <hr />

        <section className="row row_space">
        <div className="col-lg-6 column title">
            <h6>Turn The Tables:</h6>
            <p>Check out their github profiles!</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button href="https://github.com/Lax-Walrus">Kevin L</button>
              <button href="https://github.com/tmkeller">Tim</button>
              <button href="https://github.com/seagda">Shea</button>
            </div>
          </div>
          <figure className="col-lg-6 column title">
            <img
              src={review}
              alt="Date App"
              className="img-thumbnail"
              style={{height: "auto", width: "60vw"}}
            />
          </figure>
          
        </section>
      </section>
    </div>
  );
}
