import Image from "next/image";
import React from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiYoutube,
} from "react-icons/fi";
import logo from "../../../public/vercel.svg";

const Contact = () => {
  return (
    <section className="">
      <div className=" flex justify-center items-center pt-20 pb-20 p-5 bg-skin-text-muted min-h-screen">
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center ">
          <div className="pb-5 ">
            <p className=" text-md font-serif italic text-skin-inverted">
              Contact Detail
            </p>
            <p className=" text-3xl font-extrabold">Contact us</p>

            <p className=" text-md pb-5 pt-2">
              Send us a note and we will be in touch shortly.
            </p>
            <div className=" mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white">
              <p className=" bg-gradient-to-r from-cyan-500 to-teal-400 p-3 w-10 h-10 rounded-full  shadow-indigo-500/50 shadow-md">
                <FiMapPin color="white" />
              </p>
              <div className=" ms-5 text-gray-500">
                <p className=" font-bold text-black">Our Address:</p>
                <p className=" text-sm">Jagannath University, Dhaka 1100</p>
              </div>
            </div>
            <div className="mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white">
              <p className=" bg-gradient-to-r from-cyan-500 to-teal-400 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md">
                <FiMail color="white" />
              </p>
              <div className=" ms-5 ">
                <p className=" font-bold">Our Mailbox:</p>
                <p className=" text-sm text-gray-500">
                  rajaulkarim2810@gmail.com
                </p>
              </div>
            </div>
            <div className=" mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white">
              <p className=" bg-gradient-to-r from-cyan-500 to-teal-400 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md">
                <FiPhone color="white" />
              </p>
              <div className="ms-5 ">
                <p className=" font-bold">Our Phone:</p>
                <p className=" text-sm text-gray-500">+88 01776030787</p>
              </div>
            </div>
            <div className=" mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white">
              <p className=" bg-gradient-to-r from-cyan-500 to-teal-400 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md">
                <FiMessageCircle color="white" />
              </p>
              <div className="ms-5 ">
                <p className=" font-bold">Whatsapp</p>
                <p className=" text-sm text-gray-500">+88 01776030787</p>
              </div>
            </div>
            <div className=" flex gap-2 w-full justify-around my-5">
              <span className=" btn btn-circle hover:bg-skin-button-muted-hover btn-sm bg-skin-fill text-white shadow-md">
                <FiMail />
              </span>
              <span className=" btn btn-circle hover:bg-skin-button-muted-hover btn-sm bg-skin-fill text-white shadow-md">
                <FiFacebook />
              </span>
              <span className=" btn btn-circle hover:bg-skin-button-muted-hover btn-sm bg-skin-fill text-white shadow-md">
                <FiLinkedin />
              </span>
              <span className=" btn btn-circle hover:bg-skin-button-muted-hover btn-sm bg-skin-fill text-white shadow-md">
                <FiYoutube />
              </span>
            </div>
          </div>
          <div className="shadow-md rounded-md p-5 bg-white w-full relative">
            <div className=" flex justify-center -mt-14">
              <Image
                src={logo}
                alt="logo"
                className=" h-24 w-24 rounded-full border-4 border-white shadow-xl p-2 bg-skin-fill"
              />
            </div>
            <form action="">
              <div className="pb-4 pt-4">
                <label htmlFor="">Name</label>
                <br />
                <input
                  className=" w-[100%] rounded-lg border border-skin-inverted px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50"
                  type="text"
                  name="name"
                  required
                  placeholder="Enter name"
                />
              </div>
              <div className="pb-4 pt-4">
                <label htmlFor="">Email</label>
                <br />
                <input
                  className=" w-[100%] rounded-lg border border-skin-inverted px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 "
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="pb-4 pt-4">
                <label htmlFor="">Message</label>
                <br />
                <textarea
                  className="w-[100%] rounded-lg border border-skin-inverted px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 "
                  type="text"
                  name="message"
                  placeholder="Enter message"
                  rows={2}
                  required
                />
              </div>
              <input
                className="w-[100%] btn hover:bg-skin-button-muted-hover rounded-lg bg-skin-fill px-6 py-2 font-medium text-white md:w-[60%]"
                type="submit"
              />
            </form>
            <div className=" absolute -bottom-7 w-full">
              <div className=" flex justify-around">
                <div className=" bg-skin-fill h-4 w-4 opacity-50 blur-sm rounded-full"></div>
                <div className=" bg-skin-fill h-4 w-4 opacity-50 blur-sm rounded-full"></div>
                <div className=" bg-skin-fill h-4 w-4 opacity-50 blur-sm rounded-full"></div>
                <div className=" bg-skin-fill h-4 w-4 opacity-50 blur-sm rounded-full"></div>
                <div className=" bg-skin-fill h-4 w-4 opacity-50 blur-sm rounded-full"></div>
                <div className=" bg-skin-fill h-4 w-4 opacity-50 blur-sm rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <iframe
        className=" p-5"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0874487981814!2d90.40878957484449!3d23.708570990381823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9072be4c8a9%3A0x1278bcef6c7c345!2sJagannath%20University!5e0!3m2!1sen!2sbd!4v1710611154683!5m2!1sen!2sbd"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
