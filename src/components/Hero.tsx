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
                <div className="relative flex h-full justify-center">
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-full select-none">
                    <img
                      src={hero.image}
                      alt="bg"
                      className="h-full w-full object-cover brightness-50"
                    />
                    <div className="absolute left-0 top-0 h-full w-full bg-transparent bg-gradient-to-t" />
                  </div>
                  <div className="container h-full">
                    <div className="relative flex h-full w-full flex-col justify-center p-4 text-white">
                      <h1 className="text-6xl uppercase md:text-8xl">LegaLex</h1>
                      <div className="mt-8 flex flex-col gap-4">
                        <span className="text-4xl md:text-6xl">{hero.caption}</span>
                        <Link
                          to={hero.link}
                          className="mt-4 w-fit border-2 border-white bg-blue_dark/40 px-4 py-3 text-lg transition-all duration-300 hover:border-blue_light"
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
