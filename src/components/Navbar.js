import React from 'react'
import { FiPlus } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='h-20 bg-gray-600 flex text-white font-mono justify-between pl-52 pr-11'>
        <div className='flex justify-center items-center'>
            <ul className='flex gap-10 text-sm'>
                <li className='cursor-pointer'>Item 1</li>
                <li className='cursor-pointer'>Item 2</li>
                <li className='cursor-pointer'>Item 3</li>
                <li className='cursor-pointer'>Item 4</li>
                <li className='cursor-pointer'>Item 5</li>
            </ul>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <div className='h-full flex justify-center items-center cursor-pointer'><FiPlus size={24} /></div>    
            <div className='h-full flex justify-center items-center cursor-pointer'><MdOutlineEmail size={24}/></div>
            <div className='h-full flex justify-center items-center cursor-pointer'><LuBellRing size={24}/></div>
            <div className='cursor-pointer'>
                <div className='bg-gray-400 h-12 w-12 rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
