"use client";
import { useState } from "react";
import { AiFillCrown } from "react-icons/ai";
import {
  MdAccessTimeFilled,
  MdLayers,
  MdLightbulb,
  MdPersonSearch,
} from "react-icons/md";

const accordionData = [
  {
    title: "Find_Expert",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur molestiae aperiam!",
    colorBg: "bg-amber-500",
    colorBorder: "border-amber-500",
    icon: <MdPersonSearch color="white" size={32} />,
  },
  {
    title: "Make_An_Appoinment",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur molestiae aperiam!",
    colorBg: "bg-orange-500",
    colorBorder: "border-orange-500",
    icon: <MdAccessTimeFilled color="white" size={32} />,
  },
  {
    title: "Analyze_Your_Problem",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur molestiae aperiam!",
    colorBg: "bg-red-500",
    colorBorder: "border-red-500",
    icon: <MdLayers color="white" size={32} />,
  },
  {
    title: "Apply_Changes",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur molestiae aperiam!",
    colorBg: "bg-sky-500",
    colorBorder: "border-sky-500",
    icon: <MdLightbulb color="white" size={32} />,
  },
  {
    title: "Your_Success",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit consequatur molestiae aperiam!",
    colorBg: "bg-purple-500",
    colorBorder: "border-purple-500",
    icon: <AiFillCrown color="white" size={32} />,
  },
];
const FiveStepsSuccess = () => {
  // Toggle State and Function
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (idx) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className=" bg-cyan-700 py-10">
        <h1 className=" text-3xl md:text-4xl font-extrabold text-center my-5 text-skin-inverted">Five Steps to Your Success</h1>
      <div className=" w-full md:w-fit mx-auto min-h-[400px] flex gap-1 p-5 overflow-x-auto scrollbar">
        {accordionData.map((_, idx) => (
          <div key={idx} className="flex ">
            {/* toggle item */}
            <button
              onClick={() => handleToggle(idx)}
              className={`h-full flex justify-around flex-col items-center w-14 ${_.colorBg} text-white rounded-lg relative`}
            >
              <p className=" font-bold text-3xl">{idx + 1}</p>
              {isActive === idx && (
                <span
                  className={`w-0 h-0 ${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-10 top-4`}
                ></span>
              )}

              <h1 className="rotate-[270deg] w-full">{_.title} </h1>
            </button>
            {/* container */}
            <div
              className={`grid place-content-center place-items-center bg-gray-200 shadow-md rounded-lg ${
                isActive === idx
                  ? " w-80 px-5 opacity-1 scale-1"
                  : "w-0 opacity-0 scale-0"
              } text-black ml-2 duration-300 ease-in-out`}
            >
              <p className=" bg-skin-fill rounded-full shadow-md p-2 w-fit my-2">
                {_.icon}
              </p>
              <h2 className="lg:text-2xl font-black">{_.title}</h2>
              <p className="text-black/60 text-justify">{_.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveStepsSuccess;
