import React from "react";

const FooterNav = ({ text }) => {
  return (
    <li>
      <a
        href=''
        className='text-white font-light text-sm hover:text-orange-600 hover:ml-3 transform duration-150'>
        {text}
      </a>
    </li>
  );
};

export default FooterNav;
