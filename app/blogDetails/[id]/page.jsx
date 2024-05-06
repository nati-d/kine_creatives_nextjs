import { blogPosts } from "@/constants/data";
import Image from "next/image";
import React from "react";

const BlogDetails = ({ params }) => {
  const { id } = params;

  const blog = blogPosts.find((item) => item.id === Number(id));
  console.log(blog);
  return (
    <div className="container my-10">
      <div className="w-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <div className="space-x-8 text-gray-500 text-lg font-semibold">
          <span className="text-black">{blog.author}</span>
          <span>/</span>
          <span>{blog.date}</span>
        </div>
        <div className="flex space-x-8 text-gray-400 font-semibold">
          {blog.tags.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="h-[40vh] w-full mt-7">
        <Image
        alt=""
          src={blog.image}
          width="0"
          height="0"
          className="w-full h-full "
        />
      </div>
      <p className="mt-5">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
