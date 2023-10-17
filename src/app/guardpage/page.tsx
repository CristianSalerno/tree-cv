'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function GuardPage() {
  const router = useRouter()
  return (
    <div>
      ops, keep navigating
      <p className={'cursor-pointer'} onClick={() => router.push('/home')}><span className='text-red-500'>Another try?</span></p>
    </div>
  )
}
