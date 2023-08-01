import React from 'react'
import { useLazyGetBannersQuery } from '../store/web/web.api'

const Login = () => {
  const [getBanners, { data: Banners }] = useLazyGetBannersQuery()

  console.log(Banners)
  return (
    <>
      <section id="Login" className="flex justify-center">
        <div className="container">
          <div className="flex h-[100vh] w-full items-center justify-center">
            {/* <form className="grid w-full max-w-2xl gap-2">
              <input
                placeholder="Имя"
                id="name"
                name="name"
                onInvalid={(e) => e.currentTarget.classList.add('invalid:border-rose-500')}
                type="text"
                required
                className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4"
              />
              <input
                placeholder="Пароль"
                id="password"
                name="password"
                onInvalid={(e) => e.currentTarget.classList.add('invalid:border-rose-500')}
                type="password"
                required
                className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg text-white opacity-80 !outline-none placeholder:text-white/90 valid:border-blue_light hover:opacity-100 focus-visible:rounded-none active:opacity-100 md:px-3 md:py-4"
              />
              <button
                type="submit"
                className="w-full border-2 border-white bg-blue_dark/40 px-1 py-2 text-lg text-white transition-all duration-300 hover:border-blue_light md:px-3 md:py-4"
              >
                Войти
              </button>
            </form> */}
            <button
              type="submit"
              onClick={() => {
                getBanners('')
              }}
              className="w-full border-2 border-white bg-blue_dark/40 px-1 py-2 text-lg text-white transition-all duration-300 hover:border-blue_light md:px-3 md:py-4"
            >
              Войти
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
