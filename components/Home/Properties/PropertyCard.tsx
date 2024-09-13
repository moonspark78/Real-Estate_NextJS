import React from 'react'
import Image from 'next/image'
import { MdElectricBolt } from 'react-icons/md';


type Props ={
    property: { 
        id: number;
        propertyName: string;
        location: string;
        bedrooms: number;
        bathrooms: number;
        size: number;
        price: number;
        imageUrl: string;
    }
}




const PropertyCard = ({property} : Props) => {
  return (

    <div className='bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg'>
        <div className='relative'>
            <Image
                src={property.imageUrl}
                width={300}
                height={300}
                alt={property.propertyName}
                className="w-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <h1 className='px-5 absolute bottom-4 left-4 py-1.5 text-sm bg-black text-white rounded-lg'>
                <span className='text-base font-bold'>${property.price}</span> / mo
            </h1>
            <div className='flex items-center space-x-1 px-6 absolute top-4 left-4 py-2
             text-sm bg-rose-600 w-fit text-white rounded-md font-bold'>
                <MdElectricBolt/>
                <span>Featured</span>
            </div>
        </div>
        <div className='p-5'>

        </div>
    </div>
  )
}

export default PropertyCard