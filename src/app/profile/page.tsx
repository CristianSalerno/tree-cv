/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Formation from '../components/formation'
import Tree from '../components/tree'


export default function Profile() {
  return (
    <div className='flex  flex-col gap-3 '>
      <h1 className='font-medium '>
        Hi, Welcome to my cv
      </h1>
      <p className='text-left'>
        I'm a <span className='text-red-500'>frontend</span> developer with  <span className='text-red-500'>+4 years of experience</span> in the field of web development. 
        <br/>
        I have a passion for web design and love to create for web and mobile devices. 
        <br/>
        <br/>
        </p>
        <Tree/>
        <Formation />
    </div>
  )
}
