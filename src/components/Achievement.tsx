import React from 'react';

const Achievement = () => {
  return (
    <div className='bg-white pb-8'>
      <section className='md:pt-24 py-18 flex flex-col items-center max-w-[1440px] px-6 lg:mx-auto'>
        {/* Header */}
        <div className='flex flex-col w-full'>
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold text-black">
                Capaian & Sinergi
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className='mt-6 md:mt-12 flex flex-col md:flex-row items-stretch justify-between gap-12 w-full'>
          {/* Text Section */}
            <div className='flex flex-col min-h-max w-full gap-8'>
              <div className='flex flex-1 flex-col gap-4'>
                <h3 className='border-l-4 border-[#639DF7] pl-4 py-2 lg:text-3xl md:text-lg/5 text-xl w-full font-semibold text-gray-800'>
                    Kerjasama dengan PT Telkom (2008)
                </h3>
                <p className='text-gray-700 text-xl'>
                    Pada tahun 2008, PT Pasopati Nusantara menjalin kerjasama dengan PT Telkom Indonesia untuk menyediakan dan memelihara sistem telekomunikasi di lingkungan Unit Pelaksana Teknis Pemasyarakatan, Ditjenpas. Kerjasama ini bertujuan untuk memastikan kelancaran komunikasi serta keamanan sistem telekomunikasi di sektor pemasyarakatan. Sebagai mitra strategis, PT Pasopati Nusantara berperan dalam pengelolaan infrastruktur telekomunikasi guna mendukung operasional yang efisien.
                </p>
              </div>

              <div className='flex flex-1 flex-col gap-4'>
                <h3 className='border-l-4 border-[#639DF7] pl-4 py-2 lg:text-3xl md:text-lg/5 text-xl w-full font-semibold text-gray-800'>
                    Peningkatan tekologi Telekomunikasi Dan Informasi (2012)
                </h3>
                <p className='text-gray-700 text-xl'>
                    Pada tahun 2012, PT Pasopati Nusantara memperluas kerjasamanya dengan Direktorat Jenderal Pemasyarakatan dengan fokus pada peningkatan teknologi telekomunikasi dan informasi. Salah satu inisiatif utamanya adalah penerapan Integrated Wartelsus, telepon khusus untuk lingkungan pemasyarakatan, serta Integrated Video CCTV di Kantor Pusat Ditjenpas. Proyek ini bertujuan untuk meningkatkan kualitas komunikasi danpengawasan, serta mendukung keamanan dan efisiensi operasional di seluruh sistem pemasyarakatan Indonesia.
                </p>
              </div>

              <div className='flex flex-col gap-4'>
                <h3 className='border-l-4 border-[#639DF7] pl-4 py-2 lg:text-3xl md:text-lg/5 text-xl w-full font-semibold text-gray-800'>
                    Penyediaan Sarana Telekomunikasi (2012)
                </h3>
                <p className='text-gray-700 text-xl'>
                Pada tahun yang sama, PT Pasopati Nusantara menunjuk PT Palapa Teknologi Indonesia sebagai
                pelaksana teknis dalam penyediaan sarana telekomunikasi di Direktorat Jenderal Pemasyarakatan.
                Langkah ini menjadikan PT Pasopati Nusantara sebagai Holding Company yang bertanggung jawab
                atas pengelolaan dan pengembangan solusi telekomunikasi di lingkungan pemasyarakatan, sekaligus
                memperkuat peran perusahaan sebagai penyedia solusi teknologi di sektor publik.
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;