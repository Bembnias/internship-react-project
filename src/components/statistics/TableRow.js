import React from 'react'
import PropTypes from 'prop-types'

const TableRow = ({ clinic: { attributes }, index }) => {
  return (
    <tr className="bg-white hover:bg-purple-100 border-b ease-in-out duration-300">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <span className='text-purple-500 font-semibold'>{attributes.benefit}</span> <br/>
        <span className="text-xs text-gray-500">{attributes.provider}</span>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        { attributes.statistics !== null ? attributes.statistics['provider-data'].awaiting : 'Brak danych' }
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        { attributes.statistics !== null ? attributes.statistics['provider-data'].removed : 'Brak danych' }
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        { attributes.statistics !== null ? attributes.statistics['provider-data']['average-period'] : 'Brak danych' }
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        { attributes.statistics !== null ? attributes.statistics['provider-data'].update : 'Brak danych' }
      </td>
      
    </tr>
  )
}

TableRow.propTypes = {
  clinic: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default TableRow