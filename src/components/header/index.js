import React from "react";
import "./style.css";
import M from 'materialize-css'
export default function Header() {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
  return (
    <div className="body">
  <nav className="nav">
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <div className="navbuttons">
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      </div>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <hr/>
    <li><a href="badges.html">Components</a></li>
    <hr/>
    <li><a href="collapsible.html">Javascript</a></li>
    <hr/>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </div>
  );
}
