import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

const heroes = [
  {
    image: '/images/hero1.jpg',
    caption: 'Мы здесь, чтобы оказывать вам юридическую помощь и обеспечить вашу уверенность',
    helpCaption: 'Получить помощь юрисконсульта',
    link: '/',
  },
  {
    image: '/images/hero2.jpg',
    caption:
      'Мы здесь, чтобы помочь вам подобрать персонал, создавая команду, на которую можно положиться',
    helpCaption: 'Получить помощь HR-менеджера',
    link: '/',
  },
  {
    image: '/images/hero3.jpg',
    caption:
      'Мы здесь, чтобы оказать вам консультацию экономиста и помочь вам развивать свой бизнес',
    helpCaption: 'Получить помощь экономиста',
    link: '/',
  },
  {
    image: '/images/hero4.jpg',
    caption:
      'Мы здесь, чтобы оказать вам бухгалтерскую консультацию и обеспечить ваше финансовое благополучие',
    helpCaption: 'Получить помощь бухгалтера',
    link: '/',
  },
]

const Hero = () => {
  return (
    <>
      <section id="Hero">
        <Swiper
          pagination={{
            clickable: true,
            bulletActiveClass: '!bg-blue_light',
            bulletClass: 'bg-white w-4 h-4 block rounded-full hover:cursor-pointer',
            clickableClass: 'pagination',
          }}
          color={'text-blue_light'}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="relative h-[100vh] [&_.swiper-button-next]:text-blue_light [&_.swiper-button-prev]:text-blue_light"
        >
          {heroes.map((hero) => {
            return (
              <SwiperSlide key={hero.caption}>
                <div className="relative h-full flex justify-center">
                  <div className="absolute top-0 left-0 h-full w-full pointer-events-none select-none">
                    <img
                      src={hero.image}
                      alt="bg"
                      className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-transparent bg-gradient-to-t" />
                  </div>
                  <div className="container h-full">
                    <div className="p-4 relative text-white h-full w-full flex justify-center flex-col">
                      <h1 className="text-6xl md:text-8xl uppercase">LegaLex</h1>
                      <div className="mt-8 flex flex-col gap-4">
                        <span className="text-4xl md:text-6xl">{hero.caption}</span>
                        <Link
                          to={hero.link}
                          className="mt-4 border-2 border-white px-4 py-3 w-fit text-lg hover:border-blue_light bg-blue_dark/40 transition-all duration-300"
                        >
                          {hero.helpCaption}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  )
}

export default Hero
