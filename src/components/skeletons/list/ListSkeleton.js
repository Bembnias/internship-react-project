import React from 'react'
import ListSkeletonItem from './ListSkeletonItem'

const ListSkeleton = () => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 py-2`}>
      {[1,2,3,4,5,6,7,8].map(skeleton => {
        return <ListSkeletonItem key={skeleton} />
      })}
    </section>
  )
}


export default ListSkeleton