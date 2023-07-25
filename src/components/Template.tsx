import React, { useEffect, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export interface ITemplate {
  children?: ReactNode
}

const Template = ({ children }: ITemplate) => {
  const location = useLocation()

  useEffect(() => {
    location.hash === ''
      ? window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      : document.getElementById(location.hash.replace('#', ''))?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
  })

  return <>{children}</>
}

export default Template
