'use client'
import React, { useEffect } from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import { useSession, getSession, signOut, signIn } from "next-auth/react"

const Navbar = () => {
  const { data: session, status } = useSession()
  return (
    <header>
      <nav className='min-w-full flex bg-gray-700 text-white p-6  justify-between'>
        <Link href='/dashboard'>
          Dashboard
        </Link>
        {(status == "authenticated") && <h2>Welcome {session?.user?.firstName}</h2>}
        {/* {data.user.name} */}
        {
          (status == "authenticated") ? 
          <CustomButton title='Sign Out' containerStyle={'text-gray-700 rounded-full bg-white min-w-[130px]'} handleClick={()=>signOut()}/> : 
          <CustomButton title='Sign In' containerStyle={'text-gray-700 rounded-full bg-white min-w-[130px]'} handleClick={()=>signIn()}/>  
        }
      </nav>
    </header>
  )
}

export default Navbar