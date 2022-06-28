import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

import Photo from "../../public/property.jpg";

const ProductCard = ({ title, location, path }) => {
  return (
    <a
      href={path}
      className='w-full flex flex-col hover:scale-105 transform duration-200 cursor-pointer shadow-md shadow-gray-500/20'>
      <div className='relative aspect-[4/2]'>
        <Image
          alt=''
          src={Photo}
          layout='fill'
          className='object-cover rounded-t-md'
        />
        <div className='flex justify-center items-center absolute pointer-events-none top-0 bottom-0 left-0 right-0 bg-black/30 rounded-md'></div>
      </div>
      <div className='p-4 space-y-4'>
        <div className='flex space-x-3 text-orange-500'>
          <IoLocationOutline size={18} />
          <h2 className='font-light text-sm'>{location}</h2>
        </div>
        <h2 className='font-light text-lg text-left'>{title}</h2>
      </div>
    </a>
  );
};

export default ProductCard;
