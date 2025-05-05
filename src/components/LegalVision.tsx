import React from 'react';
import { RiFocus3Fill, RiFocus2Line, RiCheckboxCircleFill } from "react-icons/ri";

const LegalVision = () => {
  return (
    <section className="bg-[#F1F6FE] rounded-md py-12">
      <div className="max-w-[1440px] mx-auto text-center px-4 md:px-8">
        <div className="w-full flex flex-col items-center">
          <div className='flex justify-center w-full'>
          </div>
          <h2 className="text-2xl md:text-[2.5rem] font-semibold mt-4 text-[#3D3D3D]">
            Visi & Misi
          </h2>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-6 mt-12 w-full max-w-5xl">
            {/* Visi Kami */}
            <div className="flex items-center md:items-start bg-white rounded-lg p-6 shadow-md gap-6">
              <div className="w-12 h-12 hidden md:flex items-center justify-center bg-[#3882F5] text-white rounded-full shrink-0">
                <RiFocus3Fill size={28} />
              </div>
              <div className="text-left flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-gray-600">Visi Kami</h3>
                <p className="text-gray-700 text-sm md:text-lg">
                    Menjadi perusahaan terkemuka dalam penyediaan solusi teknologi dan komunikasi yang inovatif dan berkualitas
                    tinggi untuk sektor publik dan swasta, serta mendukung kemajuan infrastruktur Indonesia.
                </p>
              </div>
            </div>

            {/* Misi Kami */}
            <div className="flex items-center md:items-start bg-white rounded-lg p-6 shadow-md gap-6">
              <div className="w-12 h-12 hidden md:flex items-center justify-center bg-[#FF4255] text-white rounded-full shrink-0">
                <RiFocus2Line size={28} />
              </div>
              <div className="text-left flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-gray-600">Misi Kami</h3>
                <ul className="text-gray-700 mt-4 flex flex-col gap-4">
                  <li className="flex justify-between w-full text-sm md:text-lg pb-2">
                    <span className="flex items-start gap-2">
                      <div className='justify-center flex  bg-[#E7F0FD] p-[4px] rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5] shrink-0" size={25} /> 
                      </div>
                      Menyediakan layanan telekomunikasi dan teknologi informasi yang dapat meningkatkan
                      efisiensi, keamanan, dan kualitas operasional di berbagai sektor.
                    </span>
                  </li>
                  <li className="flex justify-between w-full text-sm md:text-lg pb-2">
                    <span className="flex items-start gap-2">
                      <div className='justify-center flex  bg-[#E7F0FD] p-[4px] rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5] shrink-0" size={25} /> 
                      </div>
                      Mengembangkan solusi berbasis teknologi yang mendukung pembangunan infrastruktur dan
                      komunikasi di sektor publik, terutama di lingkungan pemerintahan
                    </span>
                  </li>
                  <li className="flex justify-between w-full text-sm md:text-lg pb-2">
                    <span className="flex items-start gap-2">
                      <div className='justify-center flex  bg-[#E7F0FD] p-[4px] rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5] shrink-0" size={25} /> 
                      </div>
                      Berkolaborasi dengan mitra strategis untuk menciptakan sistem telekomunikasi yang lebih baik,
                      efisien, dan aman.
                    </span>
                  </li>
                  <li className="flex justify-between w-full text-sm md:text-lg pb-2">
                    <span className="flex items-start gap-2">
                      <div className='justify-center flex  bg-[#E7F0FD] p-[4px] rounded-full'>
                        <RiCheckboxCircleFill className="text-[#3882F5] shrink-0" size={25} /> 
                      </div>
                      Berkomitmen untuk memberikan layanan berkualitas tinggi dengan dukungan tim profesional
                      yang berpengalaman.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalVision;