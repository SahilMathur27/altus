"use client";

import { motion } from "framer-motion";

export default function Split({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <h2 className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}