/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/footer'
import Formation from '../components/formation'
import Tree from '../components/tree'


export default function Profile() {
  return (
    <div className='flex  flex-col gap-3 '>
      <h1 className='font-medium '>
        Hi, Welcome to my cv
      </h1>
      <p className='text-left'>
        I'm a <span className='text-red-500'>frontend</span> developer with  <span className='text-red-500'>+4 years of experience</span> in the field of web development 
        <br/>
        last 3 years i been working remotely for different companies in Spain and USA.
        <br/>
        I have a passion for web design and love to create for web and mobile devices. 
        <br/>
        <br/>
        </p>
        <Tree/>
        <Formation />
        <Footer />
    </div>
  )
}
