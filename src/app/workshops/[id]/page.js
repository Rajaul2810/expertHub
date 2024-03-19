import Banner from "@/app/Components/Banner";
import getWorkshopDetails from "@/lib/getWorkShopDetails";
import Image from "next/image";
import React from "react";
import { FaClockRotateLeft, FaUserGroup } from "react-icons/fa6";
import { FiUserCheck } from "react-icons/fi";
import { FaCalendarDays } from "react-icons/fa6";
import EnrollButton from "@/app/Components/Workshops/EnrollButton";
const EventDetails = async ({ params }) => {
  const { id } = params;
  // { title, instructor, date, time, tag, image, seats, description }
  const {
    title,
    designation,
    instructor,
    date,
    time,
    tag,
    image,
    seats,
    description,
  } = await getWorkshopDetails(id);
  return (
    <>
      <Banner>{title ? title : "Title is Loading......"}</Banner>
      <div className="px-5 lg:px-24 py-10">
        <div className="w-fit lg:flex gap-5  ">
          <Image
            src={image}
            alt="event banner"
            height={350}
            className=" shadow-lg text-teal-300 rounded"
            width={550}
          />
          <div className="space-y-5 text-lg lg:text-2xl">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <div>
              <p>{instructor}</p>
              <p className="text-sm">{designation}</p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <FaCalendarDays className="p-1 size-7 bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-3xl rounded-full " />
                {date}
              </p>
              <p className="flex items-center gap-3">
                <FaClockRotateLeft className="p-1 size-7  bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-3xl rounded-full " />
                {time}
              </p>
              <p className="flex items-center gap-3">
                <FaUserGroup className="p-1 size-7  bg-gradient-to-r from-cyan-500 to-teal-400 text-white text-3xl rounded-full " />
                {seats}
              </p>
            </div>
            <div>
              <EnrollButton>Enroll Now</EnrollButton>
            </div>
          </div>
        </div>
        <div className="space-y-5 pt-10">
          <h1 className="text-3xl font-semibold">Workshop Details</h1>
          <p className=" indent-4">{description}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
