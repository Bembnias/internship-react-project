import React, { useContext } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import Rating from './Rating'
import AlertContext from '../../context/alert/alertContext'

// Destructurize response object
const ListItem = ({ clinic: { 
  benefit, provider, place, address, locality, ramp, elevator, toilet, dates:{date} },
  attributes
}) => {
  const alertContext = useContext(AlertContext)
  const { setAlert } = alertContext

  
  // Format Date
  const formattedDate = {
    year: dayjs(date).format('YYYY'),
    dayOfWeek: dayjs(date).format('ddd'),
    month: dayjs(date).format('MMM'),
    dayOfMonth: dayjs(date).format('D'),
  }

    // Make alert callback, when user rates particular benefit
    const onChange = async (newRating, benefitName) => {
      // Check polish grammar of word "gwiazdka"(ang. "star") depending on stars number
      let checkedWord = ''
      if (newRating === 1) {
        checkedWord = "gwiazdkę"
      } else if (newRating === 5) {
        checkedWord = "gwiazdek"
      } else {
        checkedWord = "gwiazdki"
      }
  
      // Rate and make call to API then wait for response, if error use Alert to show it
      try {
        // @INFO: If you want to see error alert change version=1.3 to version=1.1
        const res = await axios.get('https://api.nfz.gov.pl/app-itl-api/version?api-version=1.3')
        res && setAlert('bg-emerald-400', `Oceniłeś ${benefitName} na ${newRating} ${checkedWord}`, 'bxs-check-circle')
      } catch (error) {
        setAlert('bg-red-400', `Błąd: ${error.message}`, 'bxs-dizzy')
      } 
    }

  return (
    <div className='grid grid-cols-4 gap-x-1'>
      {/* left-side__date */}
      <div className='bg-emerald-600 text-white'>
        <div className="p-5">
          <p className="text-xs font-thin opacity-75">{formattedDate.year}</p>
          <p className='text-xl sm:text-3xl'>{formattedDate.dayOfWeek},</p>
          <p className='text-xl sm:text-3xl'>{formattedDate.month} {formattedDate.dayOfMonth}</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row col-span-3 justify-between content-center bg-white border p-3'>
        {/* right-side__Info */}
        <div className='flex flex-col overflow-hidden'>
          <h5 className='text-lg sm:text-xl font-semibold mb-1'>{benefit}</h5>
          <p className="text-sm sm:text-lg font-semibold mb-1">{provider}</p>
          <div className="text-gray-500 text-xs">
            <p>{place}</p>
            <p>ul. {address}</p>
            <p>{locality}</p>
          </div>
        </div>
        {/* right-side__rating */}
        <div className='flex flex-row-reverse sm:flex-col mt-4 sm:mt-0 content-between justify-between text-right object-scale-down'>
          <Rating benefit={benefit} onChange={onChange}/>
          <p className='text-gray-500'>
            { attributes['benefits-for-children'] === "Y" && <i className="ti ti-mood-kid"></i> }
            { toilet === "Y" && <i className="ti ti-friends"></i> }
            { elevator === "Y" && <i className="ti ti-elevator"></i> }
            { ramp==="Y" && <i className="ti ti-disabled"></i> }
            { attributes['car-park'] === "Y" && <i className="ti ti-parking"></i> }
          </p>
        </div>
      </div>
    </div>
  )
}

ListItem.propTypes = {
  clinic: PropTypes.object.isRequired,
  attributes: PropTypes.object.isRequired
}

export default ListItem