import React from 'react'
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

  return (
    <>
      <section id="About" className="flex justify-center px-4 py-8 lg:py-16 relative">
        <div className="container">
          <div>
            <div>
              <span className="text-xl lg:ml-[0.17rem] text-blue_light">Обратная связь</span>
              <h3 className="text-2xl sm:text-4xl lg:text-6xl">
                Получите персонализированную
                <span className="text-blue_light font-medium"> поддержку</span> от нашей команды
              </h3>
            </div>
            <div className="mt-16">
              <div className="grid lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
                <div className="flex gap-4 lg:gap-8 lg:justify-center">
                  <div className="bg-blue_light max-w-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] h-full w-full relative z-[1]">
                    <img
                      src={'/images/location.png'}
                      className="w-6 h-6 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
                      alt="icon-document"
                    />
                  </div>
                  <span className="md:text-lg">
                    г.Минск, улица Передовая 15, помещение 1, офис 16 Г
                  </span>
                </div>
                <div className="flex gap-4 lg:gap-8 lg:justify-center">
                  <div className="bg-blue_light max-w-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] h-full w-full relative z-[1]">
                    <img
                      src={'/images/calendar.png'}
                      className="w-6 h-6 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
                      alt="icon-document"
                    />
                  </div>
                  <div className="md:text-lg flex flex-col">
                    <span>
                      <b>Понедельник-пятница:</b>
                      <br /> с 9:00 до 18:00, без обеда
                    </span>
                    <span>
                      <b>Выходной: </b>
                      <br />
                      суббота, воскресенье
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 lg:gap-8 flex-col">
                  <div className="flex gap-4 lg:gap-8">
                    <div className="bg-blue_light max-w-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] h-full w-full relative z-[1]">
                      <img
                        src={'/images/phone.png'}
                        className="w-6 h-6 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
                        alt="icon-document"
                      />
                    </div>
                    <span className="md:text-lg">
                      <a
                        href="tel:+375 (44) 790-55-25"
                        className="hover:underline underline-offset-2"
                      >
                        +375 (44) 790-55-25
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-4 lg:gap-8">
                    <div className="bg-blue_light max-w-[2.5rem] max-h-[2.5rem] min-h-[2.5rem] h-full w-full relative z-[1]">
                      <img
                        src={'/images/message.png'}
                        className="w-6 h-6 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
                        alt="icon-document"
                      />
                    </div>
                    <span className="md:text-lg">
                      <a
                        href="mailto:office.legalex@gmail.com"
                        className="hover:underline underline-offset-2"
                      >
                        office.legalex@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <span className="lg:col-span-3 italic text-sm">
                  Поля отмеченные{' '}
                  <span className="border border-red-400 px-2 py-1 bg-blue_light/40 text-white">
                    красной рамкой,
                  </span>{' '}
                  обязательны для заполнения
                </span>
                <form
                  className="grid lg:grid-cols-3 gap-4 lg:gap-8 lg:col-span-3 text-white"
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
                      description: e.currentTarget.elements.message.value,
                    }

                    console.log(JSON.stringify(body))

                    sendFeedback(body)
                    isSuccess && e.currentTarget.reset()
                  }}
                >
                  <input
                    placeholder="ФИО"
                    id="name"
                    name="name"
                    required
                    className="px-1 py-2 md:px-3 md:py-4 border-2 invalid:border-red-400 text-lg border-white hover:border-blue_light bg-blue_light/40 focus-visible:rounded-none focus-visible:border-blue_light !outline-none placeholder:text-white/90"
                  />
                  <input
                    placeholder="Телефон"
                    id="phone"
                    required
                    className="px-1 py-2 md:px-3 md:py-4 border-2 invalid:border-red-400 text-lg border-white hover:border-blue_light bg-blue_light/40 focus-visible:rounded-none focus-visible:border-blue_light !outline-none placeholder:text-white/90"
                  />
                  <select
                    id="type"
                    required
                    className="px-1 py-2 md:px-3 md:py-4 border-2 invalid:border-red-400 text-lg border-white hover:border-blue_light bg-blue_light/40 focus-visible:rounded-none focus-visible:border-blue_light !outline-none placeholder:text-white/90"
                  >
                    <option value="1">Юридическое лицо</option>
                    <option value="0">Физическое лицо</option>
                  </select>
                  <textarea
                    placeholder="Опишите вашу проблему"
                    id="message"
                    required
                    className="lg:col-span-3 px-1 py-2 md:px-3 md:py-4 invalid:border-red-400  border-2 text-lg border-white  hover:border-blue_light bg-blue_light/40 focus-visible:rounded-none focus-visible:border-blue_light !outline-none min-h-[160px] md:min-h-[320px] placeholder:text-white/90"
                  />
                  <button
                    type="submit"
                    className="border-2 border-white px-1 py-2 md:px-3 md:py-4 w-full text-lg lg:col-span-3 hover:border-blue_light bg-blue_dark/40 transition-all duration-300"
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
