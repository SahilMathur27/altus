"use client";

import Link from "next/link";
import { useState } from "react";
import Popup from "./Popup";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openPop, setOpenPop] = useState(false)

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/AboutUs",
    },
    {
      name: "Products",
      link: "#products",
    },
     {
      name: "Blogs",
      link: "/Blogs",
    },
    {
      name: "Contact Us",
      link: "/Contact",
    },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      {/* Navbar Container */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-xl font-bold text-black sm:text-2xl"
        >
          Logo
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-blue-600 lg:text-base"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-100 lg:px-5">
            Login
          </button>

          <button
           onClick={() => setOpenPop(true)}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white 
            transition hover:bg-blue-700 lg:px-5"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <span className="text-xl leading-none">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 md:hidden ${isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 py-5 sm:px-6">

          {/* Mobile Links */}
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 py-3 text-base font-medium text-gray-700 transition hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full rounded-lg border border-gray-300 px-5 py-3 text-gray-700 transition hover:bg-gray-100"
            >
              Login
            </button>

            <button onClick={() => setOpenPop(true)}
              // onClick={() => setIsMobileMenuOpen(false)} 

              className="w-full rounded-lg bg-blue-600 px-5 py-3 text-center
               text-white transition hover:bg-blue-700"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
      <Popup openPop={openPop} setOpenPop={setOpenPop} />
    </nav>
  );
}