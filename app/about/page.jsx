import Navbar from "../compoents/Home/Navbar";
import Button from "../compoents/Home/Button";
import Counter from "../compoents/Home/Counter";
import LikeBtn from "./LikeBtn";





export default function page() {
  return (
    <>
    <Navbar/>
    <div
  className="h-screen mx-auto bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90')",
  }}
>
</div>
    // about us seaction 

    <div className="w-full px-5 md:px-20 py-20">
      <div className="flex flex-col  md:flex-row gap-7 items-center">

     <div className=" w-full md:w-[50%] rounded-3xl w-full">
      <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=90" alt="" />
     </div>

     <div className="w-full md:w-[50%]">
      <h3 className="text-2xl md:text-7xl leading-1.5 uppercase py-3 md:py-10 text-left">Sahil Mathuer </h3>
      <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia maiores similique dolorem quisquam beatae laborum? Sapiente nihil eaque explicabo blanditiis libero. Harum perspiciatis alias neque necessitatibus adipisci velit laboriosam explicabo!</p>
      <button className="text-black bg-amber-400 rounded-3xl py-2 md:py-3 px-9 md:ms-3">Learn More</button>
       <Button text="Read More" href="about"/>  
        <Button text="Learn More" href="contact"/>  
     </div>


      </div>
    </div>

    <div className="flex justify-center mb-20">
      <Counter />
   
      </div>
  <LikeBtn/>
  
    
    </>
    
  )
}

