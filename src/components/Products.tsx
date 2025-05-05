import React from 'react';
import Image from 'next/image';
import hero1 from '@/assets/pasopati assets/used9.png';
import hero2 from '@/assets/pasopati assets/used10.png';
import hero3 from '@/assets/pasopati assets/used16.png';

const Products = () => {
  return (
    <div className='bg-white pb-8' id='products'>
      <section className='pt-36 md:pt-24 py-18 flex flex-col items-center max-w-[1440px] px-6 lg:mx-auto'>
        {/* Header */}
        <div className='flex flex-col w-full'>
          <div>
            <h2 className="text-4xl font-semibold text-black">
              Produk & Layanan Kami
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className='mt-6 md:mt-12 flex flex-col md:flex-row items-stretch justify-between gap-12 w-full'>
          {/* Image Section */}
          <div className='md:w-5/12 xl:w-4/12 hidden md:grid grid-cols-2 gap-6 h-full'>
            <div className='w-full h-[400px]'>
              <Image src={hero1} alt="Pembangunan Infrastruktur" className='rounded-xl shadow-lg w-full h-full object-cover' />
            </div>
            <div className='w-full h-[400px]'>
              <Image src={hero2} alt="Pemeliharaan Sistem" className='rounded-full shadow-lg w-full h-full object-cover' />
            </div>
            <div className='col-span-2 w-full h-[300px]'>
              <Image src={hero3} alt="Solusi Teknologi" className='rounded-xl shadow-lg w-full h-full object-cover' />
            </div>
          </div>

          {/* Text Section */}
          <div className='w-full md:w-7/12 flex flex-col justify-between min-h-max'>
            <div className='flex-1 flex flex-col gap-4 justify-start w-full'>
              <h3 className='font-medium text-2xl xl:text-3xl text-[#3D3D3D] mt-4'>Pembangunan Infrastruktur Telekomunikasi</h3>
              <p className='text-gray-600 text-lg border-b border-[#DEDEDE] pb-5'>
                Penyediaan dan pembangunan infrastruktur telekomunikasi untuk berbagai sektor, khususnya di lingkungan pemerintahan dan pemasyarakatan.
              </p>
            </div>
            <div className='flex-1 flex flex-col justify-start gap-4 w-full'>
              <h3 className='font-medium text-2xl xl:text-3xl text-[#3D3D3D] mt-4'>Pemeliharaan dan Perawatan Sistem Telekomunikasi</h3>
              <p className='text-gray-600 text-lg border-b border-[#DEDEDE] pb-5'>
                Penyediaan dan pembangunan infrastruktur telekomunikasi untuk berbagai sektor, khususnya di lingkungan pemerintahan dan pemasyarakatan.
              </p>
            </div>
            <div className='flex-1 flex flex-col justify-start gap-4 w-full'>
              <h3 className='font-medium text-2xl xl:text-3xl text-[#3D3D3D] mt-4'>Solusi Teknologi Informasi</h3>
              <p className='text-gray-600 text-lg border-b border-[#DEDEDE] pb-5'>
                Pengembangan dan implementasi solusi teknologi informasi, termasuk sistem manajemen data, komunikasi internal, dan sistem keamanan berbasis teknologi.
              </p>
            </div>
            <div className='flex-1 flex flex-col justify-start gap-4 w-full'>
              <h3 className='font-medium text-2xl xl:text-3xl text-[#3D3D3D] mt-4'>Integrated Wartelsus dan Video CCTV</h3>
              <p className='text-gray-600 text-lg pb-5'>
                Pengembangan dan penyediaan sistem komunikasi dan pengawasan di lingkungan pemasyarakatan, seperti wartel khusus (Wartelsus) dan integrasi sistem video CCTV untuk meningkatkan keamanan dan pengawasan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;