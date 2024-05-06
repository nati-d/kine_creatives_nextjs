"use client";
import React from "react";
import { products } from "@/constants/data";
import Image from "next/image";
import Button from "@/components/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "@/components/productCard";
const ProductDetails = ({ params }) => {
  const { id } = params;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, description, price, image, category, sub_description } =
    product;

  return (
    <div className="container my-10">
      <div className="flex justify-between h-[80vh]">
        <div className="w-[75%] h-full">
          <Image alt="" src={image} width="0" height="0" className="w-full h-full" />
        </div>
        <div className="w-[40%] space-y-6 pl-10 mt-14">
          <h1 className="text-orange-500">Addis Ababa, Ethiopia</h1>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <h1 className="font-bold text-xl">ETB {price}</h1>
          <h1>{description}</h1>
          <h1 className="">Category: {category}</h1>
          <h1 className="">Size: {sub_description.size}</h1>
          <h1 className="">Material: {sub_description.material}</h1>
          <Button />
        </div>
      </div>
      <div className="my-10">
        <div className="w-full flex flex-1 items-center space-x-2 mb-10">
          <h3 className="text-gray-500 font-bold text-nowrap text-2xl">
            Related Products
          </h3>
          <hr className="w-full h-1 bg-gray-500" />
        </div>
        <div className="grid grid-cols-4 items-center justify-center space-y-5">
          {products.slice(0,4).map((item) => (
            <ProductCard key={item.id} name={item.name} price={item.price} img={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
