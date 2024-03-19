import React from "react";
import data from "../utils/data.json"
import SpecialistCard from "../Components/SpecialistCard";
const Mentors = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          data.map((dt, idx) => <SpecialistCard key={idx} specialist={ dt} />)
        }
      </section>
    </section>
  )
};

export default Mentors;
