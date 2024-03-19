import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border shadow-sm sticky top-0 z-30 ">
      <div className="navbar-start">
        <Link href="/" className="text-xl btn">E-Mentor</Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="hover:text-skin-inverted">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-skin-inverted">
            <Link href="/mentors">Mentors</Link>
          </li>
          <li className="hover:text-skin-inverted">
            <Link href="/workshops">Workshops</Link>
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
