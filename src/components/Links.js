import React from 'react'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='flex pl-20 gap-6 border h-14 pt-7 text-gray-400'>
        <div className='hover:border-b-4 hover:border-gray-600 hover:text-gray-700'><Link href='/'>Home</Link></div>
        <div className='hover:border-b-4 hover:border-gray-600 hover:text-gray-700'><Link href='/job-description'>Job description</Link></div>
        <div className='hover:border-b-4 hover:border-gray-600 hover:text-gray-700'><Link href='/candidates'>Candidates</Link></div>
    </div>
  )
}

export default Links
