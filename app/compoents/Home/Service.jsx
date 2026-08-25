"use client";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Fade from "./Fade";

const iconBoxes = [
  {
    
    title: "24/7 Support",
    description: "Get support whenever you need it.",
  },
  {
   
    title: "Quick Response",
    description: "We respond to your queries quickly.",
  },
  {
    title: "Quality Service",
    description: "Reliable and professional services.",
  },
  {
    
    title: "Global Reach",
    description: "Serving customers across multiple locations.",
  },
];

export default function Service() {
  return (
    <section className="py-12">

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {iconBoxes.map((item, index) => (
          <SwiperSlide key={index}>
      <fade>
            <div  className="h-full rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            
              </div>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {item.description}
              </p>

            </div>
            </fade>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}