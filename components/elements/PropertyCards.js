import Image from "next/image";
import React from "react";
import {
  IoBedOutline,
  IoLocationOutline,
  IoHomeOutline,
  IoSquareOutline,
} from "react-icons/io5";
import { BiBath } from "react-icons/bi";

const PropertyCards = ({
  img,
  title,
  location,
  room,
  bath,
  land,
  building,
}) => {
  return (
    <div className='bg-white group rounded-md max-w-md cursor-pointer relative'>
      <Image
        src={img}
        alt=''
        width={500}
        height={400}
        className='rounded-t-md object-cover'
      />
      <div className='p-5'>
        <h2 className='text-sm font-light text-left flex items-center'>
          <IoLocationOutline size={15} className='mr-2' />
          {location}
        </h2>
        <p className='my-5 font-bold text-xl'>{title}</p>
        <div className='grid grid-cols-2 gap-2'>
          {room && (
            <p className='font-light text-xs flex items-center'>
              <IoBedOutline size={16} className='mr-2' /> {room} Kamar
            </p>
          )}
          {bath && (
            <p className='font-light text-xs flex items-center'>
              <BiBath size={16} className='mr-2' /> {bath} Toilet
            </p>
          )}
          {building && (
            <p className='font-light text-xs flex items-center'>
              <IoHomeOutline size={16} className='mr-2' />
              {building} m2 LB
            </p>
          )}

          {land && (
            <p className='font-light text-xs flex items-center'>
              <IoSquareOutline size={16} className='mr-2' />
              {land} m2 LT
            </p>
          )}
        </div>
      </div>
      <div className='rounded-l-full h-1 w-0 bg-orange-500 group-hover:w-3/4 transform duration-300'></div>
    </div>
  );
};

export default PropertyCards;
