import React from 'react'


type Props ={
    building: {
        id: number;
        title: string;
        description: string;
        image: string;
    }
}

const BuildingFeatureCard = ({}: Props) => {
  return (
    <div>BuildingFeatureCard</div>
  )
}

export default BuildingFeatureCard