import Link from "next/link";
import React from "react";

const NavMenu = ({ text, path }) => {
  return (
    <li className='flex flex-col justify-between items-start md:items-center'>
      <div className='group'>
        <Link href={path}>
          <a href='#' className='font-semibold text-md text-white mb-2'>
            {text}
          </a>
        </Link>
        <div
          className={`h-0.5 bg-blue-600 group-hover:w-full transform duration-300 w-0`}></div>
      </div>
    </li>
  );
};

export default NavMenu;
