import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaFacebookF, FaHouse } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8
                border-b-[1.5px] border-white border-opacity-20'>
            <div>
                <div className='flex items-center space-x-2'>
                    <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-red-700 text-white flex items-center justify-center flex-col'>
                        <FaHouse/>
                    </div>
                    <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>
                        HomeHub
                    </h1>
                </div>
                <p className='text-gray-300 mt-6 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, cupiditate!</p>
                <p className='text-gray-300 font-semibold mt-4'>test.test@test.fr</p>
                <p className='text-gray-300 font-semibold mt-2'>+33 0 00 00 00 00</p>
                {/* Socials links */}
                <div className='flex items-center space-x-4 mt-6 cursor-pointer'>
                    <FaFacebookF className='w-6 h-6 text-blue-600'/>
                    <FaTwitter className='w-6 h-6 text-sky-500'/>
                    <FaYoutube className='w-6 h-6 text-red-600'/>
                    <FaInstagram className='w-6 h-6 text-pink-600'/>
                </div>
            </div>

            {/* 2nd  */}
            <div className='md:mx-auto'>
                <h1 className='footer__heading'>Popular Search</h1>
                <p className='footer__link'>Apartement for Rent</p>
                <p className='footer__link'>Apartement Low to High</p>
                <p className='footer__link'>Office for Buy</p>
                <p className='footer__link'>Office for Rent</p>
            </div>
            {/* 3nd  */}
            <div className='md:mx-auto'>
                <h1 className='footer__heading'>Quick Link</h1>
                <p className='footer__link'>Terms of Use</p>
                <p className='footer__link'>Privacy Policy</p>
                <p className='footer__link'>Pricing Plans</p>
                <p className='footer__link'>Our Services</p>
                <p className='footer__link'>Contact Support</p>
                <p className='footer__link'>Carees</p>
                <p className='footer__link'>FAQs</p>
            </div>
            {/* 4nd  */}
            <div className='md:mx-auto'>
                <h1 className='footer__heading'>Discover</h1>
                <p className='footer__link'>Los Angeles</p>
                <p className='footer__link'>Marseille</p>
                <p className='footer__link'>Miami</p>
                <p className='footer__link'>London</p>
                <p className='footer__link'>Paris</p>
            </div>
        </div>
    </div>
  )
}

export default Footer