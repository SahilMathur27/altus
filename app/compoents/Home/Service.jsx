"use client";

import { motion } from "motion/react";

export default function SpokenGermanSection() {
  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f5f3] py-12 lg:py-20">
      
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-[250px] w-[350px] rounded-full bg-cyan-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-0">

        {/* Main Box */}
        <div className="relative overflow-hidden rounded-[30px] bg-[#0d504a] px-6 py-10 md:px-12 lg:px-20 lg:py-20">

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)
                `,
                backgroundSize: "58px 58px",
              }}
            />
          </div>

          {/* Decorative Squares */}
          <div className="absolute left-[30%] top-[-10px] h-20 w-20 bg-white/10" />
          <div className="absolute right-[14%] top-8 h-24 w-14 bg-white/5" />
          <div className="absolute bottom-20 left-[28%] h-28 w-28 bg-white/10" />
          <div className="absolute bottom-6 left-[47%] h-16 w-16 bg-white/15" />
          <div className="absolute bottom-6 right-[22%] h-16 w-16 bg-white/10" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_1.15fr]">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {/* Heading */}
              <motion.h2
                variants={fadeDown}
                className="text-3xl font-bold leading-tight text-[#f7f4eb] sm:text-4xl lg:text-[42px]"
              >
                Spoken & Written German
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeDown}
                className="mt-5 max-w-[580px] text-base leading-7 text-[#d6d8d4] md:text-lg"
              >
                IELTS candidates, get ready! Our special Weekly Free Online Class
                has started! Join the class this week and learn how to prepare for
                IELTS.
              </motion.p>

              {/* Features */}
              <motion.div
                variants={fadeDown}
                className="mt-8 space-y-5"
              >
                <Feature text="Education award achived" />
                <Feature text="Available online courses" />
                <Feature text="Learn From Anywhere" />
              </motion.div>

              {/* Button */}
              <motion.div variants={fadeDown}>
                <button className="mt-10 rounded-lg bg-gradient-to-r from-[#ffbc2e] to-[#ffd65a] px-8 py-4 font-semibold text-[#263238] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  View Our Program
                </button>
              </motion.div>
            </motion.div>

            {/* ================= RIGHT IMAGE ================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: -60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[38px] border-[6px] border-[#dfe7e3] bg-purple-700">

                <img
                  src="/banner.jpg"
                  alt="Learn German"
                  className="h-auto w-full object-cover"
                />

              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Decorative Circle */}
      <div className="absolute -bottom-24 right-24 hidden h-48 w-48 rounded-full bg-yellow-400 lg:block">
        <div className="absolute -bottom-7 -left-7 h-40 w-40 rounded-full border-[5px] border-dotted border-[#55268a]" />
      </div>

    </section>
  );
}


/* ================= FEATURE ================= */

function Feature({ text }) {
  return (
    <motion.div
      whileHover={{
        x: 10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="flex items-center gap-5"
    >
      {/* Custom Tick */}
      <span className="relative block h-7 w-7">
        <span className="absolute left-1 top-1 h-[11px] w-[20px] rotate-[-45deg] border-b-[3px] border-l-[3px] border-[#ffc12d]" />
      </span>

      <h3 className="text-xl font-semibold tracking-wide text-[#f5f3ec] sm:text-2xl">
        {text}
      </h3>
    </motion.div>
  );
}