import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';

const BlogList = () => {

  const [menu,setMenu]=useState('All'); 
  const [blogs , setBlogs] =useState([]);
  
  const fetchBlogs = async()=>{
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log()
  }

  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <div>
        <div className="flex justify-center gap-4 my-10 flex-wrap">
  {["All", "Technology", "Startup", "Lifestyle"].map((category) => (
    <button
      key={category}
      onClick={() => setMenu(category)}
      className={`py-2 px-5 rounded-md transition-all duration-300 
        ${
          menu === category
            ? "bg-black text-white shadow-lg"
            : "bg-gray-200 text-gray-800 hover:bg-black hover:text-white"
        }`}
    >
      {category}
    </button>
  ))}
</div>

        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 mx-24'>
            {blogs.filter((item)=>menu==='All'?true:item.category===menu).map((item,index)=>{
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}></BlogItem>
            })}
        </div>
    </div>
  )
}

export default BlogList