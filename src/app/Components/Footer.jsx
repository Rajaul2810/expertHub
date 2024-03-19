import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="p-10 bg-neutral">
        <h1 className=" text-skin-base text-3xl font-bold">Expert Hub</h1>
        <p className=" text-gray-300">Find  your Expert mentors for personalized guidance in career, personal development, and entrepreneurship.</p>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Expert</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Workshops</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Shop</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Feedback</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> About us</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Contact</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Login</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Register</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Terms of use</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Privacy policy</a>
          <a className="link link-hover flex gap-1 items-center"><MdKeyboardDoubleArrowRight/> Cookie policy</a>
        </nav>
      </footer>
      <p className=" text-gray-300 text-center text-sm"> &copy;{new Date().getFullYear()}. ExpertHub. All rights reserved</p>
    </div>
  );
};

export default Footer;
