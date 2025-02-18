'use client';

import React, { useState } from 'react';
import Table from '@/components/Table';
import allApplicantsData from "../../data/applicants.json";
import shortlistedData from "../../data/shortlisted.json"; 
import interviewData from "../../data/interview.json"; 
import { IoFunnelOutline } from "react-icons/io5";

const CandidatesPage = () => {
  const [applicants, setApplicants] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [interview, setInterview] = useState([]);
  const [dataType, setDataType] = useState('all'); 
  
  const handleFetchData = (type) => {
    setDataType(type);
    switch (type) {
      case 'all':
        setApplicants(allApplicantsData);
        break;
      case 'shortlisted':
        setShortlisted(shortlistedData);
        break;
      case 'interview':
        setInterview(interviewData);
        break;
      default:
        break;
    }
  };

  // Determine which data to display based on the `dataType`
  let dataToDisplay = [];
  if (dataType === 'all') {
    dataToDisplay = applicants;
  } else if (dataType === 'shortlisted') {
    dataToDisplay = shortlisted;
  } else if (dataType === 'interview') {
    dataToDisplay = interview;
  }

  return (
    <div className='px-20'>
      <h1 className='text-2xl pt-6 pb-2 font-bold'>Candidates</h1>
      <div className='flex justify-between pb-1'>
        <div className='flex gap-4 text-gray-400'>
          <button className='hover:text-gray-700' onClick={() => handleFetchData('all')}>All Applicants ({allApplicantsData.length})</button>
          <button className='hover:text-gray-700' onClick={() => handleFetchData('shortlisted')}>Shortlisted ({shortlisted.length})</button>
          <button className='hover:text-gray-700' onClick={() => handleFetchData('interview')}>Interview ({interview.length})</button>
        </div>
        <div className='flex justify-center items-center gap-4 pr-2'>
          <form className="max-w-md mx-auto">   
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-60 p-2  ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
              </div>
          </form>
          <div className='text-gray-400'><IoFunnelOutline size={20}/></div>
        </div>
      </div>
      
      <Table applicants={dataToDisplay} />
    </div>
  );
};

export default CandidatesPage;
