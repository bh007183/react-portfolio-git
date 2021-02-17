import React, { Component } from "react";
import "./style.css";
import M from 'materialize-css'

import {Link} from "react-router-dom"
export default class Header extends Component{

  state = {
     page: ""
  }


  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
  }


render() {
  return (
    <>
    <div className="body">
  <nav className="nav">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <div className="navbuttons">
      <ul className="right hide-on-med-and-down">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/collaborators">Collaborators</Link></li>
      </ul>
      </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><Link to="/about">About</Link></li>
    <hr/>
    <li><Link to="/contact">Contact</Link></li>
    <hr/>
    <li><Link to="/collaborators">Collaborators</Link></li>
  </ul>
    
    </div>
    
    </>
  );
}
}
