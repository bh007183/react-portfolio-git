import "./style.css";
import React, { Component, useState } from "react";
import date from "./date.jpg";
import day from "./day.jpg";
import dragon from "./dragon.jpg";
import turn from "./turn.jpg";
import estore from "./estore.jpg";
import weather from "./weather.jpg";
import litzia from "../Collaborators/litzia.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: "center",
    overflow: "scroll"
  },
}));

export default function Center() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [stateValue, setValue] = useState();

  const handleOpen = (event) => {
    setValue(event.target.attributes[0].value);
    console.log(event.target.attributes[0].value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let body;
  switch (stateValue) {
    case "0":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">Shake N Date</h4>
          <img src={date} className="appImage"></img>
          <p id="simple-modal-description">
            Don't know what to do for date night? Worry no more! Let Shake N
            Date pick a date for you! You may select the randome button or a
            genre and it will generate a highly rated film for you to watch and
            where to watch it online. If you dont like it, hit the button
            againt! if you do like it, click save! Next it will take you to
            food. You can select your city and then generate a place to eat via
            complete randome or randome by cuisine.
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bh007183.github.io/shake-and-date/"
          >
            Take a look!
          </Button>
        </div>
      );
      break;
    case "1":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">Turn The Tables</h4>
          <img src={turn} className="appImage"></img>
          <p id="simple-modal-description">
            (Please note, this app is hosted on heroku and may take a few second
            to load.) An interesting concept of an app, Turn The Tables is a
            rating system for businesses to rate customers. Feel free to create
            an account and poke arround. probebly the best use scenerio would be
            for a vacation rental service to use this app but it could be used
            by restaurants or other establishents that are wanting to create a
            rewards system for customers.
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://peaceful-gorge-36427.herokuapp.com/"
          >
            Take a look!
          </Button>
        </div>
      );
      break;
    case "2":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">git Outside!</h4>
          <img src={estore} className="appImage"></img>
          <p id="simple-modal-description">
            (Please note, this app is hosted on heroku and may take a few second
            to load.) A simple full stack e-store geared to the outdoor
            adventurer, this easy to navigate app is fun to look through! As I
            did not want to spend alot of time on seed there are only 8 products
            listed. Admin abilities have not been added quite yet.
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bjh-hop-estore.herokuapp.com/"
          >
            Take a look!
          </Button>
        </div>
      );
      break;
    case "3":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">Litzia</h4>
          <img src={litzia} className="appImage"></img>
          <p id="simple-modal-description">
            (Please note, this app is hosted on heroku and may take a few second
            to load.) This website was built with a certain company in mind.
            Though im not sure if we will ever intigrate it into there current
            site, it was a fun experiance. It utilizes cloudinary, nodemailer,
            bcrypt, jsonwebtoken, and a mysql database.
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://l-z-mount-bjh.herokuapp.com/"
          >
            Take a look!
          </Button>
        </div>
      );
      break;
    case "4":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">Dragon Trading</h4>
          <img src={dragon} className="appImage"></img>
          <p id="simple-modal-description">
            This is just a simple trading app that I worked on for fun. Not very
            good but if you enter a ticker you will be able to see news articles
            for that companie as well as a chart if the market is open. The
            chart will take 10 seconds to load.
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bh007183.github.io/stock-app/"
          >
            Take a look!
          </Button>
        </div>
      );
      break;
    case "5":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">Old Man Weather</h4>
          <img src={weather} className="appImage"></img>
          <p id="simple-modal-description">
            This is a simple weather app using a 3rd party api. Strait forward
            and easy to use.
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bh007183.github.io/old-man-weather/"
          >
            Take a look!
          </Button>
        </div>
      );
      break;

    default:
      break;
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

      <div className="hexcontain">
        <div className="tophex">
          <a className="hover" type="button">
            <div value="0" className="hexagon uno" onClick={handleOpen}>
              <img className="one" />
            </div>
          </a>
          <a className="hover">
            <div value="1" className="hexagon two" onClick={handleOpen}>
              <img className="one" />
            </div>
          </a>
          <a className="hover">
            <div value="2" className="hexagon three" onClick={handleOpen}>
              <img className="one" />
            </div>
          </a>
        </div>
        <div className="centerhex">
          <a className="hover">
            <div value="3" className="hexagon adjust four" onClick={handleOpen}>
              <img className="one" />
            </div>
          </a>

          <a className="hover">
            <div value="4" className="hexagon adjust five" onClick={handleOpen}>
              <img className="one" />
            </div>
          </a>
        </div>
        <div className="lowerhex">
          <a className="hover">
            <div value="5" className="hexagon adjust six" onClick={handleOpen}>
              <img className="one" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
