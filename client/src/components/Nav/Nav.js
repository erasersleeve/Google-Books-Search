import React from "react";
import { Link, useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Search</Link>
            </li>
            <li className="nav-item active">
                <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved</Link>
            </li>
            
        </ul>
</nav>
  );
}

export default Nav;
