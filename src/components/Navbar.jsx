import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <Link to='/'>
            <h1 className="text-center bg-white text-3xl font-bold whitespace-nowrap">
                NewsWallah
            </h1>
        </Link>
    </div>
)
}

export default Navbar