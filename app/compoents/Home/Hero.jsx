"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50">
      
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-200/60 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-200/50 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-blue-600"
          >
            Creative Digital Agency
          </motion.p>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
            {["Build", "Grow", "Dominate"].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.15,
                  ease: "easeOut",
                }}
                className="mr-4 inline-block"
              >
                {word}
              </motion.span>
            ))}

            <br />

            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-blue-600"
            >
              Your Digital Future.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
          >
            We create powerful digital experiences that help ambitious brands
            stand out, connect with their audience and achieve meaningful
            growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700">
              Start Your Project
            </button>

            <button className="rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-900 transition duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex min-h-[500px] items-center justify-center">

          {/* Rotating Outer Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[350px] w-[350px] rounded-full border border-blue-300 md:h-[450px] md:w-[450px]"
          >
            <div className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full bg-blue-600 shadow-lg" />
          </motion.div>

          {/* Inner Circle */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-64 w-64 rounded-full bg-blue-100 blur-2xl"
          />

          {/* Main Glass Box */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
            }}
            className="relative z-10 flex h-52 w-52 items-center justify-center rounded-3xl border border-white bg-white/80 text-center shadow-2xl backdrop-blur-xl md:h-64 md:w-64"
          >
            <div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl text-blue-600"
              >
                ✦
              </motion.div>

              <p className="mt-4 text-xl font-bold text-slate-900">
                Think Digital
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Create. Connect. Grow.
              </p>
            </div>
          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 1 },
              x: { duration: 0.6, delay: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute right-0 top-10 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl"
          >
            <p className="text-2xl font-bold text-slate-900">+250%</p>
            <p className="text-sm text-slate-500">Business Growth</p>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 15, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 1.2 },
              x: { duration: 0.6, delay: 1.2 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-10 left-0 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl"
          >
            <p className="text-2xl font-bold text-slate-900">10K+</p>
            <p className="text-sm text-slate-500">Happy Customers</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}