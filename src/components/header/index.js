import React, { Component } from "react";
import "./style.css";
import M from 'materialize-css'
import Center from "../center"
import Footer from "../footer"
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
        <li><a onClick={()=> this.setState({page: "bio"})}>About</a></li>
        <li><a onClick={()=> this.setState({page: "contact"})}>Contact</a></li>
        <li><a onClick={()=> this.setState({page: "colaborators"})}>Colaberators</a></li>
      </ul>
      </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a onClick={()=> this.setState({page: "bio"})}>About</a></li>
    <hr/>
    <li><a onClick={()=> this.setState({page: "contact"})}>Contact</a></li>
    <hr/>
    <li><a onClick={()=> this.setState({page: "colaborators"})}>Colaberators</a></li>
  </ul>
    
    </div>
    <Center data={this.state.page}/>
    <Footer/>
    </>
  );
}
}
