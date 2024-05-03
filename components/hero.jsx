import React from 'react'
import RoundedImage from './roundedImage'
import Button from './button'
import Image from 'next/image'
import heal from '@/assets/images/picOne.jpg'

const Hero = () => {
  return (
    <div className='w-full flex justify-between items-center relative -z-50 bg-[#F1EAE2]'>
        <RoundedImage customStyle = "rounded-t-full"/>
        <div className='fle-col space-y-5 flex-1'>
          <h4 className='text-orange-500'>Kine Creatives</h4>
          <h1 className='text-5xl font-bold mb-5'>Purposeful Goods and Gifts Crafted by Hand</h1>
          <Button/>
        </div>
        <div className=' relative w-[400px] h-[600px] ml-10'>

        <Image
          className="w-full h-full "
          src={heal}
          alt=""
          width="0"
          height="0"
          style={{
            objectFit: 'cover',
          }}
        />
        </div>

    </div>
  )
}

export default Hero