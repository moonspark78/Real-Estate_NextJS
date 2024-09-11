import React from 'react'
import Link from 'next/link'
import { navLinks } from './Nav'

const MobileNav = () => {
  return <div>
      {/* Overlay */}
        <div className='transform fixed transition-all duration-500 inset-0 z-[100] bg-black opacity-70 w-full h-screen'></div>
      {/* NavLinks */}
      <div className='text-white transform transition-all duration-500 delay-300'>
      {navLinks.map(navLink =>{
                return <Link key={navLink.id} href={navLink.url}>
                  <p className='font-medium hover:text-yellow-300'>{navLink.label}</p>
                </Link>
      })}
      </div>
    </div>
  
}

export default MobileNav