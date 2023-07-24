import React from 'react'

const cast = [
  {
    image: '/images/cast1.jpg',
    name: 'Власенков Владислав',
    job_title: 'Директор',
  },
  {
    image: '/images/cast2.jpg',
    name: 'Гришкова Ольга',
    job_title: 'Юрисконсульт',
  },
  {
    image: '/images/cast3.jpg',
    name: 'Ковалёва Наталья',
    job_title: 'Юрисконсульт 2-ой категории',
  },
  {
    image: '/images/cast4.jpg',
    name: 'Прихожая Екатерина',
    job_title: 'HR-менеджер',
  },
  {
    image: '/images/cast5.jpg',
    name: 'Строич Мария',
    job_title: 'Ведущий экономист',
  },
]

const About = () => {
  return (
    <>
      <section id="About" className="flex justify-center px-4 py-8 lg:py-16">
        <div className="container">
          <div>
            <span className="text-lg text-blue_light lg:ml-[0.17rem] lg:text-xl">О нас</span>
            <h3 className="text-2xl sm:text-4xl lg:text-6xl">
              Наша команда <span className="font-medium text-blue_light">экспертов</span>
            </h3>
            <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {cast.map(({ image, name, job_title }) => {
                return (
                  <div
                    key={name}
                    className="relative flex flex-col items-center grayscale transition-all duration-300 hover:grayscale-0"
                  >
                    <div className="aspect-[2/3] w-full">
                      <img
                        src={image}
                        alt={name}
                        className="pointer-events-none h-full w-full select-none object-cover"
                      />
                    </div>
                    <div className="relative -top-16 flex h-full max-h-[6rem] w-[calc(100%_-_2rem)] flex-col gap-2 bg-white p-4 shadow-md">
                      <span className="text-xl leading-[1]">{name}</span>
                      <span className="leading-5 text-black/60">{job_title}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
