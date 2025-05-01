import React from 'react';
import Image from 'next/image';
import hero1 from '@/assets/pasopati assets/used12.JPG';
import hero2 from '@/assets/pasopati assets/used19.JPG';
import hero3 from '@/assets/pasopati assets/used20.JPG';
import { RiCheckboxCircleFill } from 'react-icons/ri';

const Services = () => {
  return (
    <div className='bg-white pb-8' id='service'>
      <section className='md:pt-24 py-18 flex flex-col items-center max-w-[1440px] px-6 lg:mx-auto'>
        {/* Header */}
        <div className='flex flex-col w-full'>
          <div>
            <div className='flex w-full'>
              <p className="text-[#639DF7] max-w-max px-4 bg-[#E7F0FD] text-center font-medium rounded-md py-2">
                Why Chose Us?
              </p>
            </div>
            <h2 className="text-[2rem] font-semibold text-black">
                Kelebihan Layanan Kami
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className='mt-6 md:mt-12 flex flex-col md:flex-row items-stretch justify-between gap-12 w-full'>
          {/* Image Section */}
          <div className="hidden relative md:w-6/12 xl:5/12 w-full md:flex items-center justify-start">
            {/* Gambar 1 (Bawah Kiri) */}
            <div className="absolute w-[27%] z-10">
                <Image src={hero1} alt="Gambar 1" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full h-[550px] object-cover" />
            </div>

            {/* Gambar 2 (Tengah - Monas) */}
            <div className="absolute md:top-[40%] xl:top-[30%] w-[27%] right-[42%] z-20">
                <Image src={hero2} alt="Gambar 2" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full h-[550px] object-cover" />
            </div>

            {/* Gambar 3 (Atas Kanan) */}
            <div className="absolute right-[10%] w-[27%] z-10">
                <Image src={hero3} alt="Gambar 3" className="rounded-full overflow-hidden shadow-lg shadow-gray-400 w-full h-[550px] object-cover" />
            </div>
          </div>

          {/* Text Section */}
          <div className='w-full md:w-6/12 flex flex-col justify-between min-h-max'>
            <div className='flex-1 flex flex-col gap-4 justify-start w-full'>
                <div className='flex items-start mt-4 gap-4'>
                    <div className=' bg-[#E7F0FD] w-8 h-8 flex justify-center items-center shrink-0 rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5]" size={20} /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-medium text-xl xl:text-2xl text-[#3D3D3D]'>Lebih dari 20 Tahun Pengalaman</h3>
                        <p className='text-gray-600 text-md pb-5'>
                        Dengan pengalaman lebih dari 20 tahun, PT Pasopati Nusantara memiliki rekam jejak yang kuat
                        dalam menyelesaikan proyek-proyek besar di bidang telekomunikasi, teknologi informasi, dan pembangunan.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-4 justify-start w-full'>
                <div className='flex items-start mt-4 gap-4'>
                    <div className=' bg-[#E7F0FD] w-8 h-8 flex justify-center items-center shrink-0 rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5]" size={20} /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-medium text-xl xl:text-2xl text-[#3D3D3D]'>Kemitraan Strategis</h3>
                        <p className='text-gray-600 text-md pb-5'>
                        Kami telah menjalin hubungan kemitraan yang sukses dengan berbagai perusahaan besar
                        seperti PT Telkom Indonesia, serta lembaga pemerintah seperti Direktorat Jenderal
                        Pemasyarakatan.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-4 justify-start w-full'>
                <div className='flex items-start mt-4 gap-4'>
                    <div className=' bg-[#E7F0FD] w-8 h-8 flex justify-center items-center shrink-0 rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5]" size={20} /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-medium text-xl xl:text-2xl text-[#3D3D3D]'>Solusi Teknologi Inovatif</h3>
                        <p className='text-gray-600 text-md pb-5'>
                        Kami selalu berfokus pada inovasi untuk memberikan solusi yang dapat memenuhi kebutuhan
                        industri dan sektor pemerintahan dalam hal telekomunikasi dan teknologi informasi.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-4 justify-start w-full'>
                <div className='flex items-start mt-4 gap-4'>
                    <div className=' bg-[#E7F0FD] w-8 h-8 flex justify-center items-center shrink-0 rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5]" size={20} /> 
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-medium text-xl xl:text-2xl text-[#3D3D3D]'>Keamanan dan Keandalan</h3>
                        <p className='text-gray-600 text-md pb-5'>
                        Semua sistem dan solusi yang kami tawarkan dirancang untuk memastikan tingkat keamanan
                        dan keandalan yang tinggi, terutama dalam sektor yang membutuhkan pengawasan dan pengelolaan informasi yang sensitif.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;