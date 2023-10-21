'use client'
import React, { useState } from 'react'
import { jobs } from '../../utils/utils'




type TJob = {
  name: string,
  info?: TJob[]
}

function Job({job, depth}: {job: TJob, depth?: number }){
const [isExpanded, setIsExpanded] = useState(false)
 
  return <div key={job.name}>
    <div onClick={() => setIsExpanded(!isExpanded)}>
        <span className={'cursor-pointer font-bold align-middle mr-2'}>{job?.info && ( isExpanded ? '-' : '+') } 
        </span>  <span dangerouslySetInnerHTML={{ __html: job.name}}></span>
    </div>
    {isExpanded && <div style={{paddingLeft: `${depth * 10}px`}}>
      { job.info?.map((info) => <Job key={info.name} job={info} depth={depth + 1} />) }
    </div>}
  </div>
}

export default function Tree() {
  return (
    <div className='min-w-full max-w-md'>
      <p className='text-lg mb-1'>Companies who trusted me:</p>
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
