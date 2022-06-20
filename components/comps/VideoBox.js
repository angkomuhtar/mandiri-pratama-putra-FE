import React from "react";
import { IoPlay } from "react-icons/io5";

const VideoBox = () => {
  return (
    <div className='bg-home bg-fixed bg-center bg-no-repeat h-56 flex justify-center items-center'>
      <button className='relative '>
        <div className='h-14 w-14 rounded-full bg-orange-400 animate-ping absolute top-0'></div>
        <div className='h-14 w-14 flex justify-center items-center animate-none bg-orange-600 rounded-full cursor-pointer text-white'>
          <IoPlay size={24} />
        </div>
      </button>
    </div>
  );
};

export default VideoBox;
