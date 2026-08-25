import React from "react";
import { Playfair_Display } from "next/font/google";
import * as motion from "motion/react-client"
import Button from "./Button";


 const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export default function Grid() {

 
    return(
   <>
   <div className="w-full bg-amber-50">
    <h2 className="text-7xl py-4 text-center font-semibold">Our Servises</h2>
    <div className="w-full md:w-7xl flex flex-col md:flex-row mx-auto justify-center gap-6 py-5 ">
      <div className=" w-full md:w-1/4 shadow rounded-2xl bg-white p-3 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img src="/64988.jpg" alt="" className="rounded-3xl" />
        <h2 className="text-2xl py-3 font-semibold capitalize">Website Design</h2>
        <p>

        </p>
      </div>

      <div className="w-full md:w-1/4 shadow rounded-2xl bg-white p-3  transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img src="/64988.jpg" alt="" className="rounded-3xl" />
        <h2 className="text-2xl py-3 font-semibold capitalize">Social Media Marketing </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, repellendus?

        </p>
      </div>

      <div className="w-full md:w-1/4 shadow rounded-2xl bg-white p-3  transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img src="/64988.jpg" alt="" className="rounded-3xl" />
        <h2 className="text-2xl py-3 font-semibold capitalize">Google Ads </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, repellendus?

        </p>
      </div>

      <div className="w-full md:w-1/4 shadow rounded-2xl bg-white p-3  transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img src="/64988.jpg" alt="" className="rounded-3xl" />
        <h2 className="text-2xl py-3 font-semibold capitalize">SEO Optimization</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, repellendus?

        </p>
      </div>
      
    </div>
    <div className="text-center">
 <Button text="More Services" href="/Service" />
    </div>
   
    

   </div>
   </>
    )
}
