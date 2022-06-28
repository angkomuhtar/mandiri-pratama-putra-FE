import Image from "next/image";
import React from "react";

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-5'>
      <div className='shadow-md border-gray-100 border p-5'>
        <div className='px-10'>
          <Image src={img} alt='' width={500} height={450} />
        </div>
        <h2 className='text-lg font-bold text-center my-4'>{title}</h2>
        <p className='font-light text-sm text-center px-2 pb-3'>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
