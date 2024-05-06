import React from "react";
import RoundedImage from "./roundedImage";
import Button from "./button";
import Image from "next/image";
import images from "@/constants/images";

const Hero = () => {
  return (
    <div className="w-full h-[60vh] relative flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          alt=""
          src={images.hero}
          width="0"
          height="0"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="text-black w-[60%] text-center space-y-6">
        <h2 className="text-xl tracking-[10px]">Welcome</h2>
        <h4 className="text-3xl font-semibold">
          Crafted with Care, Crafted for You
        </h4>
        <p>
          Discover the Magic of Handmade Creations. From intricate jewelry to
          handwoven textiles, find the perfect statement piece for yourself or a
          thoughtful gift. Explore our collection today!
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
