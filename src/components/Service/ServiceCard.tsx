import React from 'react'
import { Link } from 'react-router-dom'

export interface IServiceCard {
  id: string
  preview_image: string
  caption: string
}

const ServiceCard = ({ id, preview_image, caption }: IServiceCard) => {
  return (
    <>
      <Link to={`/services/${id}`} className="relative aspect-[1] border-2 border-blue_light">
        <img src={preview_image} className="absolute h-full w-full object-cover" alt='service_preview' />
        <div className="absolute flex h-full w-full flex-col items-center justify-center bg-blue_dark/30 p-4 text-center text-white backdrop-blur-[5px]">
          <h3 className="text-2xl lg:text-4xl xl:text-6xl font-bold">{caption}</h3>
          <button className="mt-16 w-fit border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light">
            Ознакомиться
          </button>
        </div>
      </Link>
    </>
  )
}

export default ServiceCard
