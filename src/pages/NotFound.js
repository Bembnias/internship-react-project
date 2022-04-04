import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImg from '../img/NotFoundImg.svg'
import RouterAnimation from '../components/layout/RouterAnimation'

const NotFound = () => {
  return (
    <RouterAnimation>
      <div className="w-1/3 mx-auto mt-8">
        <img src={NotFoundImg} className="w-full" alt="404 - Page not found" />
        <div className='mx-auto text-center mt-3'>
          <p className='text-3xl text-gray-700 text- font-semibold uppercase'>Oops</p>
          <p className='lead text-gray-500'>It looks like you are lost...</p>
          <div className='mt-4'>
            <Link to={'/'} className="bg-gray-700 hover:bg-gray-600 text-white px-5 border py-2 border-gray-700 rounded-md">Get back</Link>
          </div>
        </div>
      </div>
    </RouterAnimation>
  )
}

export default NotFound