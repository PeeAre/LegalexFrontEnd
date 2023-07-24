import React, { useEffect, useState } from 'react'
import { IContactUs } from '../modules/contact'
import { useSendFeedbackMutation } from '../store/web/contact.api'

const cast = [
  {
    image: '/images/cast1.jpg',
    name: 'Власенков Владислав',
    job_title: 'Директор',
  },
  {
    image: '/images/cast2.jpg',
    name: 'Гришкова Ольга',
    job_title: 'Юрисконсульт',
  },
  {
    image: '/images/cast3.jpg',
    name: 'Ковалёва Наталья',
    job_title: 'Юрисконсульт 2-ой категории',
  },
  {
    image: '/images/cast4.jpg',
    name: 'Прихожая Екатерина',
    job_title: 'HR-менеджер',
  },
  {
    image: '/images/cast5.jpg',
    name: 'Строич Мария',
    job_title: 'Ведущий экономист',
  },
]

const Contacts = () => {
  const [sendFeedback, { isLoading, isError, isSuccess }] = useSendFeedbackMutation()
  const [isLegal, setIsLegal] = useState(true)

  return (
    <>
      <section id="ContactUs" className="relative flex justify-center px-4 py-8 lg:py-16">
        <div className="container">
          <div>
            <div>
              <span className="text-xl text-blue_light lg:ml-[0.17rem]">Обратная связь</span>
              <h3 className="text-2xl sm:text-4xl lg:text-6xl">
                Получите персонализированную
                <span className="font-medium text-blue_light"> поддержку</span> от нашей команды
              </h3>
            </div>
            <div className="mt-16">
              <div className="grid gap-4 md:gap-8 lg:grid-cols-3 lg:gap-12">
                <div className="flex gap-4 lg:justify-center lg:gap-6">
                  <div className="relative z-[1] h-full max-h-[2.5rem] min-h-[2.5rem] w-full max-w-[2.5rem] bg-blue_light">
                    <img
                      src={'/images/location.png'}
                      className="absolute left-2/4 top-2/4 h-6 w-6 -translate-x-2/4 -translate-y-2/4"
                      alt="icon-document"
                    />
                  </div>
                  <span className="md:text-lg">
                    г.Минск, улица Передовая 15, помещение 1, офис 16 Г
                  </span>
                </div>
                <div className="flex gap-4 lg:justify-center lg:gap-6">
                  <div className="relative z-[1] h-full max-h-[2.5rem] min-h-[2.5rem] w-full max-w-[2.5rem] bg-blue_light">
                    <img
                      src={'/images/calendar.png'}
                      className="absolute left-2/4 top-2/4 h-6 w-6 -translate-x-2/4 -translate-y-2/4"
                      alt="icon-document"
                    />
                  </div>
                  <div className="flex flex-col md:text-lg">
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
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="flex gap-4 lg:gap-8">
                    <div className="relative z-[1] h-full max-h-[2.5rem] min-h-[2.5rem] w-full max-w-[2.5rem] bg-blue_light">
                      <img
                        src={'/images/phone.png'}
                        className="absolute left-2/4 top-2/4 h-6 w-6 -translate-x-2/4 -translate-y-2/4"
                        alt="icon-document"
                      />
                    </div>
                    <span className="md:text-lg">
                      <a
                        href="tel:+375 (44) 790-55-25"
                        className="underline-offset-2 hover:underline"
                      >
                        +375 (44) 790-55-25
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-4 lg:gap-6">
                    <div className="relative z-[1] h-full max-h-[2.5rem] min-h-[2.5rem] w-full max-w-[2.5rem] bg-blue_light">
                      <img
                        src={'/images/message.png'}
                        className="absolute left-2/4 top-2/4 h-6 w-6 -translate-x-2/4 -translate-y-2/4"
                        alt="icon-document"
                      />
                    </div>
                    <span className="md:text-lg">
                      <a
                        href="mailto:office.legalex@gmail.com"
                        className="underline-offset-2 hover:underline"
                      >
                        office.legalex@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <form
                  className="grid gap-4 text-white lg:col-span-3 lg:grid-cols-4 lg:gap-8"
                  onSubmit={(e) => {
                    e.preventDefault()

                    const body: IContactUs = {
                      //@ts-ignore
                      name: e.currentTarget.elements.name.value,
                      //@ts-ignore
                      phone: e.currentTarget.elements.phone.value,
                      //@ts-ignore
                      type: parseInt(e.currentTarget.elements.type.value),
                      //@ts-ignore
                      service: parseInt(e.currentTarget.elements.service.value),
                      //@ts-ignore
                      description: e.currentTarget.elements.message.value,
                    }

                    sendFeedback(body)
                    isSuccess && e.currentTarget.reset()
                  }}
                >
                  {isLegal ? (
                    <input
                      placeholder="Название юридического лица"
                      id="name"
                      name="name"
                      required
                      className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
                    />
                  ) : (
                    <input
                      placeholder="ФИО"
                      id="name"
                      name="name"
                      required
                      className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
                    />
                  )}
                  <input
                    placeholder="Телефон"
                    id="phone"
                    required
                    className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
                  />
                  <select
                    id="type"
                    required
                    onChange={(e) => {
                      setIsLegal(e.currentTarget.selectedIndex == 0 ? true : false)
                    }}
                    className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
                  >
                    <option value="1">Юридическое лицо</option>
                    <option value="0">Физическое лицо</option>
                  </select>
                  <select
                    id="service"
                    required
                    className="border-2 border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
                  >
                    <option value="0">Не могу выбрать специалиста</option>
                    <option value="1">Юридические услуги</option>
                    <option value="2">Услуги экономиста</option>
                    <option value="3">Бухгалтерские услуги</option>
                    <option value="4">Услуги специалистра по кадрам</option>
                    <option value="5">HR - услуги</option>
                  </select>
                  <textarea
                    placeholder="Опишите вашу проблему"
                    id="message"
                    required
                    className="min-h-[160px] border-2 border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90  invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:min-h-[320px] md:px-3 md:py-4 lg:col-span-4"
                  />
                  <div className="flex gap-2 text-black lg:col-span-4">
                    <input type="checkbox" id="personaldata" name="personaldata" required />
                    <label htmlFor="personaldata">
                      Я ознакомлен с{' '}
                      <a
                        href="/tuda.pdf"
                        className="font-bold hover:underline hover:underline-offset-2"
                      >
                        Политикой в области обработки персональных данных
                      </a>{' '}
                      и даю своё согласие на их обработку
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full border-2 border-white bg-blue_dark/40 px-1 py-2 text-lg transition-all duration-300 hover:border-blue_light md:px-3 md:py-4 lg:col-span-4"
                  >
                    Свяжитесь со мной
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacts
