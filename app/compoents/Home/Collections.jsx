"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from "react-icons/fi";

const collections = [
  {
    title: "MODERN METROPOLITAN",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "SOFT ILLUMINATION",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "CONTEMPORARY LIVING",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "MINIMALIST LIGHT",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "TIMELESS ELEGANCE",
    subtitle: "DISCOVER COLLECTION",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
  },
];

const TOTAL = collections.length;

// 3 copies for seamless infinite scrolling
const loopedCollections = [...collections, ...collections, ...collections];

const MIDDLE_START = TOTAL;

export default function Collections() {
 return  <> 
 <div className=" w-full relative  min-h-[300px] bg-cover bg-center my-4"
  style={{ backgroundImage: "url('/167088.webp')" }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/80 w-full"></div>

  {/* Text */}
  <div className="relative z-10 flex min-h-[300px] items-center justify-center text-center">
    <div>
      <h1 className="text-5xl font-bold text-white text-center">
        Ready to Grow Your Business Online?
      </h1>

      <p className="mt-4 text-lg text-white text-center">
        Boost your brand visibility, attract more customers, and generate quality leads with our result-driven digital marketing solutions.
      </p>
    </div>
  </div>
</div>
</>

}
