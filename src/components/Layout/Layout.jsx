import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-[#fcfef1]'>
        <div className='flex max-w-6xl sm:px-14 md:px-28 min-h-screen pt-[86px] mx-auto px-5 '>
          <div className='mx-auto w-full mt-8'>{children}</div>
        </div>
      </main>
    </>
  );
}
