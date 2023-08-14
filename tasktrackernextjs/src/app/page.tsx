import Image from 'next/image'
import Navbar from '@/components/Navbar'
import TaskCenter from '@/components/TaskCenter'
import TaskAdd from '@/components/TaskAdd'
import TaskGorsel from "@/components/TaskGorsel"

export default function Home() {
  return (
    <>
    <Navbar/>
    <TaskCenter/>
    <TaskAdd/>
    <TaskGorsel/>
    </>
  )
}
