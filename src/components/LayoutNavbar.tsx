import * as React from "react";
import { Outlet, Link } from "react-router-dom";

import TransparentLogo from '../images/logo-transparent.png'

function LayoutNavbar() {

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <img className="nav-logo" src={TransparentLogo} alt="Logo" />
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          {/* <a href="" target="">Link</a> */}
          <Link to="/">Exercices</Link>
          <Link to="/addExercice">Ajouter un Exercice</Link>
          <Link to="/tags">Tags</Link>
        </div>
      </div>

      <Outlet />
    </>

  );
}

export default LayoutNavbar;