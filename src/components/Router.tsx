import React from 'react'
import { Route, Routes } from 'react-router-dom'
import General from '../pages/General'
import Services from '../pages/Services'
import Header from './Header'

export interface IRoute {
  Component: any
  title: string
  path: string
  url: string
}

const routes: IRoute[] = [
  {
    Component: General,
    title: 'General',
    path: '/:slug?',
    url: '/',
  },
  {
    Component: Services,
    title: 'Services',
    path: '/services/:slug?',
    url: '/services/',
  },
]

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ title, path, Component }) => {
          return <Route key={title + path} path={path} element={<Component />} />
        })}
      </Routes>
    </>
  )
}

export default Router
