import SectionHeading from '@/components/Helper/SectionHeading'
import { properties } from '@/data/data'
import React from 'react'

const Properties = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading='Discover Our Properties'/>
            <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
                {properties.map((property) =>{
                    return <div key={property.id}>

                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Properties