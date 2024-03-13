import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border shadow-sm sticky top-0">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">ExpertHub</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Guider</a>
          </li>
          <li>
            <a>Event</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-skin-button-muted hover:bg-skin-button-muted-hover text-skin-base">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
