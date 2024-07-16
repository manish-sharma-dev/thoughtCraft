import React from 'react'

export default function NewBlog() {
  return (
    <div>
      <img src='#' alt='recently added Image' />
      <div className='flex flex-col gap-2'>
        <h2 className='text-base font-semibold'>This is title of the image</h2>
        <p className='text-sm opacity-75'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur nobis quis nostrum sunt odit elit. Consequatur nobis quis nostrum sunt odit .</p>
        <button className='btn w-16 pt-1 pb-1 pl-3 pr-3'>Dive in</button>
      </div>
    </div>
  )
}
