import React, { Component } from "react";
import "./style.css";
import M from 'materialize-css'

import {Link} from "react-router-dom"
export default class Header extends Component{

  state = {
     page: ""
  }
  

  componentDidMount() {
    
      var sidenav = document.querySelectorAll('.sidenav');
      var elems = document.querySelectorAll('.modal');
      M.Sidenav.init(sidenav);
      M.Modal.init(elems);
  }

 

render() {
  return (
    <>
    <div className="body">
  <nav className="nav">
    <div className="nav-wrapper">
      <a href="#" data-target="mobile-demo"  className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <div className="navbuttons">
      <ul className="right hide-on-med-and-down">
        <li><Link  to="/about">About</Link></li>
        <li><a className={"modal-trigger"} href="#modal1">Contact</a></li>
        <li><Link to="/collaborators">Collaborators</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
      </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li ><Link className={"sidenav-close"} to="/about">About</Link></li>
    <hr/>
    <li ><a className={"sidenav-close modal-trigger"} href="#modal1">Contact</a></li>
    <hr/>
    <li><Link className={"sidenav-close"} to="/collaborators">Collaborators</Link></li>
    <hr/>
    <li><Link className={"sidenav-close"} to="/">Home</Link></li>
  </ul>

  <div id="modal1" className="modal card">
  
        
            
        <h3 style={{margin: "0 auto"}}>Contact me</h3>
        <br/>
        <a href="https://github.com/bh007183" target="_blank">Github Profile</a>
        <br/>
        <a href="https://www.linkedin.com/in/ben-hopkins-24a41357" target="_blank">Linkdin Profile</a>
        <br/> 
        <a href="mailto:bjhops17@gmail.com">bjhops17@gmail.com</a>
        <br/>
        <a href="https://github.com/bh007183/react-portfolio-git/files/6016873/Resume2.pdf"  download> Resume</a> 
        <br/>
        <p>Call me at: 907-231-2406</p>
      
   
  </div>
    
    </div>
    
    </>
  );
}
}
