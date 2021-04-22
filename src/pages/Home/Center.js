import "./style.css";
import React, { Component, useState } from "react";
import date from "./date.jpg";
import movieSearch from "./moviesearch.png"
import dragon from "./dragon.jpg";
import turn from "./turn.jpg";
import estore from "./estore.jpg";
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
Date pick a date for you! You may select the random button or 
a genre and it will generate a highly rated film for you to watch and
where to watch it online. If you don't like it, hit the button
againt! If you do like it, click save! Next it will take you to
food. You can select your city and then generate a place to eat via
complete random or random by cuisine.
            <br></br>
          <p>Tool Box: JavaScript, CSS, JQuery, The Movie Database API and Zomato API </p>
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bh007183.github.io/shake-and-date/"
          >
            Take a look!
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/bh007183/shake-and-date"
          >
            GitHub!
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
          (Please note, this app is hosted on heroku and may take a few seconds
to load.) An interesting concept of an app, Turn The Tables is a
rating system for businesses to rate customers. Feel free to create
an account and poke around. Probably the best use scenario would be
for a vacation rental service to use this app but it could be used
by restaurants or other establishments that are wanting to create a
rewards system for customers.
            <br></br>
          <p>Tool Box: Handlebars.js, JavaScript, CSS, cloudinary, bcrypt, express-session, and a MySql2 database via sequelize. </p>
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://peaceful-gorge-36427.herokuapp.com/"
          >
            Take a look!
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/bh007183/eightysixed-app"
          >
            GitHub!
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
            (Please note, this app is hosted on heroku and may take a few seconds
            to load.) A simple full stack e-store geared toward the outdoor
            adventurer, this easy to navigate app is fun to look through! As I
            did not want to spend alot of time on seed there are only eight products
            listed. Admin abilities have not been added quite yet.
            <br></br>
          <p>Tool Box: ReactJS, JavaScript, CSS, MySql database via sequelize. </p>
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bjh-hop-estore.herokuapp.com/"
          >
            Take a look!
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/bh007183/bjh-e-store"
          >
            GitHub!
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
            (Please note, this app is hosted on heroku and may take a few seconds
            to load.) This Website was build as an e-store though we never set up a payment method. To login as a customer, username and password is Customer. To login with editing capabilities, username and password is Admin.
            <br></br>
          <p>Tool Box: ReactJS, JavaScript, CSS, cloudinary, nodemailer, bcrypt, jsonwebtoken, and a MySql database via sequelize. </p>
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://l-z-mount-bjh.herokuapp.com/"
          >
            Take a look!
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/bh007183/litzia-front"
          >
            GitHub!
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
            This is just a simple trading app that I worked on for fun. If you enter a ticker you will be able to see news articles
            for that company as well as a chart if the market is open. The
            chart will take 10 seconds to load.
          
          <br></br>
          <p>Tool Box: JavaScript, JQuery, HTML, CSS</p>
          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://bh007183.github.io/stock-app/"
          >
            Take a look!
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/bh007183/stock-app"
          >
            GitHub!
          </Button>
        </div>
      );
      break;
    case "5":
      body = (
        <div className={classes.paper}>
          <h4 id="simple-modal-title">Movie Search</h4>
          <img src={movieSearch} className="appImage"></img>
          <p id="simple-modal-description">
            This is a simple search app utilizing "The Movie Database" API. When you search a movie, it will display potential matches and you may view details on that film or save it into the saved page. This app is handy as you can see where to rent a film or stream the film.
            <br></br>
          <p>Tool Box: MongoDB, mongoose, express.js, Node.js, JavaScript, HTML, CSS</p>



          </p>
          <Button
            variant="outlined"
            target="_blank"
            href="https://moviesearch-bjh.herokuapp.com/"
          >
            Take a look!
          </Button>
          <br></br>
          <br></br>
          <Button
            variant="outlined"
            target="_blank"
            href="https://github.com/bh007183/Movie-Search"
          >
            GitHub!
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
