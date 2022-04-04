import React from 'react'

const TableSkeleton = () => {
  return (
    <div className="p-5 animate-pulse">
      <div className='bg-slate-200 w-1/4 h-10 mx-auto rounded-md mb-6'></div>
      <div className='bg-slate-200 w-3/4 h-20 mx-auto rounded-md mb-3'></div>
      <div className='bg-slate-200 w-3/4 h-96 mx-auto rounded-md'></div>
    </div>
  )
}

export default TableSkeleton