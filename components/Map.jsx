"use client";

import { h2 } from "motion/react-client";
import React, { useState } from "react";

export default function Map() {
  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library used to build user interfaces and web applications.",
    },
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework used to build fast and scalable web applications.",
    },
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework used to quickly design websites.",
    },
    {
      question: "Can I use React with Tailwind CSS?",
      answer:
        "Yes, React and Tailwind CSS can easily be used together to create modern interfaces.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (

    <>
    
 
    <div className="w-full p-10">
      <div className="w-full md:w-7xl flex flex-col-reverse md:flex-row mx-auto gap-10">
          <div className="w-full md:w-[50%]">
         <div className="space-y-4 px-3 lg:px-10">

           {faqs.map((faq, index) => (
         <div
          key={index}
          className="border-b-1 rounded-lg overflow-hidden"
         >
          
          {/* Question */}
          <button
            type="button"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex justify-between items-center p-3 text-left bg-gray-100"
          >
            <span className="font-semibold">
              {faq.question}
            </span>

            <span className="text-xl">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="p-5 bg-white text-gray-600">
              {faq.answer}
            </div>
          )}

            </div>
           ))}

          </div>
          </div>

         {/* Content box */}

         <div className="w-full md:w-[50%]">
          <h2 className="text-5xl py-10">FAQS</h2>
          <p className="text-[17px]">lorem10 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iure.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque laborum enim recusandae doloribus dolore corrupti temporibus esse cum tempora?</p>
         </div>
      </div>

    </div>
    </>
  );
  
}