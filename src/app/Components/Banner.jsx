"use client";

import Lottie from "lottie-react";
import React from "react";
import anim1 from "../../../public/loaderrr.json";
import anim2 from "../../../public/dot-ani.json";
const Banner = ({ children }) => {
  return (
    <>
      <div className="relative -z-10 flex items-center justify-center bg-base-300  h-60  px-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">
          {children}
        </h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim1} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={anim2} className=" h-36 lg:h-60"></Lottie>
        </div>
      </div>
    </>
  );
};

export default Banner;
