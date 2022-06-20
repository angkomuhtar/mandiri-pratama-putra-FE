import React from "react";

const PageHeader = () => {
  return (
    <div className='bg-home'>
      <div className='pt-60 pb-20 flex flex-col justify-center h-full w-full flex-1 relative bg-black/40'>
        <div className='container space-y-4'>
          <h2 className='text-white font-bold text-5xl'>Tentang kami</h2>
          <div className='md:max-w-lg'>
            <p className='font-light text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
