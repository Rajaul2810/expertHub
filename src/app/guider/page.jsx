import React from "react";
import data from "../utils/data.json"
import SpecialistCard from "../Components/SpecialistCard";
const Guider = () => {
  return (
<<<<<<< HEAD
    <section className="max-w-screen-xl mx-auto">
      
      <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          data.map((dt, idx) => <SpecialistCard key={idx} specialist={ dt} />)
        }
      </section>
    </section>
=======
    <div>
      <p>Guider</p>
    </div>
    
>>>>>>> 611c8e59b87024c4f60788e686cb96b79fdc8a5c
  )
};

export default Guider;
