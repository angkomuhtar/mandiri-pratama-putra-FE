import Image from "next/image";
import React from "react";
import {
  IoCallOutline,
  IoSendSharp,
  IoLocationOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";
import FooterNav from "../elements/FooterNav";

const Footer = () => {
  return (
    <footer>
      <div className='bg-slate-900'>
        <div className='container py-10 grid md:grid-cols-3 gap-5'>
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
          <div className='space-y-3 '>
            <h2 className='text-white font-semibold text-xl'>Company</h2>
            <ul className='space-y-3'>
              <FooterNav text='About' />
              <FooterNav text='All Products' />
              <FooterNav text='Location Maps' />
              <FooterNav text='Contact Us' />
            </ul>
          </div>
          <div className='space-y-3 '>
            <h2 className='text-white font-semibold text-xl'>Newsletter</h2>
            <p className='text-white capitalize font-thin text-sm'>
              Subscribe To receive our weekly update
            </p>
            <div className='relative flex'>
              <input
                type='text'
                name='email'
                id=''
                required='required'
                className='flex-1 peer bg-transparent outline-none border border-slate-600 valid:border-green-600 p-4 text-white text-sm rounded-l-sm'
              />
              <span className='input-label peer-valid:input-label-active'>
                Email
              </span>
              <button className='bg-green-600 text-white rounded-r-sm px-3 group'>
                <IoSendSharp
                  size={22}
                  className='group-hover:translate-x-1 group-hover:-translate-y-1  transform duration-300'
                />
              </button>
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
