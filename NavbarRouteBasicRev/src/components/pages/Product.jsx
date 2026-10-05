import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1
        className="text-5xl
            font-black
            tracking-[-0.04em]
            text-black
            cursor-pointer
            select-none
            hover:scale-95
            transition-transform duration-300 p-5 flex items-center justify-center"
        
      >
        PRODUCTS
      </h1>
      <div className="flex items-center justify-center gap-3 text-lg font-medium text-gray-300 bg-black p-3 rounded-xl">
        <Link
          to="/product/men"
          className="
                    px-6 py-2
                    rounded-full
                    hover:bg-white/10
                    hover:text-white
                    hover:scale-105
                    active:scale-95
                    transition-all duration-300
                    "
        >
          Men
        </Link>
        <Link
          to="/product/women"
          className="
                    px-6 py-2
                    rounded-full
                    hover:bg-white/10
                    hover:text-white
                    hover:scale-105
                    active:scale-95
                    transition-all duration-300
                    "
        >
          Women
        </Link>
      </div>
        <Outlet />
    
    </div>
  );
};

export default Product;
