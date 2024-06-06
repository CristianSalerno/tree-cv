'use client'
import React, { useState } from 'react'
import { jobs } from '../../utils/utils'
import CloseIcon from '../../assets/icons/Close'
import OpenIcon from '../../assets/icons/Open'


type TJob = {
  name: string,
  info?: TJob[]
}

function Job({job, depth}: {job: TJob, depth?: number }){
const [isExpanded, setIsExpanded] = useState(false)
 
  return <div key={job.name}>
    <div className='flex mb-4 mt-2 cursor-pointer ' onClick={() => setIsExpanded(!isExpanded)}>
        <span className={'flex  font-bold align-middle mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer'}>
          {job?.info && ( isExpanded ? <CloseIcon width={25} height={25} /> : <OpenIcon width={25} height={25} /> ) } 
        </span>  
        <span className='flex shrink ml-2' dangerouslySetInnerHTML={{ __html: job.name}}></span>
    </div>
    {isExpanded && <div style={{paddingLeft: `${depth * 10}px`}}>
      { job.info?.map((info) => <Job key={info.name} job={info} depth={depth + 1} />) }
    </div>}
  </div>
}

export default function Tree() {
  return (
    <div className='min-w-full max-w-md'>
      <p className='font-bold text-lg mb-1'>Companies who trusted me:</p>
          {jobs.children.map((job : any, index:number) => {
            return (
              <div key={index} className={'flex flex-col ml-4'}>
                <Job job={job} depth={1} />
              </div>
            ) 
            })}
    </div>
  )
}
