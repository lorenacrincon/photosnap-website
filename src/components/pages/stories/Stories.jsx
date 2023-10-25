import React from "react";
import { AllStories } from "../../common/StoriesMap";
import { ReadTheStory } from "../../common/Buttons";

function Stories() {
  return (
    <section className="">
      <div className="stories-header md:hidden bg-no-repeat bg-cover bg-center"></div>

      <div className=" text-pure-white py-12 px-6 md:py-40 md:px-10 main-header">
        {/* <div className="bg-pure-black text-pure-white py-12 px-6 flex flex-col gap-4 md:bg-[url('/assets/stories/tablet/moon-of-appalacia.jpg')] bg-no-repeat bg-cover bg-center md:py-40 "> */}
        <div className="flex flex-col gap-4 relative z-40">
          <p className="text-xs tracking-widest font-bold">
            LAST MONTH’S FEATURED STORY
          </p>
          <h1 className="font-bold text-[32px] tracking-widest ">
            HAZY FULL <br />
            MOON OF APPALACHIA
          </h1>
          <span className="flex gap-3 story-author">
            <p className="opacity-75">March 2nd 2020</p>
            <p>by John Appleseed</p>
          </span>
          <p className="text-[15px] opacity-60">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <ReadTheStory />
        </div>
      </div>

      <AllStories />
    </section>
  );
}

export default Stories;
