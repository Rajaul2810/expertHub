import Image from "next/image";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import { FaCalendarDays } from "react-icons/fa6";

import Button from "./Button";
const EventCard = ({ event }) => {
  const {
    id,
    title,
    instructor,
    date,
    designation,
    time,
    tag,
    image,
    seats,
    description,
  } = event;
  const tags = [];
  tag.map((tag) => {
    tags.push(tag);
  });

  return (
    <div className=" space-y-5 p-4 bg-teal-50 rounded-lg">
      <div className="relative">
        <Image
          className="rounded-lg"
          src={image}
          alt="event banner"
          quality={100}
          height={368}
          width={792}
        />
        <div className="flex gap-2 absolute top-2 right-2">
          {tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="p-1 px-2 bg-gradient-to-r from-cyan-500 to-teal-400 capitalize text-white text-lg rounded-lg"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="lg:text-2xl font-bold"> {title}</h1>
        <div className="lg:flex space-y-5 lg:space-y-0 gap-5 justify-between items-center text-normal lg:text-xl">
          <div className=" ">
            <p className=" flex items-center gap-3">
              <FiUserCheck className="p-1 bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-xl rounded-full " />
              <span className="font-bold">{instructor}</span>
            </p>
            <p className="text-xs ml-8">{designation}</p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <FaCalendarDays className="p-1 bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-xl rounded-full " />
              {date}
            </div>
            <div className="flex items-center gap-3">
              <FaClockRotateLeft className="p-1 bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-xl rounded-full " />
              {time}
            </div>
          </div>
        </div>
        <div className="lg:flex space-y-5 lg:space-y-0 gap-5 justify-between items-center text-normal lg:text-xl">
          <p>
            <b>Enrolled: </b> 10
          </p>
          <p>
            <b>Available: </b>
            {seats}
          </p>
        </div>
        <div>
          <p>{description.slice(0, 200)} . . . .</p>
        </div>
      </div>
      <hr />
      <Button id={id} />
    </div>
  );
};

export default EventCard;
