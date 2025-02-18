import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { DM_Sans } from 'next/font/google';

// ✅ Move font initialization outside the component
const dmSans = DM_Sans({
    subsets: ['latin'], 
    weight: ['400', '500', '700'], 
    variable: '--font-dm-sans',
});

const Header = () => {
  return (
    <div className={`bg-gray-300 h-52 ${dmSans.className}`}>
        <div className='pl-20 w-50 pt-8'>
            <div className='flex items-center gap-2'><IoIosArrowBack /> <span>Back to Job List</span></div>
            <div><img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' alt='meta_logo' className='w-36' /></div>
            <div className='text-4xl font-medium'>Cybersecurity Engineer</div>
        </div>
    </div>
  );
}

export default Header;
