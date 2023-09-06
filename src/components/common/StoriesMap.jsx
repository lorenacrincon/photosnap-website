import React, { useState } from "react";
import { stories } from "/data.json";
import { ReadStory } from "../common/Buttons";
import { HomeFeatures } from "./FeaturesMap";

export const HomeStories = () => {
  const [story] = useState(stories);
  return (
    <section className="relative">
      {story.slice(0, 4).map((item) => (
        <div key={item.id}>
          <div
            className="stories bg-no-repeat h-[375px] bg-cover grid px-8 py-10 content-end gap-5 relative z-0"
            style={{ backgroundImage: `url('${item.images.mobile}')` }}
          >
            <div className="story-overlay h-full w-full absolute z-30"></div>
            <div className="text-pure-white relative z-40">
              <p className="story-title">{item.name}</p>
              <p className="story-author pb-5">{item.author}</p>
              <hr className="opacity-25" />
            </div>
            <ReadStory />
          </div>
        </div>
      ))}
    </section>
  );
};
