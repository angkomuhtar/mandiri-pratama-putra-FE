import Image from "next/image";
import React from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className='bg-slate-900'>
        <div className='container py-10 grid md:grid-cols-3'>
          <div className='space-y-3'>
            <Image src='/mppLogo.png' width={75} height={35} alt='' />
            <p className='text-sm font-light text-left flex items-center text-white leading-snug'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quis recusandae voluptatibus facere placeat provident
            </p>

            <div className='space-y-5'>
              <p className='text-sm font-light text-left flex items-center text-white'>
                <IoLocationOutline size={15} className='mr-2' />
                Makassar, Bumi Findaria Mas 2
              </p>
              <p className='text-sm font-light text-left flex items-center text-white'>
                <IoCallOutline size={15} className='mr-2' />
                +62 812-1234-1234
              </p>
              <p className='text-sm font-light text-left flex items-center text-white'>
                <IoMailUnreadOutline size={15} className='mr-2' />
                email@email.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-600'>
        <div className='container py-4 flex justify-center flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between items-center flex-wrap'>
          <span className='text-white'>
            All Right Reserved @ PT. Mandiri Pratama Putra 2022
          </span>
          <span className='text-white'>
            Create by{" "}
            <a
              href='http://'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-orange-600'>
              AM
            </a>{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
