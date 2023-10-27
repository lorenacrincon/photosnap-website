import React from "react";
import check from "../../../../public/assets/pricing/desktop/check.svg";
import data from "/data.json";

function FeaturesTable() {
  return (
    <>
      <div className="mx-6 py-8 md:mx-10 lg:py-14">
        <p className="hidden md:block text-center uppercase font-bold text-[40px] tracking-widest pb-10">
          compare
        </p>
        <div className="md:max-w-2xl md:mx-auto">
          <div className="features-title md:grid grid-cols-2 justify-between ">
            <h3>The features</h3>
            <div className="hidden text-center md:grid md:grid-cols-3 md:justify-between">
              <p>basic</p>
              <p>pro</p>
              <p>business</p>
            </div>
          </div>
          <hr className="border border-black my-6" />
        </div>
        <div>
          {data.table.map((item, index) => (
            <div
              key={index}
              className="md:grid grid-cols-2 justify-between md:max-w-2xl md:mx-auto "
            >
              <p className="features-title">{item.title}</p>
              <div className="flex gap-20 py-6 md:py-0 md:grid md:grid-cols-3 md:justify-between md:gap-0">
                {item.basic || item.pro || item.business ? (
                  <>
                    <div className="">
                      <p className="features-subtitle pb-2 md:hidden">basic</p>
                      {item.basic && (
                        <img className="mx-auto" src={check} alt="check" />
                      )}
                    </div>
                    <div className="">
                      <p className="features-subtitle pb-2 md:hidden">pro</p>
                      {item.pro && (
                        <img className="mx-auto" src={check} alt="check" />
                      )}
                    </div>
                    <div className="">
                      <p className="features-subtitle pb-2 md:hidden">
                        business
                      </p>
                      {item.business && (
                        <img className="mx-auto" src={check} alt="check" />
                      )}
                    </div>
                  </>
                ) : null}
              </div>
              <hr className="border border-light-grey mb-6 md:my-6 col-span-2" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeaturesTable;
