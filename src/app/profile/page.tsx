/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Three from '../components/three'


export default function Profile() {
  return (
    <div className='flex items-center justify-center flex-col gap-5 '>
      <h1 className='font-medium '>
        Hi, Welcome to my cv
      </h1>
      <p className='text-left'>
        I'm a <span className='text-red-500'>frontend</span> developer with  <span className='text-red-500'>+4 years of experience</span> in the field of web development. 
        <br/>
        I have a passion for web design and love to create for web and mobile devices. 
        <br/>
        <br/>
        Please see below for my skills and experiences.
        </p>

        <Three/>
    </div>
  )
}
