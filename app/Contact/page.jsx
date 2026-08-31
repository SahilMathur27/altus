"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { div } from "motion/react-client";
import { useState } from "react";


export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // Add your API / email submission here
  };

  return (
    <>
  <Navbar/>
   <div className="w-full h-[200px] bg-blue-950 flex justify-center items-end pb-6">
     <h1 className="text-6xl text-white text-center ">Contact Us </h1>
   </div>
    
    <section
      className="bg-white py-6 md:py-16"
      data-purpose="requirements-section"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

          {/* =========================
              LEFT - IMAGE
          ========================== */}
          

          {/* =========================
              RIGHT - FORM
          ========================== */}
          <div className="flex flex-col border p-6 md:p-10 rounded-2xl shadow-2xl bg-gray-50">

              {/* Heading */}
              <div className="mb-8 ">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Get in touch
              </span>

              <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Send your requirements
              </h2>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
               >

              {/* Name + Product */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Name */}
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>

                {/* Product */}
                <div className="flex flex-col">
                  <label
                    htmlFor="product"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Product
                  </label>

                  <input
                    id="product"
                    name="product"
                    type="text"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      text-xs
                      font-bold
                      uppercase
                      tracking-widest
                      text-gray-500
                    "
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9999999999"
                    required
                    className="
                      border-b
                      border-gray-300
                      bg-transparent
                      py-2
                      text-sm
                      text-gray-900
                      outline-none
                      transition-colors
                      placeholder:text-gray-400
                      focus:border-black
                    "
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="
                    bg-blue-950
                    px-10
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-white
                    transition-all
                    duration-300
                    hover:bg-gray-800
                    hover:px-12
                  "
                >
                  Submit
                </button>
              </div>

            </form>
          </div>

           {/* right section  */}
          <div className="group overflow-hidden rounded-lg">
           <span className="text-[16px] text-blue-800">Get in Touch </span>
           <h2 className="text-4xl pb-5">Your service & satisfaction is our priority</h2>
           <ul className="list-none  ">
            <li className="border-b-2 py-3 text-[18px]"><a href="#"> Address : Tagore Garden New Delhi</a></li>
            <li className="border-b-2 py-3 text-[18px]"><a href="#"> Email Id : Sahil@gmail.com</a></li>
            <li className="border-b-2 py-3 text-[18px]"><a href="#">Mobile No : +91-8776665768</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Map add  */}
    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            className="h-[300px] w-full sm:h-[400px] lg:h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer/>
    </>
  );
}