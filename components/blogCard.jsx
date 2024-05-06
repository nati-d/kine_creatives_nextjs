import images from '@/constants/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({id,title,author,date,content,tags}) => {
  return (
    <Link href={`blogDetails/${id}`}>
      <div className='w-[350px] h-[320px] *:overflow-hidden cursor-pointer mb-5 '>
        <Image alt='' src={images.picTwo} width="0" height="0" className=' rounded-md w-full h-[65%] '/>
        <div className='ml-2 flex flex-col space-y-2'>
          <h1 className='text-xl font-bold text-nowrap overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</h1>
          <p style={{WebkitLineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical'}} className='text-sm'>{content}</p>
          <div className='flex justify-between '>
            <span className='font-semibold text-gray-500'>{author}</span>
            <span className='font-semibold text-gray-500'>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
