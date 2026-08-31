"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import products from "@/Data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <>
    <Navbar/>
    <section className="relative overflow-hidden bg-white py-20 md:py-28">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            Our Products
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Explore Our
            <span className="text-blue-600"> Products</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Discover our range of professional products and solutions,
            carefully designed to deliver quality, performance and value.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}
              <Link href={`/products/${product.slug}`}>
                <div className="relative h-72 overflow-hidden bg-gray-100">

                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-900 shadow backdrop-blur">
                      {product.category}
                    </span>
                  </div>

                </div>
              </Link>

              {/* Content */}
              <div className="p-6">

                <Link href={`/products/${product.slug}`}>
                  <h2 className="text-2xl font-bold text-gray-900 transition duration-300 group-hover:text-blue-600">
                    {product.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-600">
                  {product.shortDescription}
                </p>

                {/* Price */}
                <div className="mt-5 flex items-center gap-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>

                {/* Button */}
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-600"
                >
                  View Product
                  <span className="transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}