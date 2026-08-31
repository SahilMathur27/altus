"use client";

import React from "react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#151515] text-white">

    <div className=" w-7xl flex flex-col md:flex-row mx-auto justify-between gap-10 py-5">

     
          <div >

            <a
              href="/"
              className="
                inline-block
                text-3xl
                font-semibold
                tracking-[-0.04em]
                text-white
              "
            >
              Digital marketing 
              <span className="text-[#c9a44c]">.</span>
            </a>

            <p className="
              mt-5
              max-w-sm
              text-sm
              leading-7
              text-white/45
            ">
              Grow Your Brand. Reach More Customers.
Turn Your Digital Presence Into Real Business Growth.
            </p>


            {/* Contact */}
            <div className="mt-7 space-y-4">

              <a
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-[#d2b45c]
                "
              >
                <FiMail
                  size={16}
                  className="text-[#c9a44c]"
                />

                elstrong@email.com
              </a>


              <a
                href="tel:+911234567890"
                className="
                  flex
                  items-center
                  gap-3
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-[#d2b45c]
                "
              >
                <FiPhone
                  size={16}
                  className="text-[#c9a44c]"
                />

                +91 12345 67890
              </a>


              <div className="
                flex
                items-start
                gap-3
                text-sm
                leading-6
                text-white/50
              ">
                <FiMapPin
                  size={16}
                  className="mt-1 shrink-0 text-[#c9a44c]"
                />

                <span>
                  New Delhi, India
                </span>
              </div>

            </div>


            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiInstagram size={16} />
              </a>


              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiFacebook size={16} />
              </a>


              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiLinkedin size={16} />
              </a>


              <a
                href="#"
                aria-label="YouTube"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-white/10
                  text-white/40
                  transition-all
                  duration-300
                  hover:border-[#c9a44c]
                  hover:bg-[#c9a44c]
                  hover:text-black
                "
              >
                <FiYoutube size={16} />
              </a>

            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}
          <div>

            <h3 className="
              mb-6
              text-[15px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d2b45c]
            ">
              Company
            </h3>

            <ul className="space-y-4">

              {[
                ["About Us", "/about"],
                ["Our Story", "/our-story"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
                ["Careers", "/careers"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/45
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}

                    <FiArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}
          <div>

            <h3 className="
              mb-6
              text-[15px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d2b45c]
            ">
              Solutions
            </h3>

            <ul className="space-y-4">

              {[
                ["LED Lighting", "/led-lighting"],
                ["Industrial Lighting", "/industrial-lighting"],
                ["Commercial Lighting", "/commercial-lighting"],
                ["Architectural Lighting", "/architectural-lighting"],
                ["Smart Lighting", "/smart-lighting"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/45
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}

                    <FiArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              SUPPORT
          ================================================= */}
          <div>

            <h3 className="
              mb-6
              text-[15px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#d2b45c]
            ">
              Information
            </h3>

            <ul className="space-y-4">

              {[
                ["FAQs", "/faq"],
                ["Shipping & Delivery", "/shipping"],
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms"],
                ["Return Policy", "/return-policy"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-white/45
                      transition-colors
                      hover:text-white
                    "
                  >
                    {label}

                    <FiArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        transition-all
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>
                </li>
              ))}

            </ul>

          </div>

     </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}
        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            py-7
            px-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p className="
            text-[11px]
            text-white/30
          ">
            © 2026. All rights reserved.
          </p>


         <div
  className="
    flex
    flex-wrap
    items-center
    gap-2
    text-[10px]
    tracking-wider
    text-white/30
  "
>
  <span>
    Website Designed By
  </span>

  <a
    href="https://inquirybazaar.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      font-semibold
      text-white/50
      transition-colors
      duration-300
      hover:text-[#c9a44c]
    "
  >
    Inquiry Bazaar Pvt. Ltd.
  </a>

  <span className="text-white/20">|</span>

  <a
    href="https://inquirybazaar.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      font-semibold
      text-white/50
      transition-colors
      duration-300
      hover:text-[#c9a44c]
    "
  >
    B2B Marketplace
  </a>
</div>

        </div>
       

    </footer>
  );
}