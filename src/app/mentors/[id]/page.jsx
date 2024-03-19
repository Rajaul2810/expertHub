import React from "react";
import data from "../../utils/data.json";
import Image from "next/image";
const details = ({ params }) => {
    const specialistDetails = data.find((dt) => dt.id === parseInt(params.id));
    return (
        <section className="max-w-screen-xl mx-auto p-6 shadow-lg mt-10 rounded-xl">
            <section className="flex gap-12">
                <section className="flex">
                    <div className="w-32 h-32">
                        <Image
                            src={specialistDetails.photo}
                            alt="Specialist Image"
                            height={300}
                            width={400}
                            className="rounded-md w-full h-full"
                        ></Image>
                    </div>

                    <div className="pl-4 md:pl-8">
                        <h1 className="text-xl font-semibold md:font-bold">
                            {specialistDetails.name}
                        </h1>
                        <h1 className="text-lg font-medium">Degree</h1>
                        <h1 className="text-skin-inverted font-semibold">
                            {specialistDetails.specialist}
                        </h1>
                        <h1>Working at <span className="font-bold">Bangabandhu Sheikh Mujib Medical University (BSMMU),
                    Shahbag,Dhaka</span></h1>
                    </div>
                </section>

                <section>
                    <h1 className="text-lg font-semibold">Consultation Fee</h1>
                    <h1 className="text-center text-xl font-bold">{specialistDetails.price} BDT</h1>
                    <button className="p-2 mt-4  px-4 hover:text-white font-semibold bg-skin-button-muted hover:bg-skin-button-muted-hover rounded-full">
                        Get appointment
                    </button>
                </section>
            </section>
        </section>
    );
};

export default details;
