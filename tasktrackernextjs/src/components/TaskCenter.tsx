"use client"
import React,{useState} from 'react'

import TaskGorsel from './TaskGorsel'
import TaskAdd from './TaskAdd'


const TaskCenter = () => {

  const [open,setOpen]=useState(false)
  return (
    <>
    <div className='h-40 w-full flex flex-row justify-between pt-24'>
        <div className='h-32 w-100 pl-24'>
            <h1 className='font-bold text-3xl text-slate-700'>Task Tracker</h1>
        </div>

    </div>

    </>
  )
}

export default TaskCenter
