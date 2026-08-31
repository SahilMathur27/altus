"use client";

import { div } from "motion/react-client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Popup from "@/components/Popup";

export default function Form() {
 const [openPop, setOpenPop] = useState(false)

  // if (!openPop) return null;


  return (
    <>
  <Navbar/>
  {/* Title bar saction  */}
   <div className="w-full h-[200px] bg-blue-950 flex justify-center items-end pb-6">
     <h1 className="text-6xl text-white text-center ">About Us </h1>
   </div>

     <section className="bg-blue-50 w-full py-7 md:py-15">
         <div className="w-full md:w-7xl flex flex-col md:flex-row mx-auto justify-center gap-7 lg:gap-15 items-center">
     
           {/* image saction  */}
     
           <div className="w-full md:w-[50%]">
             <img src="/167088.webp" alt="" 
             className="h-[350px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105 sm:h-[450px] md:h-[500px] lg:h-[550px]"/>
            </div>
               
               {/* Content Saction  */}
     
            <div className="w-full md:w-[50%] p-4">
             <span className="text-blue-300 font-semibold text-1xl">About Company</span>
             <h2 className="text-6xl uppercase font-serif">About us </h2>
            <p className="py-9 leading-7 text-[18px]">We are a professional Digital Marketing Company helping businesses build a strong online presence, reach the right audience, and generate consistent leads. Our customized digital marketing strategies combine creativity, technology, data, and industry insights to deliver measurable results.
     
     From improving search engine rankings to increasing brand visibility and customer engagement, we provide complete digital marketing solutions designed to support your business growth.</p>
            </div>
         </div>
       </section>

   {/* Paralax effact */}


        <section className="relative h-[500px] overflow-hidden">
      
      {/* Background */}
      <motion.div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2')",
        }}
        initial={{ y: 0 }}
        whileInView={{ y: 80 }}
        transition={{ duration: 1.5 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />


    </section>


     {/* Mission Vision */}
       <div className="w-full bg-amber-50">
    <h2 className="text-5xl py-4 text-center font-semibold">Company targets</h2>
    <div className="w-full md:w-7xl flex flex-col md:flex-row mx-auto justify-center gap-6 py-5 ">

      <div className="w-full md:w-[33%] shadow rounded-2xl bg-white p-3  transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h2 className="text-2xl py-3 font-semibold capitalize">Our Mission </h2>
        <p>Our mission is to help businesses grow in the digital world through innovative, result-driven, and customized marketing solutions. We combine creativity, technology, data, and strategic thinking to build strong online presence, attract the right audience, generate quality leads, and deliver measurable business growth.

        </p>
      </div>

      <div className="w-full md:w-[33%] shadow rounded-2xl bg-white p-3  transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h2 className="text-2xl py-3 font-semibold capitalize">Our Vision </h2>
        <p>Our vision is to become a trusted digital growth partner for businesses worldwide by setting new standards in creativity, technology, and marketing performance. We aim to create meaningful digital experiences that help brands build lasting connections with their customers and achieve sustainable long-term success.

        </p>
      </div>

      <div className="w-full md:w-[33%] shadow rounded-2xl bg-white p-3  transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <h2 className="text-2xl py-3 font-semibold capitalize">Our Value</h2>
        <p>We believe digital marketing is more than just visibility—it is about creating real business opportunities. From SEO and social media to paid advertising, content marketing, branding, and web solutions, we focus on strategies that turn attention into engagement and engagement into growth.
        </p>
      </div>
      
    </div>
    </div>

    {/* Cta Section  */}


    <section className=" w-full text-center h-[200] bg-blue-950 pt-7">
      <h2 className="text-4xl text-white font-semibold">Contact Now </h2>
      <p className="text-[16px] text-white py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias cumque facilis sequi, at rerum numquam suscipit est ea quia.</p>
       <button onClick={()=>setOpenPop(true)} className="bg-white text-[16px] px-7 py-3">Contact Now </button>
    </section>

 <Footer/>
 <Popup openPop={openPop} setOpenPop={setOpenPop} />
    </>
  );
}