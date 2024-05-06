import Image from "next/image";
import React from "react";
import plant from '@/assets/images/picTwo.jpg'

const RoundedImage = ({customStyle}) => {
  return (
    <div className="w-[350px] relative h-[400px] mx-14 my-10">
      <Image
          className={`w-full h-full z-50 ${customStyle}`}
          src={plant}
          alt=""
          width="0"
          height="0"
          style={{
            objectFit: 'cover',
          }}
        />
          <div className={`absolute -top-5 -left-5 bg-[#AE9894] w-full h-full -z-10 ${customStyle}`}></div>
    </div>
  );
};

export default RoundedImage;
