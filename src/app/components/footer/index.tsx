import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <div>
        <h3 className='font-bold text-lg mb-1 mt-5'>Contact</h3>
        <ul className='flex'>
            <li className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'> <a className='underline cursor-pointer text-red-500' target='_blank' href='https://www.linkedin.com/in/cristian-salerno-25027440/'>Linkedin</a></li>
            <li className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'> <a className='underline cursor-pointer text-red-500'  target='_blank' href='mailto://csalernodev@icloud'>Email</a></li>
            <li className='px-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'> <a className='underline cursor-pointer text-red-500' target='_blank' href='https://github.com/CristianSalerno'> Github</a> </li>
        </ul>
    </div>
  )
}
