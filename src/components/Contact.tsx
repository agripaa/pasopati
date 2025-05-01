import React from 'react';
import { RiMapPin2Fill, RiWhatsappLine, RiMailCheckLine, RiPhoneFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <section className="pt-6 md:pt-40 py-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 min-h-[400px]" id='contact'>
        
    {/* Bagian Kiri - Informasi Kontak */}
    <div className="flex flex-col gap-4 h-full flex-1">
      <div className="flex w-auto">
        <p className="text-[#639DF7] max-w-max px-4 bg-[#E7F0FD] text-center rounded-md py-2">
          Contact Us
        </p>
      </div>
      <h2 className="text-3xl font-semibold text-black text-left">
        Hubungi Kami
      </h2>
      <div className='flex w-4/5'> 
        <RiMapPin2Fill className="text-[#3882F5] text-xl shrink-0 mr-4" />
        <p className="text-gray-700 text-md">
            Jl.Raya Gempol Kavling II No.19, RT.006/002, Gempol Kel, Ceger, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820
        </p>
      </div>
        <div className='flex'> 
            <RiPhoneFill className="text-[#3882F5] text-xl shrink-0 mr-4" />
            <p className="text-gray-700 text-md">02138853070</p>
        </div>

      {/* Card Kontak - Dibuat Sejajar */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 h-auto">
        {/* Nomor Telepon */}
        <div className="flex flex-col justify-between bg-white rounded-2xl p-4 w-full md:w-1/2 border border-[#DAE5EB] gap-4">
          <div className="flex items-center gap-2">
            <div className='flex justify-center bg-[#E7F0FD] p-2 rounded-full mr-2'>
                <RiWhatsappLine className="text-black text-xl" />
            </div>
            <div className='flex flex-col'>
              <h3 className="text-md font-semibold text-black">Nomor Telepon</h3>
              <p className="text-gray-700 text-sm mt-1">+62-822-1144-9515</p>
            </div>
          </div>
          <button className="mt-auto text-black bg-[#E7F0FD] px-4 py-2 rounded-xl w-full">
            Chat Via WhatsApp
          </button>
        </div>

        {/* Email */}
        <div className="flex flex-col bg-white rounded-2xl p-4 w-full md:w-1/2 border border-[#DAE5EB] gap-4">
          <div className="flex items-center gap-2">
            <div className='flex justify-center bg-[#E7F0FD] p-2 rounded-full mr-2'>
                <RiMailCheckLine className="text-black text-xl" />
            </div>
            <div className='flex flex-col'>
                    <h3 className="text-md font-semibold text-black">Email</h3>
                    <p className="text-gray-700 text-sm mt-1">corporate@pasopatinusantraa.com</p>
                </div>
          </div>
          <button className="mt-auto text-black bg-[#E7F0FD] px-4 py-2 rounded-lg w-full">
            Contact Via Email
          </button>
        </div>
      </div>
    </div>

    {/* Bagian Kanan - Google Maps (Menyesuaikan Tinggi Konten Kiri) */}
    <div className="w-full rounded-lg overflow-hidden shadow-md flex-1 h-full">
      <iframe
        title="Google Maps"
        className="w-full h-full min-h-[200px] rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6156729574445!2d106.89090287601562!3d-6.314112143675262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed41170e8f15%3A0x7fd1e721906c6a50!2sJl.%20Kav.%20II%20No.19%2C%20RT.6%2FRW.2%2C%20Ceger%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013820!5e0!3m2!1sid!2sid!4v1742962394826!5m2!1sid!2sid"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  </section>

  )
}

export default Contact