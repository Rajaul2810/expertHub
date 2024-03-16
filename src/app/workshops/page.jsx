import React from "react";
import EventCard from "../Components/Workshops/EventCard";
import getWorkshops from "@/lib/getWorkshops";
import getWorkShopTags from "@/lib/getWorkshopTags";
import Banner from "../Components/Banner";
import Link from "next/link";

async function workshop(props) {
  const workshopPromise = getWorkshops();
  const tagsPromise = getWorkShopTags();
  const [workshops, tags] = await Promise.all([workshopPromise, tagsPromise]);
  console.log(workshop);

  return (
    <>
      <Banner>Workshops</Banner>
      <div className="px-5 py-10 lg:px-24">
        <div className="py-10 grid grid-cols-3  md:grid-cols-5  lg:grid-cols-8 gap-3">
          {tags.map((tag) => (
            <Link
              className="py-1 text-xs text-skin-inverted cursor-pointer rounded-full lg:text-base text-center uppercase px-3 border"
              key={tag}
              href={`/workshops/tag/${tag}`}
            >
              <span key={tag}>{tag}</span>
            </Link>
          ))}
        </div>

        <section className="grid lg:grid-cols-2 gap-5">
          {workshops.map((workshop) => {
            return <EventCard key={workshop.id} event={workshop} />;
          })}
        </section>
      </div>
    </>
  );
}

export default workshop;
