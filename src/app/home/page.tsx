
'use client'
 
import { useRouter } from 'next/navigation'

import React from 'react'

export default function Home() {
  const router = useRouter()

  return (
    <div className={'cursor-pointer'}>
        <p className={'text-lg font-bold'}>Hey, who are you? </p>
        <div className={'text-base font-light'} onClick={() => router.push('/profile')}>Recruiter</div>
        <div className={'text-base font-light'} onClick={() => router.push('/guardpage')}>Other</div>
    </div>
  )
}
