"use client";
import { cities } from '@/data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CityCard from './CityCard';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 900, min: 770 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablett: {
      breakpoint: { max: 770, min: 500 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };






const CitySlider = () => {
  return (
    <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
        responsive={responsive}
    >
        {cities.map((city) =>{
            return (
                <div key={city.id}>
                    {/* CityCard */}
                    <CityCard city={city}/>
                </div>
            )
        })}
    </Carousel>
  )
}

export default CitySlider