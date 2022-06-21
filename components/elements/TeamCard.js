import Image from "next/image";
import React from "react";
import { IoCallOutline, IoLogoFacebook, IoMailOutline } from "react-icons/io5";

import Teams from "../../public/teams-1.jpg";

const TeamCard = () => {
  return (
    <div className='flex flex-col space-y-4 bg-white shadow-lg shadow-gray-400/20'>
      <div className='w-full'>
        <Image
          src={Teams}
          alt='photo'
          layout='responsive'
          className='h-auto w-full object-cover'
        />
      </div>
      <div className='p-5 space-y-6'>
        <h2 className='text-center font-semibold text-2xl'>Syamsul Khair</h2>
        <h2 className='text-center font-semibold text-orange-400'>
          Chief Executive Officer
        </h2>
        <div className='flex justify-center space-x-6'>
          <a
            href='http://'
            className='bg-orange-50 text-orange-400 p-2 rounded-full relative group hover:text-black'>
            <div className='bg-black/30 absolute w-full left-0 top-0 scale-0 z-0 bottom-0 pointer-events-none rounded-full group-hover:scale-100 transform duration-300'></div>
            <IoCallOutline size={24} />
          </a>
          <a
            href='http://'
            className='bg-orange-50 text-orange-400 p-2 rounded-full relative group hover:text-black'>
            <div className='bg-black/30 absolute w-full left-0 top-0 scale-0 z-0 bottom-0 pointer-events-none rounded-full group-hover:scale-100 transform duration-300'></div>
            <IoMailOutline size={24} />
          </a>
          <a
            href='http://'
            className='bg-orange-50 text-orange-400 p-2 rounded-full relative group hover:text-black'>
            <div className='bg-black/30 absolute w-full left-0 top-0 scale-0 z-0 bottom-0 pointer-events-none rounded-full group-hover:scale-100 transform duration-300'></div>
            <IoLogoFacebook size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
