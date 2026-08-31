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
import Popup from './compoents/Home/Popup'
import ScrollStack from './compoents/Home/ScrollStack'
import ThreeDCardDemo from './compoents/Home/Grid'



export default function page() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
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
