import OurProducts from '@/components/landingPage/sections/ourProducts'
import React from 'react'
export default function ShopHero() {
  return (
   <div>
     <div className="relative h-[50vh] w-full">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/carouselTwo.jpg')] bg-cover bg-center"></div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Shop Now
          </h1>
          <p className="text-lg text-gray-600">
            Discover our premium collection of furniture
          </p>
        </div>
      </div>

    </div>
    <div className='h-20 w-full bg-[#F9F1E7] mb-10'>

    </div>
    <OurProducts />
    
   </div>
  )
}
