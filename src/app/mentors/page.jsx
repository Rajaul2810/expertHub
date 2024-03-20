"use client";
import React, { useEffect, useRef, useState } from "react";
import data from "../utils/data.json";
import SpecialistCard from "../Components/SpecialistCard";
import { IoFilter } from "react-icons/io5";
import { Pagination } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

const Mentors = () => {
    const [displayData, setDisplayData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(data);

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / 6));

        const startIdx = (currentPage - 1) * 6;
        const endIdx = currentPage * 6;

        setDisplayData(totalData.slice(startIdx, endIdx));
    }, [currentPage, totalData]);

    const onPageChange = (page) => setCurrentPage(page);

    const valueRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
      if (valueRef.current.value) {
          setTotalData(data.filter(dt=>dt.name.toLowerCase().includes(valueRef.current.value.toLowerCase())))
      }
      else {
        setTotalData(data)
      }
    };

    return (
        <section className="max-w-screen-xl mx-auto">
            {/* section for filter and searching */}
            <section
                onSubmit={handleSubmit}
                className="py-2 flex items-center justify-between px-4 md:mx-2 bg-base-200 my-2 rounded-lg"
            >
                <div>
                    <button className="text-3xl md:text-4xl ">
                        <IoFilter />
                    </button>
                </div>
                <form className="relative w-60 md:w-96">
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="input input-bordered input-accent w-full"
                        ref={valueRef}
                    />
                    <button className="py-3   text-2xl px-6 rounded-r-lg absolute right-0 top-0 bg-skin-button-muted">
                        <FaSearch />
                    </button>
                </form>
            </section>

            <section className="grid mb-2 md:mb-4 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:px-4 lg:gap-10 px-2">
                {displayData.map((dt, idx) => (
                    <SpecialistCard key={idx} specialist={dt} />
                ))}
            </section>
            <div
                className={`flex mb-6 md:mb-10 justify-center overflow-x-auto sm:justify-center mt-4 ${
                    displayData <= 6 && "hidden"
                }`}
            >
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
