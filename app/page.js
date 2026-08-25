import React from 'react'
import Navbar from './compoents/Home/Navbar'
import Featured from './compoents/Home/Featured'
import About from './compoents/Home/About'
import Footer from './compoents/Home/Footer'
import Hero from './compoents/Home/Hero'
import Collections from './compoents/Home/Collections'
import Faq from './compoents/Home/Faq'
import Form from './compoents/Home/Form'
import Service from './compoents/Home/Service'
import Grid from './compoents/Home/Grid'
import Map from './compoents/Home/Map'
import ScrollExpand from './compoents/Home/ScrollExpand'
import Testimonial from './compoents/Testimonial'



export default function page() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Grid />
      <Collections />
      <ScrollExpand
        src="/64988.jpg"
        title="Built to scale"
        scrollHint="Scroll inside the frame"
        useWindowScroll>
        <h2 className='text-6xl text-black'>Every pixel, everywhere</h2>
        <p className='text-[16px] text-black'>The frame opens up as you scroll and hands the whole stage to your media.</p>
      </ScrollExpand>
      <Testimonial/>
      <Map/>
      <Footer />
      {/*  */}
      {/* <Navbar/> 
      <Service />
      <Featured />
<Faq />

      <Form />
      

      
*/}
    </>
  )
}
