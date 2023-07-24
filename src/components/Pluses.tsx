import React from 'react'

const pluses = [
  {
    icon: '/images/trust.png',
    caption: '99% довольных клиентов',
    description:
      'Наша компания гордится высоким уровнем удовлетворенности клиентов, обеспечивая им профессиональный спект услуг',
  },
  {
    icon: '/images/touch.svg',
    caption: 'Конфиденциальность',
    description:
      'Мы придаем большое значение защите конфиденциальности наших клиентов. Гарантируем полную конфиденциальность и безопасность информации во всех видах предоставляемых нами услуг',
  },
  {
    icon: '/images/time.png',
    caption: 'Полная поддержка',
    description:
      'Мы обеспечиваем полную поддержку наших клиентов. Наша команда профессионалов всегда готова оказать помощь и консультацию, чтобы помочь вам достичь ваших бизнес-целей',
  },
]

const Pluses = () => {
  return (
    <>
      <section
        id="Pluses"
        className="relative flex justify-center bg-dark bg-contain bg-bottom bg-no-repeat object-center p-2 py-8 text-white lg:px-4 lg:py-16"
        style={{ backgroundImage: 'url(/images/pluses.png)' }}
      >
        <div className="container">
          <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
            {pluses.map((plus) => {
              return (
                <div
                  key={plus.caption}
                  className={`relative flex gap-4 p-4 hover:cursor-default lg:p-8 [&_>_div:first-child:after]:hover:h-full [&_>_div:first-child:before]:hover:h-full [&_>_div:first-child_>_div:after]:hover:w-full [&_>_div:first-child_>_div:before]:hover:w-full`}
                >
                  <div className="absolute left-0 top-0 h-full w-full before:left-0 before:top-0 before:block before:h-0 before:w-[2px] before:bg-blue_light before:transition-all before:duration-300 before:content-[''] after:absolute after:right-0 after:top-0 after:block after:h-0 after:w-[2px] after:bg-blue_light after:transition-all after:duration-300 after:content-['']">
                    <div className="absolute left-0 top-0 h-full w-full before:left-0 before:top-0 before:block before:h-[2px] before:w-0 before:bg-blue_light before:transition-all before:duration-300 before:content-[''] after:absolute after:bottom-0 after:left-0 after:block after:h-[2px] after:w-0 after:bg-blue_light after:transition-all after:duration-300 after:content-['']" />
                  </div>
                  <div className="relative z-[1] h-full max-h-[2.5rem] w-full max-w-[2.5rem] bg-blue_light">
                    <img
                      src={plus.icon}
                      alt="plus icon"
                      className="absolute left-2/4 top-2/4 h-6 w-6 -translate-x-2/4 -translate-y-2/4"
                    />
                  </div>
                  <div className="relative z-[1] flex flex-col gap-2">
                    <span className="text-xl leading-[1]">{plus.caption}</span>
                    <span className="leading-5 text-white/60">{plus.description}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pluses
