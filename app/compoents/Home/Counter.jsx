"use client"
import { useState } from "react";

export default function Counter(){
const [count, SetCount] = useState(0)

const increse = ()=>{
 SetCount(count+1)
}

const dicrese = ()=>{
 SetCount(count-1)
}
return (
   <div>
    <h2>counter : {count}</h2>
  <button onClick={increse}>Plus </button>
    <button onClick={dicrese}>Minus </button>

   </div>
)

}



