import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border shadow-sm sticky top-0 z-30">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">ExpertHub</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="hover:text-skin-inverted">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-skin-inverted">
            <Link href="/guider">Guider</Link>
          </li>
          <li className="hover:text-skin-inverted">
            <Link href="/event">Event</Link>
          </li>
          <li className="hover:text-skin-inverted">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-skin-inverted">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn bg-skin-button-muted hover:bg-skin-button-muted-hover text-skin-base">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
