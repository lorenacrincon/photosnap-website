import React, { useState, useEffect } from "react";
import { stories } from "/data.json";
import { ReadStory } from "../common/Buttons";

export const HomeStories = () => {
  const [story] = useState(stories);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="relative md:grid md:grid-cols-2 lg:grid-cols-4">
      {story.slice(0, 4).map((item) => {
        const currentImage =
          windowWidth >= 768 ? item.images.desktop : item.images.mobile;
        return (
          <div key={item.id}>
            <div
              className="stories bg-no-repeat h-[375px] bg-cover grid px-8 py-10 content-end gap-5 relative z-0 md:h-[500px]"
              style={{
                backgroundImage: `url('${currentImage}')`,
              }}
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
        );
      })}
    </section>
  );
};
