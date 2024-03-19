import Image from "next/image";
import React from "react";
import hero from "../../../public/hero.svg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className=" border-b ">
      <section className="flex min-h-[700px]  w-full items-center justify-center px-8">
        <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between relative">
          <div className=" absolute top-0 left-0 bg-purple-500 rounded-full w-52 h-52 -z-10 md:w-72 md:h-72 filter blur-2xl opacity-50 animate-pulse"></div>
          <div className=" absolute top-0 right-0  bg-yellow-500 rounded-full w-32 h-32 md:w-72 md:h-72 filter blur-2xl opacity-50 animate-pulse"></div>
          {/* <div className=" absolute bottom-0  bg-cyan-500 rounded-full w-72 h-72 -z-10 filter blur-2xl opacity-50 animate-pulse"></div> */}
          <div className=" absolute bottom-0 right-0 bg-pink-500 rounded-full w-72 h-72  filter blur-2xl opacity-50 animate-pluse"></div>
          <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
            <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900 select-none">
              Uncover the Secret of Successful Life!
            </h1>
            <p className="lg:text-lg sm:text-base text-sm text-gray-600 text-justify">
              Find expert mentors for personalized guidance in career, personal
              development, and entrepreneurship. Start your journey to success
              today!
            </p>
            <div className="">
              <Link
                href="/mentors"
                className="w-[100%] btn hover:bg-skin-button-muted-hover rounded-lg bg-skin-fill px-6 py-2 font-medium text-skin-base md:w-[100%]"
              >
                Get Started  &rarr;
              </Link>
            </div>
            <div className="flex items-center py-4 pl-4 bg-white shadow-xl border rounded-xl">
              <div className="w-14 h-14 bg-transparent  rounded-full border-[3px] ">
                <Image
                  className="w-full h-full rounded-full"
                  src={hero}
                  alt="avatar"
                  priority={true}
                />
              </div>
              <div className="w-14 h-14   rounded-full border-[3px]  relative -left-5">
                <Image
                  className="w-full h-full rounded-full"
                  src={hero}
                  alt="avatar"
                />
              </div>
              <div className="w-14 h-14   rounded-full border-[3px]  relative -left-10">
                <Image
                  className="w-full h-full rounded-full"
                  src={hero}
                  alt="avatar"
                />
              </div>
              <div className="w-14 h-14   rounded-full border-[3px]   relative -left-[60px]">
                <Image
                  className="w-full h-full rounded-full"
                  src={hero}
                  alt="avatar"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-3xl font-bold">420+</p>
                <p className="text-sm text-skin-inverted">
                  Expert Mentors waiting for you!
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={hero}
              className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px]  "
              alt="hero "
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
