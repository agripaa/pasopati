import Image from 'next/image';
import React from 'react';
import hero1 from '@/assets/hero1.png';
import hero2 from '@/assets/hero2.png';
import hero3 from '@/assets/hero3.png';

const Hero = () => {
    return (
      <section className="pt-18 md:pt-24 lg:pt-36 py-24 flex-col-reverse flex md:flex-row items-center justify-around md:justify-between min-h-screen px-6 lg:max-w-[1440px] lg:mx-auto">
        {/* Bagian Kiri (Teks) */}
        <div className="md:mt-24 md:w-[45%] w-full flex flex-col gap-7">
          <div className='w-full'>
            <p className="text-[#639DF7] max-w-max px-4 md:px-2 md:text-base bg-[#E7F0FD] text-center font-normal rounded-md py-1">
                PT. Pasopati Nusantara
            </p>
          </div>
          <h2 className="text-4xl md:text-2xl lg:text-6xl font-medium text-[#2B313B]">Kreativitas Tanpa Batas</h2>
          <p className=" text-[#2B313B] text-sm lg:text-base font-light">
            <span className='font-medium text-[#639DF7]'>PT. Pasopati Nusantara</span> adalah perusahaan yang berdiri secara resmi pada tanggal 8 April 2005.
            Sejak awal berdirinya, PT Pasopati Nusantara telah aktif bergerak dalam berbagai sektor, seperti
            pembangunan, perdagangan besar, industri, serta layanan teknologi informasi dan komunikasi.
          </p>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="relative md:w-6/12 w-full flex items-center justify-center">
          {/* Gambar 1 (Bawah Kiri) */}
          <div className="absolute bottom-[-20%] left-6 xl:left-30 w-[25%] z-10">
            <Image src={hero1} alt="Gambar 1" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full" />
          </div>

          {/* Gambar 2 (Tengah - Monas) */}
          <div className="relative w-[25%] z-20 xl:left-15">
            <Image src={hero2} alt="Gambar 2" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full" />
          </div>

          {/* Gambar 3 (Atas Kanan) */}
          <div className="absolute top-[-20%] right-6 xl:right-0 w-[25%] z-10">
            <Image src={hero3} alt="Gambar 3" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full" />
          </div>
        </div>
      </section>
    );
};

export default Hero;