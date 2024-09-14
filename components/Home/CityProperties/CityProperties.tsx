import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import CitySlider from './CitySlider'

const CityProperties = () => {
  return (
    <div className='pb-16 pt-16'>
        <div className='w-[80%] mx-auto'>
            <SectionHeading heading='Explor City Properties'/>
            <div className='mt-10 md:mt-16'>
                <CitySlider/>
            </div>
        </div>
    </div>
  )
}

export default CityProperties