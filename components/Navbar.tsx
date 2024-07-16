import React from 'react'
// import CreateBlog from './clientcomponents/CreateBlog'
import ReturntoHome from './clientcomponents/ReturntoHome'

export default function Navbar() {

  return (
    <div className='flex justify-between p-2'>
      
      {/* for logo and logoname */}
     <div className='flex gap-3'>
      <img src='#' alt='logo'/>
      <p>thoughtCraft</p>
     </div>

     {/* for list items  */}
        <ul className='flex gap-4 text-sm items-center'>
          <li className='cursor-pointer'>toggle</li>
          <li className='cursor-pointer'><ReturntoHome /></li>
          <li className='cursor-pointer'>Blogs</li>
          {/* <li className='cursor-pointer'><CreateBlog /></li> */}
          <button className='btn pt-1 pb-1 pl-3 pr-3'>Login</button>
        </ul>

    </div>
  )
}
