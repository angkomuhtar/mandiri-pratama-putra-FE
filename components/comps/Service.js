import Image from "next/image";
import React from "react";
import img1 from "../../public/21.png";
import img2 from "../../public/22.png";
import img3 from "../../public/23.png";
import ServiceCard from "../elements/ServiceCard";
import ApiCall from "../../utils/ApiConfig";

const Service = ({ data }) => {
  console.log(process.env.NEXT_PUBLIC_IMG_URL);
  return (
    <div className='container py-14 flex grid-cols-2 justify-center item-center flex-wrap'>
      <div className='basis-full flex flex-col justify-center items-center space-y-4'>
        <div className='rounded-full bg-orange-400/40 px-4 py-1'>
          <p className='font-light text-sm'>Our Service</p>
        </div>
        <h2 className='text-center font-extrabold font-poppins py-5 text-2xl capitalize'>
          keunggulan Utama kami
        </h2>
      </div>
      {data.map((data, key) => (
        <ServiceCard
          img={`${process.env.NEXT_PUBLIC_IMG_URL}${data.attributes.img.data.attributes.url}`}
          title={data.attributes.title}
          desc={data.attributes.desc}
        />
      ))}
    </div>
  );
};

export default Service;
