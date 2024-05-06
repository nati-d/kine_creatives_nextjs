import { services } from "@/constants/data";
import Image from "next/image";
import React from "react";

const SingleServices = () => {
  return (
    <div className="flex justify-between">
      {services.map((item) => (
        <div
          key={item.id}
          className={`w-[49%] flex flex-col justify-between   ${
            item.id % 2 == 0 && "flex-col-reverse"
          }`}
        >
          <div className={`px-3 space-y-5 `}>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <p className="text-justify">{item.description}</p>
          </div>
          <div className="h-[75%] w-full">
            <Image
              alt=""
              src={item.img}
              width="0"
              height="0"
              className="w-full h-[98%] object-cover"
            />
            <span className="flex justify-end text-lg font-semibold text-orange-500 tracking-widest">
              Kine Creatives
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleServices;
