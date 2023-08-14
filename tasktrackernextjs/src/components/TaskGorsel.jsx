"use client"
import React from 'react'
import { useCartStore } from '@/store/useCartStore';
import Box from "@mui/material/Box";
import {AiFillDelete} from "react-icons/ai"

const TaskGorsel = () => {
    const products = useCartStore((state) => state.products);
    const removeProduct = useCartStore((state) => state.removeProduct);
  return (
    <>
    {products?.map((product)=>
        <div key={product.title} className='shadow-gray-500 shadow-md h-auto flex flex-row justify-between items-center text-center mt-20 w-1/5 top:50% left:50% m-auto'>
            <div className='flex flex-col'>
              <div className='font-light'>{product.title}</div>
              <hr />
              <div className='font-light'>{product.description}</div>
            </div>
            <div className='w-1/5 h-5 cursor-pointer'>
              <AiFillDelete color="red" onClick={(e) => removeProduct(product.title)}/>
            </div>
            

             
        </div>

    )}
    </>
  )

}

export default TaskGorsel
