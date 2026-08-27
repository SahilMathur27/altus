"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Grow your business with strategic digital marketing solutions designed to reach the right audience.",
    bg: "bg-blue-600",
  },
  {
    title: "Web Development",
    description:
      "We create fast, responsive and modern websites that deliver an excellent user experience.",
    bg: "bg-orange-500",
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your online visibility and reach more potential customers with powerful SEO strategies.",
    bg: "bg-emerald-600",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build a strong brand presence and connect with your audience across leading social media platforms.",
    bg: "bg-purple-600",
  },
];

function ServiceCard({ service, index, progress }) {
  const scale = useTransform(
    progress,
    [index * 0.2, 1],
    [1, 0.9 + index * 0.03]
  );

  const position =
    index % 2 === 0
      ? "mr-auto"
      : "ml-auto";

  return (
    <motion.div
      style={{
        scale,
        top: `${index * 30}px`,
      }}
      className={`sticky mb-10 min-h-[320px] w-full max-w-[85%] rounded-3xl p-8 text-white shadow-2xl md:p-10 ${position} ${service.bg}`}
    >
      <div className="flex min-h-[240px] flex-col justify-center">
        <span className="mb-4 text-sm font-semibold tracking-widest text-white/70">
          SERVICE 0{index + 1}
        </span>

        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          {service.title}
        </h3>

        <p className="text-base leading-7 text-white/80">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ServicesStack() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="bg-gray-100 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-20">

        {/* LEFT SIDE - STICKY CONTENT */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Services That Help Your Business Grow
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            We provide creative, strategic and result-driven digital solutions
            designed to help your business stand out, reach more customers and
            achieve sustainable growth.
          </p>

          <button className="mt-8 rounded-full bg-blue-600 px-7 py-3 font-medium text-white transition duration-300 hover:scale-105">
            Explore Services
          </button>
        </div>

        {/* RIGHT SIDE - STACK CARDS */}
        <div className="relative">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

      </div>
    </section>
  );
}