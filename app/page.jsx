import Button from "@/components/button";
import Hero from "@/components/hero";
import MyServices from "@/components/myServices";
import RoundedImage from "@/components/roundedImage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex-col space-y-6">
      <Hero/>
      <MyServices/>
      <div className="relative -z-10 w-full bg-[#F6F3EE] flex justify-between items-center py-20 px-40">
        <div className="flex-col space-y-2">
          <h3 className="text-base">Remember Your Last One</h3>
          <h1 className="text-2xl font-bold">Gift Ideas That Last Longer</h1>
          <p className="text-lg text-orange-500">Order Your Custom Gift</p>
          <Button/>
        </div>
        <div className="absolute right-0 top-0">

        <RoundedImage customStyle = "rounded-b-full"/>
        </div>
      </div>

    </div>
  );
}
