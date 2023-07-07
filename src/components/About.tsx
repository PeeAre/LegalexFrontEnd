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
      <section id="About" className="flex justify-center px-4 py-16">
        <div className="container">
          <div>
            <div>
              <span className="text-xl ml-[0.17rem] text-blue_light">О нас</span>
              <h3 className="text-6xl">
                Наша команда <span className="text-blue_light font-medium">экспертов</span>
              </h3>
            </div>
            <div className="grid grid-cols-5 mt-16">
              {cast.map(({ image, name, job_title }) => {
                return (
                  <div
                    key={name}
                    className="grayscale flex flex-col items-center relative hover:grayscale-0 transition-all duration-300"
                  >
                    <div className="aspect-[2/3] w-full">
                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover pointer-events-none select-none"
                      />
                    </div>
                    <div className="bg-white shadow-md p-4 w-[calc(100%_-_2rem)] max-h-[6rem] h-full flex flex-col relative -top-16 gap-2">
                      <span className="text-xl leading-[1]">{name}</span>
                      <span className="text-black/60 leading-5">{job_title}</span>
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
