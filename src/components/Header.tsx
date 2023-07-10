import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'

interface IHeaderLink {
  title: string
  link: string
  sublinks?: { title: string; link: string }[]
}

const headers: IHeaderLink[] = [
  {
    title: 'Услуги',
    link: '/services',
    // sublinks: [
    //   { title: 'Юридические услуги', link: '/legal' },
    //   { title: 'HR — услуги', link: '/hr' },
    //   { title: 'Услуги экономиста', link: '/economy' },
    //   { title: 'Бухгалтерские услуги', link: '/accounting' },
    // ],
  },
  { title: 'О нас', link: '/about' },
  { title: 'Документы', link: '/documents' },
  { title: 'Связаться с нами', link: '/contactus' },
]

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)
  const [filling, setFilling] = useState(0)
  useEffect(() => {
    document.onscroll = (event) => {
      setFilling(document.documentElement.scrollTop / 320)
    }
  }, [])

  const Contacts = () => {
    return (
      <div className="hidden lg:flex flex-col items-center gap-1">
        <a href="tel:+375 25 2525252" className="hover:underline underline-offset-2">
          +375(25)252-5252
        </a>
        <div className="flex gap-2">
          <a
            href="https://vladislavsavko.t.me"
            target={'_blank'}
            rel="noreferrer"
            className="w-8 h-8 border border-white rounded-full relative hover:bg-blue_light/50"
          >
            <img
              src="/images/telegram.svg"
              alt="telegram"
              className="h-5 w-5 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </a>
          <a
            href="viber://add?number=375252525252"
            target={'_blank'}
            rel="noreferrer"
            className="w-8 h-8 border border-white rounded-full relative hover:bg-blue_light/50"
          >
            <img
              src="/images/viber.svg"
              alt="telegram"
              className="h-5 w-5 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </a>
          <a
            href="https://api.whatsapp.com/375252525252"
            target={'_blank'}
            rel="noreferrer"
            className="w-8 h-8 border border-white rounded-full relative hover:bg-blue_light/50"
          >
            <img
              src="/images/whatsapp.svg"
              alt="telegram"
              className="h-5 w-5 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </a>
          <a
            href="https://www.instagram.com/m/lega.lex/"
            target={'_blank'}
            rel="noreferrer"
            className="w-8 h-8 border border-white rounded-full relative hover:bg-blue_light/50"
          >
            <img
              src="/images/instagram.svg"
              alt="telegram"
              className="h-5 w-5 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
            />
          </a>
        </div>
      </div>
    )
  }

  return (
    <>
      <header
        className="fixed top-0 z-50 flex justify-center p-4 w-full text-white"
        style={{ backgroundColor: `rgba(13, 59, 102, ${filling})` }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <img src="/images/logo-white.png" alt="Legalex" className="w-14 h-14" />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-4xl leading-[1]">LegaLex</span>
                <span className='text-sm lg:text-base'>Юридическая фирма</span>
              </div>
            </div>
            {!isMobile ? (
              <>
                <div className="gap-4 text-2xl hidden lg:flex">
                  {headers.map((link) => {
                    if (!link.sublinks)
                      return (
                        <Link
                          key={link.title}
                          to={link.link}
                          className="border-b-2 border-transparent hover:border-blue_light transition-all"
                        >
                          {link.title}
                        </Link>
                      )
                    // return <></>
                  })}
                </div>
                <Contacts />
              </>
            ) : (
              <>
                <button
                  className="w-12 h-12"
                  onClick={() => {
                    setIsActiveMenu(!isActiveMenu)
                  }}
                >
                  <img src="/images/bars.svg" alt="button-menu" className="w-full h-full object-contain" />
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
