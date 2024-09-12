import React from 'react'

const SearchBox = () => {
  return (
    <div className='w-full md:w-[80%] mx-auto bg-white h-[4rem] sm:h-[5rem] flex px-4 sm:px-8 flex-col justify-center rounded-lg'>
        <div className='flex items-center justify-between h-full'>
            <input 
                type="text" 
                placeholder='Enter an adress, city'  
                className='sm:flex-[0.8] h-[70%] bg-gray-100 block rounded-lg outline-none px-4 placeholder:text-sm' 
            />
        </div>
    </div>
  )
}

export default SearchBox