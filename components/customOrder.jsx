import images from "@/constants/images";
import Image from "next/image";
import React from "react";
import Button from "./button";

const CustomOrder = () => {
  return (
    <div className="w-full relative flex items-center py-20">
      <Image
        src={images.Gift}
        alt=""
        width="0"
        height="0"
        className="w-full h-full absolute top-0 left-0 object-cover -z-10"
      />
      <div className="w-[40%] ml-20 space-y-6 ">
        <h3 className="text-orange-500 tracking-widest">Design Your Masterpiece</h3>
        <h1 className="text-3xl font-bold">Custom Creations Crafted for You</h1>
        <p className="text-sm">
          {" "}
          Craft your dream piece with our custom service. Collaborate with
          artisans to reflect your style in every detail. Own a one-of-a-kind
          creation, exclusively yours.
        </p>
        <Button/>
      </div>
    </div>
  );
};

export default CustomOrder;
