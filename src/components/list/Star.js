import React from 'react'
import PropTypes from 'prop-types'

const Star = ({ active, onClick }) => {
  return (
    <i 
      className={`bx bxs-star hover:cursor-pointer ${ active ? 'text-yellow-500' : "text-gray-300" }`}
      onClick={onClick}
    ></i>
  )
}

Star.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Star