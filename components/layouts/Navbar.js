import Image from "next/image";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import appLogo from "../../public/mppLogo.png";
import NavMenu from "../elements/NavMenu";

function Navbar({ offsetY }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={`bg-blue-300 ${
        offsetY > 140 ? "shadow-xl py-2" : "md:bg-transparent py-10"
      } z-10 fixed w-full transform duration-300`}>
      <div className='container flex justify-between items-center'>
        <div className=''>
          <Image src={appLogo} width={75} height={35} alt='' />
        </div>
        <nav className=''>
          <a
            href='#'
            className='text-white md:hidden'
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={33} /> : <IoMenu size={33} />}
          </a>
          <ul
            className={`fixed left-0 right-0 min-h-screen bg-blue-300 mt-4 p-4 transform duration-300 place-items-start md:mt-0 md:relative md:min-h-0 md:translate-x-0 md:bg-transparent ${
              menuOpen ? "" : "translate-x-full"
            } `}>
            <div className='container md:px-0 md:space-y-0 md:flex md:space-x-8 space-y-4'>
              <NavMenu text='Home' />
              <NavMenu text='About Us' />
              <NavMenu text='Products' />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
