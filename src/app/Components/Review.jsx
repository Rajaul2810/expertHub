import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import React from "react";

const Review = ({ review }) => {
    return (
        <section className="shadow-md p-2 rounded-md">
            <div className=" py-1 pb-3 flex justify-center items-center gap-4">
                    <Image
                        className="w-28 h-28 rounded-full "
                        src="https://i.ibb.co/0JYQrt5/719-1.jpg"
                        height={400}
                        alt="Reviewer"
                        width={400}
                    ></Image>
                    <div >
                        <h1 className="font-bold">Reviewer Name</h1>
                        <h1 className="text-gray-600">
                            <a href="#">{review.email}</a>
                        </h1>
                        <h1 className="font-semibold ">Rating Given: {review.rating}</h1>
                        <Rating
                            style={{ maxWidth: 90 }}
                            value={review.rating}
                            readOnly
                        />
                    </div>
            </div>

            <hr />

            <div className="py-2 text-center"> 
                <h1>{ review.reviewText}</h1>
            </div>
        </section>
    );
};

export default Review;
