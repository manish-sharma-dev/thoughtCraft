"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function ReturntoHome() {
    const router = useRouter();

  return (
    <div>
      <p onClick={() => router.push('/')}>Home</p>
    </div>
  )
}
