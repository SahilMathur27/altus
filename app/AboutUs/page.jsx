"use client";
import { div } from 'motion/react-client';
import React, { useState } from 'react'

// export default function Page() {
//  const [num,setNum]= useState(0)

//   return (
//    <>
//    <h3>Count Number :{num}</h3>
//    <button onClick={()=>{
//       setNum(num+1)
//    }}> Count Now </button>
//    </>
//   )
// }



// export default function Page(){
//     // Menu ko toggle and band kaise karna hai 
//  const[open,setOpen]= useState(false)
// return (
//     <>
//     <button className='' onClick={()=>{
//         setOpen(!open)
//     }}>Menu</button>
//     {open && (
//         <nav>
//             Home 
//             About us 

//         </nav>
//     )}
//     </>
// )
// }



// popup make 

export default function Pop(){

    const[openpop, setOpenpop]=useState(false)
    return(
        <>
        <button onClick={()=>{
            setOpenpop(!openpop)
        }}>Open Popup</button>

        {openpop && 
             <form className="w-full max-w-xl space-y-5 border-2 shadow-2xl p-7 mx-auto transition 2s ">

      {/* Name */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Phone
        </label>

        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Message
        </label>

        <textarea
          rows="5"
          placeholder="Enter your message"
          className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Submit
      </button>

    </form>
        }

        <button onClick={()=>{
            setOpenpop(false)
        }}>Close popup</button>
        </>
    )
}