import React from 'react';
import {
  RiTimeLine,
  RiLandscapeLine,
  RiLightbulbFlashLine,
  RiShieldCheckLine
} from 'react-icons/ri';

const Services = () => {
  return (
    <div className='bg-white pb-8' id='service'>
      <section className='md:pt-24 py-18 flex flex-col items-center max-w-[1440px] px-6 lg:mx-auto'>
        {/* Header */}
        <div className='flex flex-col w-full'>
          <h2 className="text-5xl md:text-6xl font-semibold text-black">
            Kelebihan Layanan Kami
          </h2>
        </div>

        {/* Content */}
        <div className='mt-6 md:mt-12 flex flex-col md:flex-row items-stretch justify-between gap-12 w-full'>
          <div className='w-full flex flex-col justify-between min-h-max'>

            {/* Pengalaman */}
            <div className='flex items-start mt-4 gap-8'>
              <div className=' bg-[#E7F0FD] w-16 h-16 flex justify-center items-center shrink-0 rounded-full'>
                <RiTimeLine className="text-[#3882F5]" size={45} />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-xl md:text-3xl text-[#3D3D3D]'>Lebih dari 20 Tahun Pengalaman</h3>
                <p className='text-gray-800 text-xl pb-5'>
                  Dengan pengalaman lebih dari 20 tahun, PT Pasopati Nusantara memiliki rekam jejak yang kuat
                  dalam menyelesaikan proyek-proyek besar di bidang telekomunikasi, teknologi informasi, dan pembangunan.
                </p>
              </div>
            </div>

            {/* Kemitraan */}
            <div className='flex items-start mt-4 gap-8'>
              <div className=' bg-[#E7F0FD] w-16 h-16 flex justify-center items-center shrink-0 rounded-full'>
                <RiLandscapeLine className="text-[#3882F5]" size={45} />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-xl md:text-3xl text-[#3D3D3D]'>Kemitraan Strategis</h3>
                <p className='text-gray-800 text-xl pb-5'>
                  Kami telah menjalin hubungan kemitraan yang sukses dengan berbagai perusahaan besar
                  seperti PT Telkom Indonesia, serta lembaga pemerintah seperti Direktorat Jenderal Pemasyarakatan.
                </p>
              </div>
            </div>

            {/* Inovasi */}
            <div className='flex items-start mt-4 gap-8'>
              <div className=' bg-[#E7F0FD] w-16 h-16 flex justify-center items-center shrink-0 rounded-full'>
                <RiLightbulbFlashLine className="text-[#3882F5]" size={45} />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-xl md:text-3xl text-[#3D3D3D]'>Solusi Teknologi Inovatif</h3>
                <p className='text-gray-800 text-xl pb-5'>
                  Kami selalu berfokus pada inovasi untuk memberikan solusi yang dapat memenuhi kebutuhan
                  industri dan sektor pemerintahan dalam hal telekomunikasi dan teknologi informasi.
                </p>
              </div>
            </div>

            {/* Keamanan */}
            <div className='flex items-start mt-4 gap-8'>
              <div className=' bg-[#E7F0FD] w-16 h-16 flex justify-center items-center shrink-0 rounded-full'>
                <RiShieldCheckLine className="text-[#3882F5]" size={45} />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-xl md:text-3xl text-[#3D3D3D]'>Keamanan dan Keandalan</h3>
                <p className='text-gray-800 text-xl pb-5'>
                  Semua sistem dan solusi yang kami tawarkan dirancang untuk memastikan tingkat keamanan
                  dan keandalan yang tinggi, terutama dalam sektor yang membutuhkan pengawasan dan pengelolaan informasi yang sensitif.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
