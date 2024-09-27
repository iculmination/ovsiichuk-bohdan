import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div id="testimonials" className="py-20 text-white">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          speed="slow"
          direction="right"
        />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex  gap-2 items-center">
              <img src={img} alt={name} className="md:w-10 w-5 rounded-lg" />
              {/* <img src={nameImg} alt={name} className="md:w-24 w-20" /> */}
              <p className="cursor-default">{nameImg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
