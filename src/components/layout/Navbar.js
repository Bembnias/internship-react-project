import React from 'react'
import { useLocation, Link } from "react-router-dom";
import logo from '../../img/logo.svg'

const Navbar = () => {
  // Check for route index and change active link
  let routeIndex = useLocation()
  let { pathname } = routeIndex

  return (
    <nav>
      {/* Top Bar */}
      <div className='w-full bg-purple-500 p-2 flex justify-between content-center'>
        <div>
          <i className='bx bx-menu text-white text-3xl cursor-pointer pt-1.5'></i>
        </div>

        <img src={logo} style={{width: "100px", color: "#fff"}} alt="mind logo" />

        <div className='flex justify-center space-x-2'>
          <i className='bx bx-search text-white text-3xl pt-2'></i>
          <div className="p-1">
            <img className='rounded-full' src="https://i.pravatar.cc/40?img=12" alt="avatar" />
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <ul className='inline-flex gap-x-4 uppercase px-5 py-1'>
        <li className={`hover:text-purple-400 hover:cursor-pointer ${ pathname === '/' ? 'active-route' : '' }`}>
          <Link to={'/'}>Lista Świadczeń</Link>
        </li>
        <li className={`hover:text-purple-400 hover:cursor-pointer ${ pathname === '/statistics' ? 'active-route' : '' }`}>
          <Link to={'/statistics'}>Statystyki</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar