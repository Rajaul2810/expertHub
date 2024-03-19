import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SpecialistCard = ({ specialist }) => {
    let reviewCount = 0;
    let total = 0;
    specialist.review.map((rev) => {
        reviewCount++;
        total += rev.rating;
    });

    let avgRating = total / reviewCount;
    return (
        <div className=" shadow-xl rounded-xl">
            <div className="flex  p-2">
                <div className="w-28 h-28">
                    <Image
                        src={specialist.photo}
                        alt="Specialist Image"
                        height={300}
                        width={400}
                        className="rounded-md w-full h-full"
                    ></Image>
                </div>
                <div className="pl-4">
                    <h1 className="text-xl font-bold">{specialist.name}</h1>
                    <h1 className="font-medium">Degree</h1>
                    <h2 className="text-skin-muted">Specialities :</h2>
                    <h1 className="text-skin-inverted font-semibold">
                        {specialist.specialist}
                    </h1>
                </div>
            </div>

            <div className="mt-2  mb-2 px-3">
                <h1 className="text-skin-muted">Working in :</h1>
                <h1 className="font-medium">
                    Bangabandhu Sheikh Mujib Medical University (BSMMU),
                    Shahbag,Dhaka
                </h1>
                <h1 className="text-lg font-bold  my-2">
                    Consultation Fees: <span className="text-skin-inverted">{specialist.price} BDT</span>
                </h1>
                <div className="flex justify-between mt-2">
                    <div>
                        <h1 className="text-skin-muted">Experience: </h1>
                        <h1 className="font-medium">5 years</h1>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <h1 className="text-skin-muted">Rating: </h1>
                            <h1 className="font-medium">{avgRating}</h1>
                        </div>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={avgRating}
                            readOnly
                        />
                    </div>
                </div>
            </div>

            <Link href={`/mentors/${specialist.id}`}>
                <button className="mt-2 w-full p-2 text-white font-semibold hover:text-black rounded-b-xl bg-skin-button-muted hover:bg-skin-button-muted-hover">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default SpecialistCard;
