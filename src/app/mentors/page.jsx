"use client";
import React, { useEffect, useState } from "react";
import data from "../utils/data.json";
import SpecialistCard from "../Components/SpecialistCard";
import { IoFilter } from "react-icons/io5";
import { Pagination } from "flowbite-react";

const Mentors = () => {
    const [displayData, setDisplayData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / 6));

        const startIdx = (currentPage - 1) * 6;
        const endIdx = currentPage * 6;

        setDisplayData(data.slice(startIdx, endIdx));
    }, [currentPage]);

  const onPageChange = (page) => setCurrentPage(page);
  
  console.log(totalPages)

    return (
        <section className="max-w-screen-xl mx-auto">
            {/* section for filter and searching */}
            <section className="py-2 flex items-center justify-between px-4 bg-base-200 my-2 rounded-lg">
                <div>
                    <button className="text-3xl md:text-4xl ">
                        <IoFilter />
                    </button>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search by Specialist name"
                        className="input input-bordered input-accent w-full max-w-2xl"
                    />
                </div>
            </section>

            <section className="grid mb-2 md:mb-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:px-4 lg:gap-10 px-2">
                {displayData.map((dt, idx) => (
                    <SpecialistCard key={idx} specialist={dt} />
                ))}
            </section>
            <div className="flex mb-6 md:mb-10 justify-center overflow-x-auto sm:justify-center mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </section>
    );
};

export default Mentors;
