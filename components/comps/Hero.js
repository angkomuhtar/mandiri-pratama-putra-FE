import React from "react";

const Hero = ({ data }) => {
  return (
    <div className='h-screen bg-home'>
      <div className='flex flex-col justify-center h-full w-full flex-1 bg-black/40'>
        <div className='container space-y-4'>
          <p className='text-white'>
            <span className='font-semibold'>{data.preTitle}</span>
          </p>
          <h2 className='text-white font-bold text-5xl'>{data.title}</h2>
          <div className='p-7 hover:border-l-2 border-l-blue-500 transform duration-75  md:max-w-lg'>
            <p className='font-light text-white'>{data.subtitle}</p>
          </div>
          <a
            type='button'
            href={`https://api.whatsapp.com/send/?phone=62${data.phone}&text="Saya Tertarik Untuk Hunian di MPP Property"&type=phone_number&app_absent=0`}
            target='_blank'
            className='py-4 px-7 group hover:border-l-4 hover:translate-x-2 transition-all duration-300 border-orange-600 bg-orange-600 hover:bg-black text-white font-semibold rounded-sm relative'>
            <div className='fixed top-0 left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full bg-black rounded-r-sm -z-10'></div>
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
