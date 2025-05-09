"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiInformationLine, RiShoppingBag3Line, RiGroupLine, RiPhoneLine } from "react-icons/ri";
import logo from "@/assets/pasopati.png";
import Link from "next/link"; // Import Link from next/link

const Navbar = () => {
  const pathname = usePathname();

  // Daftar menu navbar
  const navLinks = [
    { href: "/", label: "Beranda", icon: <RiHome2Line size={24} /> },
    { href: "/#about", label: "Tentang Kami", icon: <RiInformationLine size={24} /> },
    { href: "/#products", label: "Produk Kami", icon: <RiShoppingBag3Line size={24} /> },
    { href: "/#service", label: "Layanan Kami", icon: <RiGroupLine size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 md:top-0 left-0 w-full z-50 pointer-events-none">
      <div className="bg-white pointer-events-auto shadow-md">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-6 ">
          {/* Logo hanya tampil di desktop */}
          <Image src={logo} alt="logo" className="hidden md:block md:w-[150px]" />

          {/* Navbar Desktop */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  passHref
                  className={`font-normal text-[#7D91AE] hover:text-black transition-all duration-300 md:text-sm lg:text-base ${
                    pathname === link.href ? "text-black font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#639DF7] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                passHref
                className="text-[#639DF7] bg-[#E7F0FD] md:px-3 md:py-2 lg:px-6 lg:py-4 rounded-2xl md:text-xs lg:text-base font-medium transition-all duration-300 hover:bg-[#b7c9e1]"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Mobile */}
      <ul className="flex md:hidden justify-around items-center bg-white shadow-lg py-3 fixed bottom-0 w-full pointer-events-auto">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              passHref
              className={`flex flex-col items-center text-[#7D91AE] hover:text-black transition-all duration-300 ${
                pathname === link.href ? "text-black font-semibold" : ""
              }`}
            >
              {link.icon}
              <span className="text-xs mt-1">{link.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            passHref
            className="flex flex-col items-center text-[#639DF7] bg-[#E7F0FD] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-[#b7c9e1]"
          >
            <RiPhoneLine size={24} />
            <span className="text-xs mt-1">Hubungi</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
