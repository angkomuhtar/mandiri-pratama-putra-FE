import React, { useEffect, useRef, useState } from "react";
import { IoChevronDownCircle } from "react-icons/io5";

const SelectBox = ({ items, onClickOutside }) => {
  const ref = useRef(null);
  const [selected, setSelected] = useState(items[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick, true);
    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  return (
    <div className='relative' ref={ref}>
      <div
        className='flex justify-between items-center border border-gray-500 p-5 rounded-sm'
        onClick={() => setOpen(!open)}>
        <span className='text-gray-600 font-semibold'>{selected}</span>
        <IoChevronDownCircle
          size={20}
          className={`text-slate-500 ${
            open ? "rotate-180" : ""
          } transition duration-300`}
        />
      </div>
      <ul
        className={`${
          open ? "absolute" : "hidden"
        } bg-white w-full border border-slate-200 rounded-sm mt-0.5 max-h-44 overflow-y-auto transition duration-300 z-10`}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              setSelected(item);
              setOpen(false);
            }}
            className={`p-4 hover:bg-slate-500/30 ${
              selected == item && "font-semibold"
            }`}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectBox;
