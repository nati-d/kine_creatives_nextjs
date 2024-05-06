import BlogCard from '@/components/blogCard'
import { blogPosts } from '@/constants/data'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='container grid grid-cols-3 my-10 '>
      {blogPosts.map(item => (
        <BlogCard
        key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          date={item.date}
          content={item.content}
          tags={item.tags}
        />
      ))}
    </div>
  )
}

export default BlogPage
