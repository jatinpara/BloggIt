import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const BlogItem = ({title,description,category,image,id}) => {
  return (
<div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black transition-transform duration-300 hover:-translate-x-2 hover:translate-y-2">
<Link href={`/blogs/${id}`}>
        <Image src={image} alt='' width={400} height={400} className='border-b border-black'/>
        </Link>
        <p className="ml-5 mt-5 px-3 py-1 inline-block bg-black text-white text-sm font-medium rounded-md shadow-md">
  {category}
</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-3 text-sm tracking-tight text-gray-700'dangerouslySetInnerHTML={{__html:description.slice(0,120)}} >


            </p>
            <Link href={`/logs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                Read More <Image src={assets.arrow} alt='' width={12} className='ml-2'></Image>
            </Link>
        </div>
    </div>
  )
}

export default BlogItem