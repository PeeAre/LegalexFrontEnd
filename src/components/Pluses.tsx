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
        className="flex justify-center p-2 lg:px-4 py-8 lg:py-16 relative bg-dark text-white object-center bg-bottom bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url(/images/pluses.png)' }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
            {pluses.map((plus) => {
              return (
                <div
                  key={plus.caption}
                  className={`flex gap-4 p-4 lg:p-8 relative [&_>_div:first-child:before]:hover:h-full [&_>_div:first-child:after]:hover:h-full [&_>_div:first-child_>_div:before]:hover:w-full [&_>_div:first-child_>_div:after]:hover:w-full hover:cursor-default`}
                >
                  <div className="absolute before:transition-all after:transition-all before:duration-300 after:duration-300 top-0 left-0 w-full h-full before:block before:content-[''] before:h-0 before:w-[2px] before:top-0 before:left-0 before:bg-blue_light after:block after:content-[''] after:h-0 after:absolute after:w-[2px] after:top-0 after:right-0 after:bg-blue_light">
                    <div className="absolute before:transition-all after:transition-all before:duration-300 after:duration-300 top-0 left-0 w-full h-full before:block before:content-[''] before:h-[2px] before:w-0 before:top-0 before:left-0 before:bg-blue_light after:block after:content-[''] after:w-0 after:absolute after:h-[2px] after:bottom-0 after:left-0 after:bg-blue_light" />
                  </div>
                  <div className="bg-blue_light max-w-[2.5rem] max-h-[2.5rem] h-full w-full relative z-[1]">
                    <img
                      src={plus.icon}
                      alt="plus icon"
                      className="w-6 h-6 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
                    />
                  </div>
                  <div className="flex flex-col gap-2 relative z-[1]">
                    <span className="text-xl leading-[1]">{plus.caption}</span>
                    <span className="text-white/60 leading-5">{plus.description}</span>
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
