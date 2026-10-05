import React from 'react'
import { Camera } from "lucide-react";


const Heading = () => {
  return (
    <div>
      <h1 className=" text-3xl flex justify-center items-center font-bold  hover:text-amber-500 transition-all duration-200 cursor-pointer mb-5">
        Gallery
        <Camera className=" mx-2" size={35} strokeWidth={1.5} />
      </h1>
    </div>
  );
}

export default Heading
