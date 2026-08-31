// "use client";

// import React from "react";
// import { FiArrowRight, FiCheck, FiZap, FiLayers } from "react-icons/fi";
// import Button from "./Button";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { FaMobile } from "react-icons/fa";
// import Split from "./Split";

// export default function About() {
//   return (
//     <>
    

//   <section className="bg-blue-50 w-full py-7 md:py-15">
//     <div className="w-full md:w-7xl flex flex-col md:flex-row mx-auto justify-center gap-7 lg:gap-15 items-center">

//       {/* image saction  */}

//       <div className="w-full md:w-[50%]">
//         <img src="/167088.webp" alt="" 
//         className="h-[350px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] md:h-[500px] lg:h-[550px]"/>
//        </div>
          
//           {/* Content Saction  */}

//        <div className="w-full md:w-[50%] p-4">
//         <span className="text-blue-300 font-semibold text-1xl">About Company</span>
//         <h2 className="text-6xl uppercase font-serif">About us </h2>

//        <p className="py-9 leading-7 text-[18px]">We are a professional Digital Marketing Company helping businesses build a strong online presence, reach the right audience, and generate consistent leads. Our customized digital marketing strategies combine creativity, technology, data, and industry insights to deliver measurable results.

// From improving search engine rankings to increasing brand visibility and customer engagement, we provide complete digital marketing solutions designed to support your business growth.</p>
//        <Button text="Learn More" href="/aboutUs"/>
//        </div>
//     </div>
//   </section>

//     </>

//   );
// }


"use client";

import { motion } from "motion/react";

export default function About() {
  const imageAnimation = {
    hidden: {
      opacity: 0,
      y: -60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textAnimation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 lg:py-24">
      
      {/* Background Yellow Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[500px] rounded-full bg-yellow-300/30 blur-[100px]" />

      {/* Background Circle */}
      <div className="absolute left-5 top-20 h-[520px] w-[600px] rounded-full bg-slate-200/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= LEFT IMAGE SECTION ================= */}
          <motion.div
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-5">

              {/* Left Large Image */}
              <div className="relative mt-20 overflow-hidden rounded-[24px] bg-[#0d4b47]">
                <img
                  src="https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=700&q=80"
                  alt="Graduate Student"
                  className="h-[400px] w-full object-cover lg:h-[400px]"
                />

                {/* Decorative graduation icon */}
                <div className="absolute left-6 top-6 text-5xl">
                  🎓
                </div>
              </div>

              {/* Right Images */}
              <div className="space-y-6">

                {/* Top Image */}
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
                    alt="Student"
                    className="h-[360px] w-full object-cover"
                  />

                  {/* USA Flag */}
                  <div className="absolute bottom-8 right-3 text-6xl drop-shadow-lg">
                    🇺🇸
                  </div>
                </div>

                {/* Bottom Image */}
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80"
                    alt="Education"
                    className="h-[195px] w-full object-cover"
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Small Heading */}
            <motion.div variants={textAnimation}>
              <span className="inline-block rounded border border-[#7fa8a5] bg-[#e9f2f1] px-5 py-2 text-sm font-medium tracking-[2px] text-[#174d4a]">
                Who We Are
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={textAnimation}
              className="mt-6 text-4xl font-bold leading-tight text-[#303846] md:text-5xl"
            >
              Dedicated to Language
              <br />
              Learning, Growth, & Success
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textAnimation}
              className="mt-6 max-w-2xl text-base leading-7 text-[#6d747c] md:text-lg"
            >
              At Eduecet, we believe language is the key to connecting people,
              cultures, and opportunities. Our mission is to make language
              learning engaging, accessible, and effective for everyone
              regardless of age, background, or goal.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={textAnimation}
              className="mt-8 space-y-5"
            >
              <Feature text="Education award achived" />
              <Feature text="Available online courses" />
              <Feature text="Learn From Anywhere" />
            </motion.div>

            {/* Button */}
            <motion.div variants={textAnimation}>
              <button className="mt-10 rounded-lg bg-[#124d49] px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0c3d3a]">
                View Our Program
              </button>
            </motion.div>

            {/* Yellow Decorative Circle */}
            <div className="absolute -bottom-12 right-0 hidden lg:block">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-yellow-400">
                
                {/* Dotted Circle */}
                <div className="absolute -bottom-7 -left-7 h-36 w-36 rounded-full border-[5px] border-dotted border-[#4d287c]" />
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* Feature Component */
function Feature({ text }) {
  return (
    <motion.div
      whileHover={{ x: 8 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      <span className="flex h-7 w-7 items-center justify-center text-2xl font-bold text-[#dca720]">
        ✓
      </span>

      <h3 className="text-xl font-semibold tracking-wide text-[#303846] md:text-2xl">
        {text}
      </h3>
    </motion.div>
  );
}