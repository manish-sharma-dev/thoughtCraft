import React from 'react'

export default function Newsletter() {
  return (
    <div>
      <p>Suscribe to newletter</p>
      <form className='flex flex-col gap-2'>
        <input type='email' placeholder='Enter Your email' className='input w-56 rounded-sm'/>
        <button className='btn pt-1 pb-1 pl-3 pr-3 text-sm w-24 '>Subscribe</button>
      </form>
    </div>
  )
}
