import React from "react";
import SelectBox from "../elements/SelectBox";

const FindBox = () => {
  return (
    <div className='py-24 md:py-0 container'>
      <div className='bg-white md:-mt-24 py-5 px-10 shadow-md shadow-slate-400'>
        <h2 className='capitalize text-xl font-semibold text-orange-600 mb-5 text-center md:text-left'>
          Find Your Dream house
        </h2>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 justify-between md:items-center'>
          <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-4'>
            <SelectBox
              items={[
                "Pilih Lokasi",
                "Jakarta",
                "Bandung",
                "Surabaya",
                "Makassar",
              ]}
            />
            <SelectBox items={["Pilih Type", "45/90", "32/70"]} />
          </div>
          <button className='px-9 py-5 justify-center items-center bg-orange-600 text-white text-base uppercase'>
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindBox;
