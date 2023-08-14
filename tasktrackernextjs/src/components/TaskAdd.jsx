"use client"
import { useRef } from "react";
import { useCartStore } from "@/store/useCartStore";



const TaskAdd = () => {

    const addToCart = useCartStore((state) => state.addToCart)
    const products = useCartStore((state) => state.products);
    const inputRefT = useRef("")
    const inputRefD = useRef("")

    const addCart = () => {

 
      const a=inputRefT?.current?.value;
      const b=inputRefD?.current?.value;
      addToCart({title:a,description:b});
      inputRefD.current.value=""
      inputRefT.current.value=""
      window.location.reload()
      



  
    };

  return (
    <div className='shadow-xl h-max shadow-slate-950 justify-center items-center text-center mt-20 w-2/5 top:50% left:50% m-auto'>
   
        <h1 className='mt-30 font-bold'>Title</h1>
        <input ref={inputRefT} type="text" name="title" className='w-4/5 h-12 p-4 text-lg border-2 border-sky-400 rounded-md outline-none text-black focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed font-bold' />
        <h1 className='mt-10 font-bold'>Description</h1>
        <input ref={inputRefD} type="text" name="description" className='w-4/5 h-12 p-4 text-lg border-2 border-sky-400 rounded-md outline-none text-black focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed font-bold' />
        <hr />
        <button type="submit"className='bg-slate-700 h-10 w-3/5 rounded-2xl' onClick={()=>addCart()}>Save Task</button>

    </div>
  )
}

export default TaskAdd