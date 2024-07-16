import React from 'react'

export default function AllBlog() {
  return (
    <div className='flex flex-col gap-5'>
      
      <div className='flex justify-between text-wrap gap-3 overflow-hidden'>
        <img src="#" alt="All-blogs" />
        <div className='flex flex-col gap-2'>
          <p className='text-sm' >21-01-2023</p>
          <h2 className='text-base font-semibold'>title thats what will be here</h2>
          <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt natus libero</p>
          <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
        </div>
      </div>

      <div className='flex justify-between text-wrap gap-3 overflow-hidden'>
        <img src="#" alt="All-blogs" />
        <div className='flex flex-col gap-2'>
          <p className='text-sm' >21-01-2023</p>
          <h2 className='text-base font-semibold'>title thats what will be here</h2>
          <p className='text-xs opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt natus libero</p>
          <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
        </div>
      </div>

    </div>
  )
}
