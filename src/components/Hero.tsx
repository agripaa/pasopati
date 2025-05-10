import Image from 'next/image';
import React from 'react';
import hero1 from '@/assets/pasopati assets/used1.png';
import hero2 from '@/assets/pasopati assets/used8.png';
import hero3 from '@/assets/pasopati assets/used5.png';

const Hero = () => {
    return (
      <section className="pt-18 md:pt-24 lg:pt-36 py-24 flex-col-reverse flex md:flex-row items-center justify-around md:justify-between min-h-screen px-6 lg:max-w-[1440px] lg:mx-auto">
        {/* Bagian Kiri (Teks) */}
        <div className="mt-12 md:mt-0 md:w-6/12 w-full flex flex-col gap-6">
          <div className='w-full'>
            <p className="text-[#639DF7] max-w-max px-4 hidden md:block md:px-2 text-lg bg-[#E7F0FD] text-center font-normal rounded-md py-1">
                PT. Pasopati Nusantara
            </p>
          </div>
          <h2 className="text-[2.7rem] lg:text-6xl font-semibold text-[#2B313B]">Kreativitas Tanpa Batas</h2>
          <p className=" text-[#2B313B] text-base lg:text-lg font-light">
            <span className='font-semibold text-[#639DF7]'>PT. Pasopati Nusantara</span> adalah perusahaan yang berdiri secara resmi pada tanggal 8 April 2005.
            Sejak awal berdirinya, PT Pasopati Nusantara telah aktif bergerak dalam berbagai sektor, seperti
            pembangunan, perdagangan besar, industri, serta layanan teknologi informasi dan komunikasi.
          </p>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="relative md:w-6/12 w-full flex items-center justify-center h-full">
          <div className="absolute bottom-[-20%] md:bottom-[-20%] left-[10%] md:left-6 xl:left-30 w-[23%] md:w-[26%] z-10 h-full">
            <Image src={hero1} alt="Gambar 1" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full h-[300px] md:h-[450px] object-cover" />
          </div>

          <div className="relative w-[23%] md:w-[25%] z-20 xl:left-15 h-full">
            <Image src={hero2} alt="Gambar 2" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full object-cover h-[300px] md:h-[450px]" />
          </div>

          {/* Gambar 3 (Atas Kanan) */}
          <div className="absolute top-[-20%] md:top-[-20%] right-[10%] md:right-6 xl:right-0 w-[23%] md:w-[25%] z-10">
            <Image src={hero3} alt="Gambar 3" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full object-cover h-[300px] md:h-[450px]" />
          </div>
        </div>
      </section>
    );
};

export default Hero;