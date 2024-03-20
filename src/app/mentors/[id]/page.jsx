import React from "react";
import data from "../../utils/data.json";
import Image from "next/image";
import { FaLinkedin,FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import MoreDetails from "@/app/Components/MoreDetails";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const details = ({ params }) => {
    const specialistDetails = data.find((dt) => dt.id === parseInt(params.id));
    let reviewCount = 0;
    let total = 0;
    specialistDetails.review.map((rev) => {
        reviewCount++;
        total += rev.rating;
    });

    let avgRating = total / reviewCount;
    return (
        <section className="max-w-screen-xl lg:mx-auto mx-1 md:mx-2  mb-2 md:px-2 lg:p-6 md:mb-6 shadow-lg mt-6 md:mt-10 rounded-xl">
            <section className="lg:flex gap-12 ">
                <section className="flex flex-col md:flex-row">
                    <div className="w-full h-72 md:w-60 md:h-48 lg:w-44 lg:h-44">
                        <Image
                            src={specialistDetails.photo}
                            alt="Specialist Image"
                            height={300}
                            width={400}
                            className="rounded-md w-full h-full"
                        ></Image>
                    </div>

                    <div className="mt-4 px-2 md:mt-0 md:pl-4 ">
                        <h1 className="text-xl font-semibold md:font-bold">
                            {specialistDetails.name}
                        </h1>
                        <h1 className="text-lg font-medium">Degree</h1>
                        <h1 className="text-skin-inverted font-semibold">
                            {specialistDetails.specialist}
                        </h1>
                        <h1>
                            Working at
                            <span className="font-bold">
                                Bangabandhu Sheikh Mujib Medical University
                                (BSMMU), Shahbag,Dhaka
                            </span>
                        </h1>

                        <div className="flex items-center gap-10 mt-2 ">
                            <div className="flex gap-2 text-3xl">
                                <a href={`${specialistDetails.linkedInLink}`} className="border-2 border-skin- rounded-full p-1 hover:bg-skin-button-muted-hover hover:cursor-pointer hover:text-white text-[#0077b5]">
                                    <FaLinkedin />
                                </a>
                                <a href={`${specialistDetails.fbLink}`}  className="border-2 border-skin- rounded-full p-1 hover:bg-skin-button-muted-hover hover:cursor-pointer hover:text-white text-[#4267B2]">
                                    <FaFacebook />
                                </a>
                            </div>
                            <div className=" font-medium">
                                <p className="text-skin-inverted text-xl">Phone: <span className="text-black text-base md:text-lg">{ specialistDetails.phone}</span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-2">
                    <h1 className="text-lg font-semibold text-left  my-2 lg:my-0">Consultation Fee: <span className="text-xl font-bold">{specialistDetails.price} BDT</span></h1>
                    <h1 className="text-lg font-semibold text-left text-[#9cc7f1] my-1 lg:my-0">Duration: <span className=" font-bold">{ specialistDetails.duration} minnutes</span></h1>
                    <div className="flex gap-2 mb-2">
                        <h1 className="text-skin-inverted">Rating: </h1>
                        <Rating
                        style={{ maxWidth: 90 }}
                        value={avgRating}
                        readOnly
                        />
                        <h1 className="font-medium">({avgRating})</h1>
                    </div>
                    <button className="p-3  flex items-center gap-4 lg:mt-2  px-6 text-white hover:text-black font-semibold bg-skin-button-muted hover:bg-skin-button-muted-hover rounded-full">
                        Get appointment <FaArrowRight className="text-xl"/>
                    </button>
                </section>
            </section>

            <section className="my-2 px-2">
                <h1 className="text-xl text-skin-inverted font-semibold">Description</h1>
                <p className="text-justify">{ specialistDetails.description}</p>
            </section>


            <section className="px-2">
                <h1 className="text-xl font-semibold text-skin-inverted">More Details</h1>
                <hr />
                <MoreDetails info={specialistDetails}></MoreDetails>
            </section>
        </section>
    );
};

export default details;
