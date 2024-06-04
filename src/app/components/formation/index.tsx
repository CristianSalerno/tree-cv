import React from 'react'

export default function Formation() {
  return (
    <div>
        <h3 className='text-lg mb-1 mt-5'>Formation</h3>
        <div className='flex flex-col ml-4'>
            <div className='flex flex-row'>
                <div className='font-bold'>2008</div>
                <div className='ml-2'>Bachelor degree</div>
            </div>
            <div className='flex flex-row'>
                <div className='font-bold'>2009</div>
                <div className='ml-2'>System Engineer (not finished) -<a className='text-blue-600' target='_blank' href='https://utn.edu.ar/es/'> UTN </a>Argentina</div>
            </div>
            <div className='flex flex-row'>
                <div className='font-bold'>2018</div>
                <div className='ml-2'> <a className='font-bold underline cursor-pointer text-green-600' target='_blank' href='https://www.credential.net/ee0c9db6-2bc7-49d8-8f10-caa43a4f7b90'>Fullstack Developer Bootcamp</a> - <a className='text-blue-600' target='_blank' href='https://neoland.es/'>Neoland</a> Madrid</div>
            </div>
        </div>
    </div>
  )
}
