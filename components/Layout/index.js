import React, { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import InputForm from "../elements/InputForm";

const Index = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modal, setModal] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const handleOutside = (e) => {
    if (e.target === document.querySelector("#modal")) {
      setModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleOutside);
    return () => {
      window.removeEventListener("click", handleOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);
  return (
    <>
      <main className='relative'>
        <Navbar offsetY={scrollPosition} />
        {children}
        <div
          id='modal'
          className={`fixed flex left-0 top-0 bottom-0 right-0 bg-black/40 justify-end items-end transition ease-in-out delay-500 z-20 ${
            modal ? "visible" : "hidden"
          }`}>
          <div className='bg-white w-80 rounded-sm mb-[98px] mr-16 shadow-sm shadow-orange-300/40'>
            <div
              className={`p-4 transition-all ease-in-out delay-500  ${
                modal ? "visible" : "hidden"
              }`}>
              <div className='border-b border-b-gray-400 pb-2'>
                <h2 className='font-medium'>Chat Bersama Kami</h2>
              </div>
              <div className='space-y-4 pt-4'>
                <InputForm display='Nama' name='name' />
                <InputForm display='Phone' name='name' />
                <InputForm display='Alamat' name='name' />
                <InputForm display='Product' name='name' />
                <button className='bg-orange-500 w-full p-4 rounded-sm text-white'>
                  Mulai Percakapan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed w-auto bottom-10 right-10 flex z-30'>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault();
              setModal(!modal);
            }}
            className='p-3 cursor-pointer bg-orange-500 shadow-md shadow-orange-300/50 rounded-full'>
            <IoLogoWhatsapp size={28} color='#fff' />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
