import * as React from "react";
import { Outlet, Link } from "react-router-dom";


function LayoutNavbar() {

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            Logo
          </div>
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


{/* <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Exercices</Link>
          </li>
          <li>
            <Link to="/addExercice">Ajouter un Exercice</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div> */}