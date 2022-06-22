import React from "react";

const PageHeader = ({ title, desc }) => {
  return (
    <div className='bg-home'>
      <div className='pt-60 pb-20 flex flex-col justify-center h-full w-full flex-1 relative bg-black/40'>
        <div className='container space-y-4'>
          <h2 className='text-white font-bold text-5xl'>{title}</h2>
          <div className='md:max-w-lg'>
            <p className='font-light text-white'>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
