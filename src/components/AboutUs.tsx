"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import dum1 from "@/assets/pasopati assets/used2.JPG";
import dum2 from "@/assets/pasopati assets/used4.JPG";
import dum3 from "@/assets/pasopati assets/used7.JPG";

const AboutUs = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".timeline-item");
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setVisibleSections(prev => {
            if (!prev.includes(index)) {
              return [...prev, index];
            }
            return prev;
          });
        } else {
          setVisibleSections(prev => prev.filter(i => i !== index));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='bg-white pb-8' id='about'>
      <section className='pt-6 md:pt-40 py-18 flex flex-col items-center max-w-[1440px] px-6 lg:mx-auto'>
        {/* Header */}
        <div className='flex flex-col w-full justify-center items-center'>
          <div className='flex w-auto'>
            <p className="text-[#639DF7] max-w-max px-4 bg-[#E7F0FD] text-center font-normal rounded-md py-2">
              About Us
            </p>
          </div>
          <h2 className="text-[2rem] font-semibold text-black text-center">
            Cerita Kami
          </h2>
        </div>

        {/* Timeline */}
        <div className='mt-12 w-full flex flex-col gap-10 border-l-4 border-[#639DF7] pl-6 relative'>
          {[{
            year: "2005",
            title: "Kami Berdiri Secara Resmi",
            subtitle: "PT Pasopati Nusantara adalah perusahaan yang berdiri secara resmi pada tanggal 8 April 2005.",
            content: "PT Pasopati Nusantara adalah perusahaan yang berdiri secara resmi pada tanggal 8 April 2005. Sejak awal berdirinya, PT Pasopati Nusantara telah aktif bergerak dalam berbagai sektor, seperti pembangunan, perdagangan besar, industri, serta layanan teknologi informasi dan komunikasi.",
            img: dum1
          }, {
            year: "2008",
            title: "Menjalin Kerjasama",
            subtitle: "Pada tahun 2008, PT Pasopati Nusantara menjalin kerjasama yang strategis dengan PT Telkom Indonesia dalam penyediaan sarana dan pemeliharaan telekomunikasi.",
            content: "Kerjasama ini difokuskan pada lingkungan Unit Pelaksana Teknis Pemasyarakatan, Direktorat Jenderal Pemasyarakatan, yang menjadi langkah awal PT Pasopati Nusantara dalam memperkuat posisinya sebagai penyedia solusi teknologi komunikasi untuk sektor publik di Indonesia.",
            img: dum2
          }, {
            year: "2012",
            title: "Mengembangkan Telekomunikasi",
            subtitle: "PT Pasopati Nusantara melanjutkan komitmennya dalam mengembangkan sektor telekomunikasi dan teknologi informasi di Indonesia.",
            content: "Pada tahun ini, perusahaan ini berperan dalam peningkatan teknologi telekomunikasi dan informasi, khususnya dengan mengimplementasikan Integrated Wartelsus (wartel khusus untuk lingkungan pemasyarakatan) dan Integrated Video CCTV di Kantor Pusat Direktorat Jenderal Pemasyarakatan. Inisiatif ini menjadi tonggak penting bagi perusahaan dalam mendukung keamanan dan efisiensi operasional di lingkungan pemasyarakatan Indonesia.",
            img: dum3
          }].map((item, index) => (
            <div key={index} className={`timeline-item flex flex-col md:flex-row items-start gap-6 opacity-0 transition-opacity duration-700 ease-in-out ${visibleSections.includes(index) ? 'opacity-100' : ''}`}>
              {/* Bullet Circle */}
              <div className='absolute left-[-18px] w-8 h-8 bg-[#639DF7] rounded-full'></div>
              <span className='text-xl font-bold text-[#2B313B]'>{item.year}</span>
              <div className='flex flex-col md:flex-row items-start gap-6 bg-white shadow-md p-6 rounded-lg w-full border border-gray-200'>
              <Image
                src={item.img}
                alt={item.year}
                className="rounded-lg w-full h-[120px] md:w-[220px] md:h-[220px] object-cover shrink-0"
              />
                <div className='flex flex-col gap-4 xl:gap-6'>
                    <span className='border-l-4 border-[#639DF7] pl-3 py-0 flex flex-col gap-1'>                        
                        <h3 className='font-semibold text-2xl text-[#2B313B]'>{item.title}</h3>
                        <p className='text-gray-600 text-md font-medium md:w-10/12'>{item.subtitle}</p>
                    </span>
                  <p className='text-gray-600 text-lg md:w-11/12'>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;