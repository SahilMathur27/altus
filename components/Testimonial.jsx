"use client";

import { AnimatedTestimonials } from "@/components/animated-testimonials";

export default function Testimonial() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-5 md:py-10 lg:py-10">
      
      <div className="w-full md:w-7xl px-4 sm:px-6 lg:px-3">

        {/* Heading */}
        <div className="mx-auto text-center">
          
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Testimonials
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Hear from our clients about their experience, results, and the
            value we bring to their business.
          </p>

        </div>

        {/* Animated Testimonials */}
        <div className=" w-full md:w-7xl px-5">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>

      </div>

    </section>
  );
}
