import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
      <nav className='min-w-full flex bg-gray-700 text-white p-6  justify-between'>
        <Link href='/dashboard'>
          Dashboard
        </Link>
        <CustomButton title='Sign In' containerStyle={'text-gray-700 rounded-full bg-white min-w-[130px]'}/>
      </nav>
    </header>
  )
}

export default Navbar