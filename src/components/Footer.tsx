import React from 'react'
import { Link } from 'react-router-dom'
import { handleAnchorLink } from './Header'

const Footer = () => {
  return (
    <>
      <footer className="relative flex justify-center bg-blue_dark bg-contain bg-bottom bg-no-repeat object-center p-2 py-8 text-white lg:px-4 lg:py-16">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 sm:col-span-4 md:col-span-1 md:items-start">
              <Link to={'/'} className="flex items-center gap-4">
                <img src="/images/logo-white.png" alt="Legalex" className="h-14 w-14" />
                <div className="flex flex-col">
                  <span className="text-2xl leading-[1] lg:text-4xl">LegaLex</span>
                  <span className="text-sm lg:text-base">Юридическая фирма</span>
                </div>
              </Link>
              <span className="text-center text-white/80 md:text-start">
                LegaLex - Ваш комплексный партнер в юриспруденции, финансах и управлении персоналом.
              </span>
            </div>
            <div className="mx-auto w-fit sm:col-span-2 md:col-span-1">
              <span className="text-2xl">Офисная информация</span>
              <div className="flex flex-col gap-2 text-white/80">
                <div className="mt-4 flex items-center gap-2">
                  <img src={'/images/phone.png'} className="h-6 w-6" alt="icon-document" />
                  <a
                    href="tel:+375 (44) 790-55-25"
                    className="underline-offset-2 hover:text-white hover:underline"
                  >
                    +375 (44) 790-55-25
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img src={'/images/message.png'} className="h-6 w-6" alt="icon-document" />
                  <a
                    href="mailto:office.legalex@gmail.com"
                    className="underline-offset-2 hover:text-white hover:underline"
                  >
                    office.legalex@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img src={'/images/location.png'} className="h-6 w-6" alt="icon-document" />
                  <span className="">
                    г.Минск, улица Передовая 15, <br /> помещение 1, офис 16 Г
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <img src={'/images/calendar.png'} className="h-6 w-6" alt="icon-document" />
                  <div className="flex flex-col">
                    <span>
                      <b>Понедельник-пятница:</b>
                      <br /> с 9:00 до 18:00, без обеда
                    </span>
                    <span>
                      <b>Выходной: </b>
                      <br />
                      суббота, воскресенье
                    </span>
                    <span>
                      <b>Для клиентов:</b>
                      <br />
                      24/7 в мессенджерах
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-fit flex-col sm:col-span-2 md:col-span-1">
              <span className="text-2xl">Полезные ссылки</span>
              <div className="flex flex-col text-white/80">
                <Link to="/services" className="mt-4 hover:text-white">
                  Услуги
                </Link>
                <Link
                  to="/#About"
                  className="hover:text-white"
                  onClick={() => handleAnchorLink('/#About')}
                >
                  О нас
                </Link>
                <Link
                  to="/#Documents"
                  className="hover:text-white"
                  onClick={() => handleAnchorLink('/#Documents')}
                >
                  Документы
                </Link>
                <Link
                  to="/#ContactUs"
                  className="hover:text-white"
                  onClick={() => handleAnchorLink('/#ContactUs')}
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
