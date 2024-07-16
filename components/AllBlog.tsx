import React from 'react'
import Image from 'next/image'
import image from '@/public/img-1.jpg'

export default function AllBlog() {
  return (
    <div className='h-[90vh] mb-10 ml-12 '>
    <div className='flex flex-col gap-3'> 

        <div className='All-blog flex justify-between text-wrap gap-5'>
          <Image src={image} alt="All-blogs" className='w-56 h-auto  rounded-sm' />
          <div className='flex flex-col gap-3'>
            <p className='text-sm ' >21-01-2023</p>
            <h2 className='text-base font-semibold'>title thats what will be here</h2>
            <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt natus libero</p>
            <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
          </div>
        </div> 

        <div className='All-blog flex justify-between text-wrap gap-5'>
          <Image src={image} alt="All-blogs" className='w-56 h-auto  rounded-sm' />
          <div className='flex flex-col gap-3'>
            <p className='text-sm ' >21-01-2023</p>
            <h2 className='text-base font-semibold'>title thats what will be here</h2>
            <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt natus libero</p>
            <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
          </div>
        </div> 

        <div className='All-blog flex justify-between text-wrap gap-5'>
          <Image src={image} alt="All-blogs" className='w-56 h-auto  rounded-sm' />
          <div className='flex flex-col gap-3'>
            <p className='text-sm ' >21-01-2023</p>
            <h2 className='text-base font-semibold'>title thats what will be here</h2>
            <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt natus libero</p>
            <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
          </div>
        </div> 

        <div className='All-blog flex justify-between text-wrap gap-5'>
          <Image src={image} alt="All-blogs" className='w-56 h-auto  rounded-sm' />
          <div className='flex flex-col gap-3'>
            <p className='text-sm ' >21-01-2023</p>
            <h2 className='text-base font-semibold'>title thats what will be here</h2>
            <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt natus libero</p>
            <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
          </div>
        </div> 

     </div>
    </div>
  )
}
