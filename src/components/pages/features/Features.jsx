import React from "react";
import { AllFeatures } from "../../common/FeaturesMap";
import Beta from "../../common/Beta";

function Features() {
  return (
    <>
      <section className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="features-bg md:h-full md:flex order-last bg-no-repeat bg-cover bg-center lg:col-span-4"></div>
          <div className="bg-pure-black text-pure-white px-6 py-16 relative md:col-span-2 md:px-14 md:py-[173px] lg:col-span-3 lg:px-28 lg:py-44 ">
            <div className="relative flex flex-wrap gap-8 h-full content-between lg:gap-8">
              <div className="gradient-rectangle"></div>
              <h1 className="uppercase">Features</h1>
              <p className="md:pe-6">
                We make sure all of our features are designed to be loved by
                every aspiring and even professional photograpers who wanted to
                share their stories.
              </p>
            </div>
          </div>
        </div>
      </section>
      <main>
        <AllFeatures />
      </main>
      <Beta />
    </>
  );
}

export default Features;
