import React, { useState } from "react";
import { features } from "/data.json";

export const HomeFeatures = () => {
  const [feature] = useState(features);

  return (
    <section className="pt-20 pb-12 lg:flex lg:gap-12 lg:px-40">
      {feature.slice(0, 3).map((item) => (
        <div key={item.id}>
          <div className="text-pure-black px-8 text-center md:w-4/6 md:mx-auto lg:w-full lg:px-0">
            <div className="space-y-8 pb-6 grid">
              <div className="h-20 flex items-center justify-center">
                <img className="mx-auto" src={item.icon} alt={item.name} />
              </div>
              <p className="story-title">{item.title}</p>
              <p className="feature-description pb-16 ">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export const AllFeatures = () => {
  const [feature] = useState(features);

  return (
    <section className="pt-20 pb-12 grid px-8 gap-14 md:px-10 md:py-28 md:grid-cols-2 md:gap-16 lg:grid-cols-3 lg:px-40">
      {feature.map((item) => (
        <div key={item.id}>
          <div className="text-pure-black text-center ">
            <div className="space-y-6">
              <div className="h-20 flex items-center justify-center">
                <img className="mx-auto" src={item.icon} alt={item.name} />
              </div>
              <p className="story-title">{item.title}</p>
              <p className="feature-description">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
