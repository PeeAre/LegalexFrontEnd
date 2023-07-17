import React from 'react'

const cast = [
  {
    link: '/documents/License.pdf',
    name: 'Лицензия',
    icon: '/images/graduation-scroll.png',
  },
  {
    link: '/documents/Certificate.pdf',
    name: 'Свидетельство о государственной регистрации юридического лица',
    icon: '/images/diploma.png',
  },
  {
    link: '/documents/InternalControl.pdf',
    name: 'Правила внутреннего контроля',
    icon: '/images/rules.png',
  },
  {
    link: '/documents/LegalServicesRules.pdf',
    name: 'Правила осуществления деятельности по оказанию юридических услуг',
    icon: '/images/rules.png',
  },
  {
    link: '/documents/LegalServicesRules.pdf',
    name: 'Правила профессиональной этики лиц, оказывающих юридические услуги',
    icon: '/images/rules.png',
  },
  {
    link: '/documents/LegalServicesRules1.pdf',
    name: 'Политика в области защиты персональных данных',
    icon: '/images/rules.png',
  },
]

const Documents = () => {
  return (
    <>
      <section
        id="Documents"
        className="flex justify-center px-4 py-8 lg:py-16 bg-dark text-white bg-bottom bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url(/images/pluses.png)' }}
      >
        <div className="container">
          <div>
            <span className="text-xl lg:ml-[0.17rem] text-blue_light">Документы</span>
            <h3 className="text-2xl sm:text-4xl lg:text-6xl">
              Информация для
              <span className="text-blue_light font-medium"> клиентов </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8">
              {cast.map(({ link, name, icon }) => {
                return (
                  <div
                    key={name}
                    className="border-2 border-dashed border-blue_light relative h-56 md:h-auto md:aspect-[1] xl:aspect-[2/1] overflow-hidden [&_>_div:last-child]:hover:top-0"
                  >
                    <div className="flex flex-col gap-4 w-full h-full items-center p-4 md:p-8">
                      <div className="bg-blue_light max-w-[4rem] max-h-[4rem] h-full w-full relative z-[1]">
                        <img
                          src={icon}
                          className="w-12 h-12 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
                          alt="icon-document"
                        />
                      </div>
                      <span className="text-center text-lg lg:text-xl">{name}</span>
                    </div>
                    <div
                      className="absolute top-full transition-all duration-300 w-full h-full bg-center bg-cover flex flex-col justify-center items-center"
                      style={{ backgroundImage: 'url(/images/documents1.jpg)' }}
                    >
                      <a
                        href={link}
                        target={'_blank'}
                        rel="noreferrer"
                        className="mt-16 border-2 border-white px-4 py-3 w-fit text-lg hover:border-blue_light bg-blue_dark/40 transition-all duration-300"
                      >
                        Ознакомиться
                      </a>
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

export default Documents
