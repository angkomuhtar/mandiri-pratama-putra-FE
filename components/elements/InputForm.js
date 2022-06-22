import React from "react";

const InputForm = ({ name, display }) => {
  return (
    <div className='relative flex flex-1'>
      <input
        type='text'
        name={name}
        id=''
        required='required'
        className='flex-1 peer bg-transparent outline-none border border-slate-600 valid:border-green-600 p-4 text-orange-600 text-sm rounded-l-sm'
      />
      <span className=' pointer-events-none p-4 transform duration-200 absolute left-0 text-sm text-orange-600/70 peer-valid:input-form-active'>
        {display}
      </span>
    </div>
  );
};

export default InputForm;
