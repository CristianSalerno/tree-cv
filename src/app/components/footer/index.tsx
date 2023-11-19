import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <div>
        <h3 className='text-lg mb-1 mt-5'>Contact</h3>
        <ul className='flex'>
            <li className='px-4'> <a className='underline cursor-pointer text-blue-500' target='_blank' href='https://www.linkedin.com/in/cristian-salerno-25027440/'>Linkedin</a></li>
            <li className='px-4'> <a className='underline cursor-pointer text-blue-500'  target='_blank' href='mailto://csalernodev@icloud'>Email</a></li>
            <li className='px-4'> <a className='underline cursor-pointer text-blue-500' target='_blank' href='https://github.com/CristianSalerno'> Github</a> </li>
        </ul>
    </div>
  )
}
