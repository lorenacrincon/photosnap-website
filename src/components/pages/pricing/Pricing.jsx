import React, { useState } from "react";
import Beta from "../../common/Beta";
import FeaturesTable from "./FeaturesTable";
import PageTitle from "../../common/PageTitle";

function Pricing() {
  const pageTitle = "Photosnap | Pricing";

  const [isYearly, setIsYearly] = useState(false);
  const priceMultiplier = isYearly ? 10 : 1;

  const handleToggleChange = () => {
    setIsYearly(!isYearly);
  };

  const formatPrice = (price) => {
    return (price * priceMultiplier).toFixed(2);
  };

  return (
    <>
      <PageTitle title={pageTitle} />
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
      <section className="my-10 mx-6 md:mx-10 lg:mx-40">
        <div className="flex justify-center gap-8 items-center text-lg py-10 font-semibold">
          <p className={isYearly ? "opacity-50" : ""}>Monthly</p>
          <label>
            <input
              type="checkbox"
              className="toggle-checkbox"
              checked={isYearly}
              onChange={handleToggleChange}
            />
            <div className="toggle-switch"></div>
          </label>
          <p className={isYearly ? "" : "opacity-50"}>Yearly</p>
        </div>
        <div className="flex flex-wrap flex-col gap-6 lg:grid lg:grid-cols-3">
          <div className="card-bg py-12 px-8 text-center lg:my-8 lg:px-10">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between lg:flex-col lg:gap-8">
              <div className="md:text-start md:basis-5/12 lg:text-center">
                <h2 className="text-2xl font-bold">Basic</h2>
                <p className="opacity-60 text-[15px] pt-3">
                  Includes basic usage of our platform. Recommended for new and
                  aspiring photographers.
                </p>
              </div>
              <div className="md:text-end lg:text-center">
                <p className="tracking-widest font-bold text-[40px]">
                  ${formatPrice(19.0)}
                </p>
                <span className="opacity-60 text-[15px]">per month</span>
              </div>
            </div>
            <button className="black-btn uppercase mt-10 md:w-64 lg:w-full lg:h-12">
              Pick plan
            </button>
          </div>
          <div className="bg-black text-white py-12 px-8 text-center relative lg:py-[90px] lg:px-10">
            <div className="card-gradient"></div>
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between lg:flex-col lg:gap-8">
              <div className="md:text-start md:basis-5/12 lg:text-center">
                <h2 className="text-2xl font-bold">Pro</h2>
                <p className="opacity-60 text-[15px] pt-3">
                  More advanced features available. Recommended for photography
                  veterans and professionals.
                </p>
              </div>
              <div className="md:text-end lg:text-center">
                <p className="tracking-widest font-bold text-[40px]">
                  ${formatPrice(39.0)}
                </p>
                <span className="opacity-60 text-[15px]">per month</span>
              </div>
            </div>
            <button className="white-rect-btn mt-10 uppercase md:w-64 lg:w-full lg:h-12">
              Pick plan
            </button>
          </div>
          <div className="card-bg py-12 px-8 text-center lg:my-8 lg:px-10">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row md:justify-between lg:flex-col lg:gap-8">
              <div className="md:text-start md:basis-5/12 lg:text-center">
                <h2 className="text-2xl font-bold">Business</h2>
                <p className="opacity-60 text-[15px] pt-3">
                  Additional features available such as more detailed metrics.
                  Recommended for business owners.
                </p>
              </div>
              <div className="md:text-end lg:text-center">
                <p className="tracking-widest font-bold text-[40px]">
                  ${formatPrice(99.0)}
                </p>
                <span className="opacity-60 text-[15px]">per month</span>
              </div>
            </div>
            <button className="black-btn uppercase mt-10 md:w-64 lg:w-full lg:h-12">
              Pick plan
            </button>
          </div>
        </div>
      </section>
      <FeaturesTable />
      <Beta />
    </>
  );
}

export default Pricing;
