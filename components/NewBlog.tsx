import React from 'react'
import image from '@/public/img-1.jpg'
import Image from 'next/image'

export default function NewBlog() {
  return (
    <div>
      <Image src={image} alt='recently added Image' className=' flex rounded-sm w-auto h-72 mb-3' />
      <div className='flex flex-col gap-2'>
        <h2 className='text-base font-semibold'>This is title of the image</h2>
        <p className='text-xs opacity-75 w-96'>Lorem, ipsum dolor sit amet consectetur adipisicing elit nobis quis nostrum sunt odit elit. Consequatur nobis quis nostrum sut odit .</p>
        <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
      </div>
    </div>
  )
}
