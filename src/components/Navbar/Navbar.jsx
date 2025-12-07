import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white" to={'/'}>React-Frist</Link>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/About">About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/Portofolio">Portofolio</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
