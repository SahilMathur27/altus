"use client";

import React from "react";
import { FiArrowRight, FiCheck, FiZap, FiLayers } from "react-icons/fi";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaMobile } from "react-icons/fa";
import Split from "./Split";

export default function About() {
  return (
    <>
    

  <section className="bg-blue-50 w-full py-7 md:py-15">
    <div className="w-full md:w-7xl flex flex-col md:flex-row mx-auto justify-center gap-7 lg:gap-15 items-center">

      {/* image saction  */}

      <div className="w-full md:w-[50%]">
        <img src="/167088.webp" alt="" 
        className="h-[350px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] md:h-[500px] lg:h-[550px]"/>
       </div>
          
          {/* Content Saction  */}

       <div className="w-full md:w-[50%] p-4">
        <span className="text-blue-300 font-semibold text-1xl">About Company</span>
        <h2 className="text-6xl uppercase font-serif">About us </h2>

       <p className="py-9 leading-7 text-[18px]">We are a professional Digital Marketing Company helping businesses build a strong online presence, reach the right audience, and generate consistent leads. Our customized digital marketing strategies combine creativity, technology, data, and industry insights to deliver measurable results.

From improving search engine rankings to increasing brand visibility and customer engagement, we provide complete digital marketing solutions designed to support your business growth.</p>
       <Button text="Learn More" href="/aboutUs"/>
       </div>
    </div>
  </section>

    </>

  );
}
