import React from "react";

const DescSection = ({ children, title, ContainerStyle = "" }) => {
  return (
    <div className={ContainerStyle}>
      <h2 className='font-semibold text-2xl border-l-2 border-orange-500 pl-4 capitalize'>
        {title}
      </h2>
      <div className='py-2'>{children}</div>
    </div>
  );
};

export default DescSection;
