import React from 'react'
import { FaHouse } from 'react-icons/fa6'

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
                
            </div>
        </div>
    </div>
  )
}

export default Footer