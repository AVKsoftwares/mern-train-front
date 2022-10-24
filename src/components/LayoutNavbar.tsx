import * as React from "react";
import { Outlet, Link } from "react-router-dom";


function LayoutNavbar() {

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Exercices</Link>
          </li>
          <li>
            <Link to="/addExercice">Ajouter un Exercice</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default LayoutNavbar;