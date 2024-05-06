import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ id, name, price, img }) => {
  return (
    <Link href={`/details/${id}`}>
      <div className="w-[250px] h-[350px] overflow-hidden cursor-pointer">
        <Image
          alt=""
          src={img}
          width="0"
          height="0"
          className="w-full h-[85%] flex-1 hover:size-72"
        />
        <div className="ml-2">
          <h2 className="text-nowrap overflow-hidden whitespace-nowrap overflow-ellipsis">
            {name}
          </h2>
          <h2>ETB {price}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
