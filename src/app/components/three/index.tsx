'use client'
import React, { useState } from 'react'


const jobs = { 
  children: [
    {
      name: 'Webcargo',
      info: [
        {
          name: 'Frontend Developer',
          info: [
            {
              name: 'Development of new features for the platform with React, Redux, Context API ',
              info: [
                {
                  name: 'Development of new features for the platform with React, Redux, Context API ',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Easy virtual fair',
      info:[
        {
          name: 'Frontend Developer',
        }
      ]
    }
  ]
}

type TJob = {
  name: string,
  info?: TJob[]
}

function Job({job, depth}: {job: TJob, depth?: number }){
const [isExpanded, setIsExpanded] = useState(false)
 
  return <div key={job.name}>
    <div onClick={() => setIsExpanded(!isExpanded)}>
        <span className={'cursor-pointer font-bold  align-middle mr-2'}>{job?.info && ( isExpanded ? '-' : '+') } </span>  {job.name}
    </div>
    {isExpanded && <div style={{paddingLeft: `${depth * 10}px`}}>
      { job.info?.map((info) => <Job key={info.name} job={info} depth={depth + 1} />) }
    </div>}
  </div>
}

export default function Three() {
  return (
    <div className='min-w-full'>
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
