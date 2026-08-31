"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
return ( 
<CardContainer className="inter-var"> 
  <CardBody className="relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 group/card dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
 
  <div className="flex flex-row justify-center mx-au">

  </div>
    {/* Title */}
    <CardItem
      translateZ="50"
      className="text-xl font-bold text-neutral-600 dark:text-white"
      >
      Make things float in air
       </CardItem>

       {/* Description */}
       <CardItem
      as="p"
      translateZ="60"
      className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
      Hover over this card to unleash the power of CSS perspective.
       </CardItem>

        {/* Image */}
       <CardItem
       translateZ="100"
      rotateX={20}
      rotateZ={-10}
      className="mt-4 w-full"
       >
      <img
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
        alt="Forest"
        width={1000}
        height={1000}
        className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
      />
    </CardItem>

    {/* Buttons */}
    <div className="mt-8 flex items-center">

      <CardItem
        translateZ={20}
        translateX={40}
        as="button"
        className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
      >
        Sign up
      </CardItem>
    </div>

  </CardBody>
</CardContainer>

);
}
