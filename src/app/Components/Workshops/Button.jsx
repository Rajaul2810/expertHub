"use client";
import Link from "next/link";
import React from "react";

const Button = ({ id }) => {
//   const { id } = params;
  return (
    <div className="w-fit mx-auto">
      <Link href={`/workshops/${id}`}>
        <button
          className="before:ease relative py-2 mx-auto flex px-5 border-b-4 overflow-hidden rounded-lg border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-96 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white  hover:shadow-black hover:before:-rotate-180
        "
        >
          <span className="relative z-10 "> Details</span>
        </button>
      </Link>
    </div>
  );
};

export default Button;
