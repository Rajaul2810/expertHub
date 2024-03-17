import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpecialistCard = ({ specialist }) => {
    return (
        <Link href={`/guider/${specialist.id}`}>
            <div className=" h-auto relative mx-auto bg-green-400 mb-10 rounded-md shadow">
                <Image
                    src={specialist.photo}
                    alt="Specialist Image"
                    height={300}
                    width={400}
                    className="rounded-md w-full"
                ></Image>

                <div className="absolute z-30 w-[80%] text-center p-4 bg-white left-6 -bottom-9 rounded-2xl shadow-xl">
                    <h1 className="text-lg font-semibold">{specialist.name}</h1>
                    <h3 className="font-medium text-skin-inverted">
                        {specialist.specialist}
                    </h3>
                </div>
            </div>
        </Link>
    );
};

export default SpecialistCard;
