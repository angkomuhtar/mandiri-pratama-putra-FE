import Head from "next/head";
import { useEffect, useState } from "react";
import SelectBox from "../components/elements/SelectBox";
import FindBox from "../components/layouts/FindBox";
import Hero from "../components/layouts/Hero";
import Navbar from "../components/layouts/Navbar";
import { IoPlay } from "react-icons/io5";
import Image from "next/image";

import img1 from "../public/21.png";
import img2 from "../public/22.png";
import img3 from "../public/23.png";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>MPP Property</title>
        <meta name='description' content='Mandiri Pratama Putra' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='relative'>
        <Navbar offsetY={scrollPosition} />
        <Hero />
        <FindBox />
        <div className='container py-14 flex grid-cols-2 justify-center item-center flex-wrap'>
          <div className='basis-full flex flex-col justify-center items-center space-y-4'>
            <div className='rounded-full bg-orange-400/40 px-4 py-1'>
              <p className='font-light text-sm'>Our Service</p>
            </div>
            <h2 className='text-center font-extrabold font-poppins text-2xl capitalize'>
              keunggulan Utama kami
            </h2>
          </div>
          <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-5'>
            <div className='shadow-md border-gray-100 border p-5'>
              <div className='px-10'>
                <Image src={img1} alt='' width={500} height={500} />
              </div>
              <h2 className='text-lg font-bold text-center my-4'>
                Harga Terjangkau
              </h2>
              <p className='font-light text-sm text-center px-2 pb-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                commodi perferendis
              </p>
            </div>
          </div>
          <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-5'>
            <div className='shadow-md border-gray-100 border p-5'>
              <div className='px-10'>
                <Image src={img2} alt='' width={500} height={500} />
              </div>
              <h2 className='text-lg font-bold text-center my-4'>
                Harga Terjangkau
              </h2>
              <p className='font-light text-sm text-center px-2 pb-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                commodi perferendis
              </p>
            </div>
          </div>
          <div className='basis-full sm:basis-1/2 lg:basis-1/3 p-5'>
            <div className='shadow-md border-gray-100 border p-5'>
              <div className='px-10'>
                <Image src={img3} alt='' width={500} height={500} />
              </div>
              <h2 className='text-lg font-bold text-center my-4'>
                Harga Terjangkau
              </h2>
              <p className='font-light text-sm text-center px-2 pb-3'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                commodi perferendis
              </p>
            </div>
          </div>
        </div>
        <div className='bg-home bg-fixed bg-center bg-no-repeat h-56 flex justify-center items-center'>
          <button className='relative '>
            <div className='h-14 w-14 rounded-full bg-orange-400 animate-ping absolute top-0'></div>
            <div className='h-14 w-14 flex justify-center items-center animate-none bg-orange-600 rounded-full cursor-pointer text-white'>
              <IoPlay size={24} />
            </div>
          </button>
        </div>
        <div className='bg-white h-96'></div>
      </main>
    </div>
  );
}
