import Image from "next/image";
import React, { useState } from "react";
import NavList from "../elements/NavList";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import appLogo from "../../public/mppLogo.png";

function Navbar({ offsetY }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className={`bg-blue-300 ${
        offsetY > 140 ? "" : "md:bg-transparent"
      } py-3 z-10 fixed w-full`}>
      <div className='container flex justify-between items-center'>
        <div className=''>
          <Image src={appLogo} width={75} height={35} />
        </div>
        <nav className='' onClick={() => setMenuOpen(!menuOpen)}>
          <a href='#' className='text-white md:hidden'>
            {menuOpen ? <IoClose size={33} /> : <IoMenu size={33} />}
          </a>
          <ul
            className={`fixed left-0 right-0 min-h-screen bg-blue-300 mt-4 p-4 space-y-4 transform duration-300 place-items-start md:relative md:flex md:min-h-0 md:translate-x-0 md:space-y-0 md:space-x-5 md:bg-transparent ${
              menuOpen ? "" : "translate-x-full"
            } `}>
            <NavList text='Home' />
            <NavList text='About Us' />
            <NavList text='Products' />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
