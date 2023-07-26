import React, { useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export interface ITemplate {
  children?: ReactNode
}

const Template = ({ children }: ITemplate) => {
  const location = useLocation()

  useEffect(() => {
    console.log(window.innerHeight)

    location.pathname !== '/'
      ? window.scrollTo({
          behavior: 'smooth',
          top: window.innerHeight - 94,
        })
      : location.hash !== ''
      ? document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      : window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
    // location.hash !== ''
    //   ? document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //     })
    //   : location.pathname !== '/'
    //   ? document.getElementsByTagName('section')[0].scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //     })
    //   : window.scrollTo({
    //       top: 0,
    //       left: 0,
    //       behavior: 'smooth',
    //     })
  })

  return <>{children}</>
}

export default Template
