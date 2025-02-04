import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className="px-2 sm:pl-14 py-3 border border-black">
            
            <div className='w-[130px] sm:w-auto font-bold text-3xl'> BloggIt</div>
           
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>

                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addBlog' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white'>
                        <Image src={assets.add_icon} alt='' width={28}>
                        </Image>
                        <p>Add Blogs</p>
                    </Link>
                    <Link href='/admin/blogList'className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white '>
                        <Image src={assets.blog_icon} alt='' width={28}>
                        </Image>
                        <p>Blog Lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white '>
                        <Image src={assets.email_icon} alt='' width={28}>
                        </Image>
                        <p>Subscriptions</p>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Sidebar