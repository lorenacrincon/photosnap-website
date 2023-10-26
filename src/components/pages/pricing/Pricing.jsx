import React from "react";
import Beta from "../../common/Beta";

function Pricing() {
  return (
    <>
      <section className="home-section">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-7">
          <div className="pricing-bg md:h-full md:flex order-last bg-no-repeat bg-cover bg-center lg:col-span-4"></div>
          <div className="bg-pure-black text-pure-white px-6 py-16 relative md:col-span-2 md:px-14 md:py-[173px] lg:col-span-3 lg:px-28 lg:py-44 ">
            <div className="relative flex flex-wrap gap-8 h-full content-between lg:gap-8">
              <div className="gradient-rectangle"></div>
              <h1 className="uppercase">Pricing</h1>
              <p className="md:pe-6">
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <main className="my-10">
        <div className="flex justify-center gap-8 items-center text-lg py-10 font-semibold">
          <p>Monthly</p>
          <label>
            <input type="checkbox" class="toggle-checkbox" />
            <div class="toggle-switch"></div>
          </label>
          <p>Yearly</p>
        </div>
        <div className="flex flex-wrap flex-col gap-6 mx-6">
          <div className="card-bg py-12 px-8 text-center ">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between">
              <div className="md:text-start md:basis-5/12">
                <h2 className="text-2xl font-bold">Basic</h2>
                <p className="opacity-60 text-[15px] pt-3">
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
              </div>
              <div className="md:text-end">
                <p className="tracking-widest font-bold text-[40px]">$19.00</p>
                <span className="opacity-60 text-[15px]">per month</span>
              </div>
            </div>
            <button className="black-btn uppercase md:w-64 mt-10">
              Pick plan
            </button>
          </div>
          <div className="bg-black text-white py-12 px-8 text-center relative ">
            <div className="card-gradient"></div>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between">
              <div className="md:text-start md:basis-5/12">
                <h2 className="text-2xl font-bold">Pro</h2>
                <p className="opacity-60 text-[15px] pt-3">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="md:text-end">
                <p className="tracking-widest font-bold text-[40px]">$39.00</p>
                <span className="opacity-60 text-[15px]">per month</span>
              </div>
            </div>
            <button className="white-rect-btn uppercase md:w-64 mt-10">
              Pick plan
            </button>
          </div>
          <div className="card-bg py-12 px-8 text-center ">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between">
              <div className="md:text-start md:basis-5/12">
                <h2 className="text-2xl font-bold">Business</h2>
                <p className="opacity-60 text-[15px] pt-3">
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="md:text-end">
                <p className="tracking-widest font-bold text-[40px]">$99.00</p>
                <span className="opacity-60 text-[15px]">per month</span>
              </div>
            </div>
            <button className="black-btn uppercase md:w-64 mt-10">
              Pick plan
            </button>
          </div>
        </div>
      </main>
      <Beta />
    </>
  );
}

export default Pricing;
