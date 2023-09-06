import React, { useState } from "react";
import { features } from "/data.json";

export const HomeFeatures = () => {
  const [feature] = useState(features);

  return (
    <section className="py-20">
      {feature.slice(0, 3).map((item) => (
        <div key={item.id}>
          <div className="text-pure-black flex flex-wrap px-8 text-center justify-center gap-6">
            <div className="space-y-10">
              <img className="mx-auto" src={item.icon} alt={item.name} />
              <p className="story-title">{item.title}</p>
            </div>
            <p className="feature-description pb-5">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
