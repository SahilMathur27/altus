"use client";

import { useState } from "react";

export default function Popup({ openPop, setOpenPop }) {
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

  if (!openPop) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm"
      onClick={() => setOpenPop(false)}
    >
      {/* Popup Card */}
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setOpenPop(false)}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-gray-500 transition hover:bg-gray-100 hover:text-black"
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Heading */}
        <div className="mb-8 pr-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
            Contact Us
          </p>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get a Quote
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Fill in your details and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name + Product */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500"
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
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-black"
              />
            </div>

            {/* Product */}
            <div className="flex flex-col">
              <label
                htmlFor="product"
                className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500"
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
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-black"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500"
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
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-black"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500"
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
                className="w-full border-b border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-black"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full rounded-lg bg-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gray-800 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}