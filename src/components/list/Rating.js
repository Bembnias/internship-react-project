import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

// Rating component maps through array[5] and renders particular stars in <Star /> component to avoid react's "too many re-renders error"
const Rating = ({ benefit, onChange }) => {
  const [currentRating, setCurrentRating] = useState()
  
  // Wait for current rate update. isFirstRender prevents initial state-data calls
  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    onChange(currentRating, benefit)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRating])
  
  const handleClick = (star) => {
    setCurrentRating(star+1)
  }
  
  return (
    <div className='flex flex-inline text-xl sm:text-3xl space-x-1 sm:space-x-2'>
      {[0,1,2,3,4].map((star) => {
        return <Star 
          key={star}
          active={star < currentRating}
          onClick={() => handleClick(star)}
        />
      })}
    </div>
  )
}

Rating.propTypes = {
  benefit: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Rating