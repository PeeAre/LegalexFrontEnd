import React from 'react'
import Hero from '../Hero'
import ServiceCard from './ServiceCard'

const list = [
  {
    id: 'legal',
    preview_image: '/images/service1.jpg',
    caption: 'Юридические услуги',
  },
  {
    id: 'hr',
    preview_image: '/images/service2.jpg',
    caption: 'HR-услуги',
  },
  {
    id: 'economy',
    preview_image: '/images/service3.jpeg',
    caption: 'Услуги экономиста',
  },
  {
    id: 'accounting',
    preview_image: '/images/service4.jpg',
    caption: 'Бухгалтерские услуги',
  },
]

const ServicesList = () => {
  return (
    <>
      <Hero />

      <div className="relative mb-8 mt-8 flex justify-center p-4 md:mt-16">
        <div className="container">
          <span className="text-xl text-blue_light lg:ml-[0.17rem]">Услуги</span>
          <h3 className="text-2xl sm:text-4xl lg:text-6xl">
            Комплексные юридические
            <span className="font-medium text-blue_light"> решения </span>
          </h3>
          <div className="mt-16 grid gap-8  grid-cols-1 sm:grid-cols-2">
            {list.map((service) => {
              return <ServiceCard key={service.id} {...service} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesList
