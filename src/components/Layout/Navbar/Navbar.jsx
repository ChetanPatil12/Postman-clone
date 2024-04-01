import React from 'react';

// import './navbar.css'

export default function Navbar() {
  return (
    <div className='absolute w-full  bg-[#fcfef1] flex items-center justify-center gap-2'>
      <img className='w-[60px] mt-2 ' src={process.env.PUBLIC_URL+"/logo.jpeg"} alt="logo" />
      <p className='font-bold text-2xl mt-2 text-orange-400'>POSTMAN</p>
    </div>
  );
}
