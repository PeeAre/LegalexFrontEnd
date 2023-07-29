import React, { useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export interface ITemplate {
  children?: ReactNode
}

const Template = ({ children }: ITemplate) => {
  const location = useLocation()

  useEffect(() => {
    location.pathname !== '/'
      ? window.scrollTo({
          behavior: 'smooth',
          top: window.innerHeight - 88,
        })
      : location.hash !== ''
      ? window.scrollTo({
          top: document.getElementById(location.hash.replace('#', ''))?.offsetTop! - 88,
          behavior: 'smooth',
        })
      : window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
  })

  return <>{children}</>
}

export default Template

// document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({
//   behavior: 'smooth',
//   block: 'start',
// })
