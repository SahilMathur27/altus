"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Strategy & Planning",
    description:
      "We create powerful strategies and clear plans to help your business achieve long-term growth and success.",
  },
  {
    title: "Creative Design",
    description:
      "Our creative team designs modern and engaging experiences that help your brand stand out from the competition.",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach the right audience and grow your business with result-driven digital marketing solutions.",
  },
  {
    title: "Business Growth",
    description:
      "We focus on scalable solutions and innovative ideas that help take your business to the next level.",
  },
];

function Card({ card, index, progress }) {
  const scale = useTransform(
    progress,
    [index * 0.2, 1],
    [1, 0.85 + index * 0.05]
  );

  return (
    <motion.div
      style={{
        scale,
        top: `${index * 30}px`,
      }}
      className="sticky h-[300px] rounded-3xl border border-gray-200 bg-white p-10 shadow-xl"
    >
      <div className="flex h-full flex-col justify-center">
        <span className="mb-4 text-2xl font-semibold text-blue-600">
          0{index + 1}
        </span>

        <h2 className="mb-5 text-3xl font-bold text-gray-900">
          {card.title}
        </h2>

        <p className="max-w-2xl text-lg leading-8 text-gray-600">
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ScrollStack() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative bg-gray-100 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600">
            Scroll down to explore our services
          </p>
        </div>

        <div className="relative">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}