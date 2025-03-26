import React from 'react';
import { TbWorld } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className='bg-[#F8F9FA] py-4 md:py-6 rounded-xl mb-20 md:mb-0 mt-12'>
      <div className='max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-left gap-1'>
        {/* Left Side */}
        <div className='text-gray-600 text-sm flex items-center gap-2'>
          <span className='text-lg'><TbWorld /></span>
          <p>Indonesia</p>
        </div>
        
        {/* Center */}
        <p className='text-gray-600 text-sm'>2025 | All Right Reserved | Palapa Teknologi Komunikasi</p>
        
        {/* Right Side */}
        <div className='flex gap-6 text-gray-600 text-sm'>
          <a href='#' className='hover:underline'>Kebijakan Privasi</a>
          <a href='#' className='hover:underline'>Waspada Penipuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
