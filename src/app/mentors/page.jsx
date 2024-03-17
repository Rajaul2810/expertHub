import React from "react";
import data from "../utils/data.json"
import SpecialistCard from "../Components/SpecialistCard";
const Mentors = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      
      <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          data.map((dt, idx) => <SpecialistCard key={idx} specialist={ dt} />)
        }
      </section>
    </section>
  )
};

export default Mentors;
