import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const Table = ({applicants}) => {
    
  return (
    <div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-black">
        <thead className="text-xs uppercase bg-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Location
                </th>
                <th scope="col" className="px-6 py-3">
                    Experience
                </th>
                <th scope="col" className="px-6 py-3">
                    Date Applied
                </th>
                <th scope="col" className="px-6 py-3">
                    Role Fit
                </th>
            </tr>
        </thead>
        <tbody>
            {applicants && applicants.map((items, key)=>{                
                return <tr key={key} className=" border-gray-200">
                <td className="px-6 py-4 flex items-center gap-2">
                    <div>
                        <input type='checkbox'/>
                    </div>
                    <div>
                        {items.full_name}
                        <p className='text-gray-400'>In progress</p>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {items.location}
                </td>
                <td className="px-6 py-4">
                    {items.experience} Years
                </td>
                <td className="px-6 py-4">
                    {items.date_applied}
                </td>
                <td className="px-6 py-4 flex justify-between">
                   <div className={` flex justify-center w-20 items-center font-semibold ${items.role_fit == 'High' ? 'text-yellow-400 bg-yellow-50' : ''} ${items.role_fit == 'Medium' ? 'text-blue-400 bg-blue-50' : ''} ${items.role_fit == 'Low' ? 'text-red-400 bg-red-50' : ''}`}>
                    {items.role_fit}
                    </div>
                    <div className='text-gray-400'>
                        <BsThreeDotsVertical/>
                    </div>
                </td>
            </tr>
            })}


        </tbody>
    </table>
</div>


    </div>
  )
}

export default Table
