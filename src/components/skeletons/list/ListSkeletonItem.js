import React from 'react'

// Destructurize clinic.attributes object
const ListSkeletonItem = () => {

  return (
    <div className='grid grid-cols-4 gap-x-1 border shadow border-slate-200 px-5 py-4 animate-pulse'>
      <div className='rounded-full bg-slate-200 h-20 w-20'></div>
      <div className="col-span-3 flex-1 space-y-6 py-1">
        <div className="h-4 bg-slate-200 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-slate-200 rounded col-span-2"></div>
            <div className="h-4 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="h-4 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export default ListSkeletonItem