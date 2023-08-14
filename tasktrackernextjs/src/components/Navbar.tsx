import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className='h-12 w-full p-4 flex justify-between bg-sky-900'>
      <div className='h-32'>
        Navbar
      </div>
      <div className='h-32'>
        <GiHamburgerMenu/>

      </div>
      
    </div>
  )
}

export default Navbar
