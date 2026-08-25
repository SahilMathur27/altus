"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Products",
      link: "#products",
    },
    {
      name: "Contact Us",
      link: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex  w-full md:max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-black"
        >
          Logo
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center md:gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-700 transition hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-gray-300 px-5 py-2 text-gray-700 transition hover:bg-gray-100">
            Login
          </button>

          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 transition hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg border border-gray-300 px-5 py-2 text-gray-700"
              >
                Login
              </button>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full rounded-lg bg-blue-600 px-5 py-2 text-center text-white"
              >
                Get a Quote
              </a>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}