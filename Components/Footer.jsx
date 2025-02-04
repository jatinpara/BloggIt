import React from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center '>
              <Link href='/'>
            <div className='w-[130px] text-white sm:w-auto font-bold text-3xl'> BloggIt</div>
            </Link>

    <p className='text-sm text-white'>All rights reserved. Copyright @bloggit</p>
    <div className='flex'>
        <Image src={assets.facebook_icon} alt='' width={40}></Image>
        <Image src={assets.twitter_icon} alt='' width={40}></Image>
        <Image src={assets.googleplus_icon} alt='' width={40}></Image>
    </div>
</div>
)
}

export default Footer;
