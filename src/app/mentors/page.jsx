import React from "react";
import data from "../utils/data.json"
import SpecialistCard from "../Components/SpecialistCard";
const Mentors = () => {
  const datas= data.filter(dt=>dt.features=== true)
  return (
    <section className="max-w-screen-xl mx-auto">
      
      <section className="py-8 bg-green-500">
        
      </section>
      <section className="grid mb-6 md:mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:px-4 lg:gap-10 px-2">
        {
          data.map((dt, idx) => <SpecialistCard key={idx} specialist={ dt} />)
        }
      </section>
    </section>
  )
};

export default Mentors;
