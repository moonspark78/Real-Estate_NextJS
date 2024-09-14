import Image from 'next/image';
import React from 'react'




type Props={
    city: {
        id: number;
        image: string;
        cityName: string;
        numberOfProperties: number;
    }
}



const CityCard = ({city}: Props) => {
  return (
    <div className='relative rounded-lg overflow-hidden m-2'>
        <Image
            src={city.image}
            alt='Image'
            width={700}
            height={700}
            className='rounded-lg w-full h-[450px] object-cover'
        />
    </div>
  )
}

export default CityCard