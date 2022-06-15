import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PropertyCards from "../elements/PropertyCards";

import img1 from "../../public/hero.jpg";

const Latest = ({ view }) => {
  return (
    <div className='bg-stone-200 py-24'>
      <div className='basis-full flex flex-col justify-center items-center space-y-4'>
        <div className='rounded-full bg-orange-400/40 px-4 py-1'>
          <p className='font-light text-sm'>Latest Property</p>
        </div>
        <h2 className='text-center font-extrabold font-poppins py-10 text-2xl capitalize'>
          Properti Terbaru MPP
        </h2>
      </div>
      <div className='container'>
        <Swiper
          slidesPerView={view < 480 ? 1 : view < 987 ? 2 : 3}
          spaceBetween={view < 480 ? 10 : view < 987 ? 20 : 40}
          navigation={true}
          loop={true}
          modules={[Navigation]}>
          <SwiperSlide>
            <PropertyCards img={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCards img={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCards img={img1} />
          </SwiperSlide>
          <SwiperSlide>
            <PropertyCards img={img1} />
          </SwiperSlide>
        </Swiper>
        <div className='flex justify-center py-16'>
          <button className='py-4 px-7 group hover:border-l-4 hover:translate-x-2 transition-all duration-300 border-orange-600 bg-orange-600 hover:bg-black text-white font-semibold rounded-sm relative'>
            <div className='fixed top-0 left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full bg-black rounded-r-sm -z-10'></div>
            Lihat Semua Properti
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
