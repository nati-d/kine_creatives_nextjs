import ProductCard from "@/components/productCard";
import { products } from "@/constants/data";
import React from "react";

const ShopPage = () => {
  return (
    <div className="container my-10">
      <div className="w-full flex flex-1 items-center space-x-2 mb-10">
        <h3 className="text-gray-500 font-bold text-nowrap text-2xl">Our Products</h3>
        <hr className="w-full h-1 bg-gray-500" />
      </div>
      <div className="grid grid-cols-4 items-center justify-center space-y-5">

      {products.map((item) => (
        <ProductCard key={item.id} id = {item.id} name={item.name} price={item.price} img={item.image} />
      ))}
      </div>
    </div>
  );
};

export default ShopPage;
