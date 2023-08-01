import React from 'react'
import { Route, Routes } from 'react-router-dom'
import General from './pages/General'
import Services from './pages/Services'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Template from './components/Template'
import Login from './pages/Login'

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
  {
    Component: Login,
    title: 'Login',
    path: '/login',
    url: '/login/',
  },
]

const Router = () => {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        {routes.map(({ title, path, Component }) => {
          return (
            <Route
              key={title + path}
              path={path}
              element={
                <Template>
                  <Component />
                </Template>
              }
            />
          )
        })}
      </Routes>
      <Footer />
    </>
  )
}

export default Router
