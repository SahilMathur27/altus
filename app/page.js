import About from '@/components/About'
import Collections from '@/components/Collections'
import Footer from '@/components/Footer'
import ThreeDCardDemo from '@/components/Grid'
import Hero from '@/components/Hero'
import Map from '@/components/Map'
import Navbar from '@/components/Navbar'
import Popup from '@/components/Popup'
import ScrollStack from '@/components/ScrollStack'
import Service from '@/components/Service'
import Testimonial from '@/components/Testimonial'
import ScrollExpand from '@/components/ScrollExpand'
import React from 'react'



export default function page() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ThreeDCardDemo />
          <ThreeDCardDemo />
          <ThreeDCardDemo />
        </div>
      <Collections />
      <ScrollStack/>
      
      <ScrollExpand
        src="steptodown.com903114.jpg"
        title="Built to scale"
        scrollHint="Scroll inside the frame"
        useWindowScroll>
        <h2 className='text-6xl text-white'>Every pixel, everywhere</h2>
      </ScrollExpand>
      <Testimonial/>
      <Map/>
      <Popup/>
      <Footer />

    </>
  )
}
