import Image from "next/image";
import React from "react";
import HeroImg from "../../public/hero.jpg";

const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center bg-home'>
      <div className='container space-y-4'>
        <h2 className='text-white'>
          Penyedia{" "}
          <span className='font-semibold text-blue-500'>Rumah Berkualitas</span>
        </h2>
        <h2 className='text-white font-bold text-4xl'>
          PT. Mandiri Pratama Putra
        </h2>
        <div className='p-7 hover:border-l-2 hover:bg-white/95 border-l-blue-300 transform duration-300  md:max-w-lg'>
          <p className='font-normal text-blue-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            odit libero. Quod quam illum illo perspiciatis
          </p>
        </div>
        <button className='p-4 hover:border-l-4 hover:translate-x-2 transform duration-300 border-cyan-600 bg-orange-400 text-white font-semibold rounded-sm'>
          Hubungi Kami
        </button>
      </div>
    </div>
  );
};

export default Hero;
