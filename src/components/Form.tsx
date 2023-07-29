import React, { useState, useEffect, useRef } from 'react'
import Modal from './Modal'
import { useSendFeedbackMutation } from '../store/web/contact.api'
import { IContactUs } from '../modules/contact'

export interface IForm {
  selectService?: number
}

const Form = ({ selectService }: IForm) => {
  const [sendFeedback, { isError, isSuccess }] = useSendFeedbackMutation()
  const [isLegal, setIsLegal] = useState(true)
  const [isActiveSendModal, setIsActiveSendModal] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (isError || isSuccess) {
      setIsActiveSendModal(i => !i)
      formRef?.current?.reset()
    }
  }, [isSuccess, isError])

  return (
    <>
      <Modal
        isOpen={isActiveSendModal}
        setIsOpen={setIsActiveSendModal}
        onClose={() => setIsActiveSendModal(false)}
      >
        {isSuccess ? (
          <div className="flex flex-col justify-center gap-2 text-lg">
            <span>Ваше сообщение отправлено!</span>
            <span>В ближайшее время с вами свяжется наш специалист.</span>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-2 text-lg">
            <span>
              Приносим свои извинения, но в данный момент сообщение не может быть отправлено.
            </span>
            <span>Попробуйте изменить заполняемые данные или попробуйте другие способы связи.</span>
            <span>Спасибо за понимание!</span>
          </div>
        )}
      </Modal>
      <form
        ref={formRef}
        className="grid gap-4 lg:col-span-3 lg:grid-cols-4 lg:gap-8"
        id="ContactUsForm"
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
        }}
      >
        <select
          id="type"
          required
          onChange={(e) => {
            setIsLegal(e.currentTarget.selectedIndex === 0 ? true : false)
          }}
          className="border-2 text-white border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
        >
          <option value="1">Юридическое лицо</option>
          <option value="0">Физическое лицо</option>
        </select>
        <select
          id="service"
          required
          defaultValue={selectService}
          className="border-2 text-white border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
        >
          <option value="0">Не могу выбрать специалиста</option>
          <option value="1">Юридические услуги</option>
          <option value="2">Услуги экономиста</option>
          <option value="3">Бухгалтерские услуги</option>
          <option value="4">Услуги специалистра по кадрам</option>
          <option value="5">HR - услуги</option>
        </select>
        {isLegal ? (
          <input
            placeholder="Название юридического лица"
            id="name"
            name="name"
            required
            className="border-2 text-white border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
          />
        ) : (
          <input
            placeholder="Имя"
            id="name"
            name="name"
            type="text"
            required
            className="border-2 text-white border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
          />
        )}
        <input
          placeholder="Телефон"
          type="tel"
          id="phone"
          required
          className="border-2 text-white border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90 invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:px-3 md:py-4 lg:col-span-2"
        />

        <textarea
          placeholder="Опишите вашу проблему"
          id="message"
          required
          className="min-h-[160px] border-2 text-white border-white bg-blue_light/40 px-1 py-2 text-lg !outline-none placeholder:text-white/90  invalid:border-red-400 hover:border-blue_light focus-visible:rounded-none focus-visible:border-blue_light md:min-h-[320px] md:px-3 md:py-4 lg:col-span-4"
        />
        {!isLegal && (
          <div className="flex gap-2 lg:col-span-4">
            <input type="checkbox" id="personaldata" name="personaldata" required />
            <label htmlFor="personaldata">
              Я ознакомлен с{' '}
              <a
                href="/documents/Personal.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline hover:underline-offset-2"
              >
                Политикой в области обработки персональных данных
              </a>{' '}
              и даю своё согласие на их обработку
            </label>
          </div>
        )}
        <button
          type="submit"
          className="w-full border-2 text-white border-white bg-blue_dark/40 px-1 py-2 text-lg transition-all duration-300 hover:border-blue_light md:px-3 md:py-4 lg:col-span-4"
        >
          Свяжитесь со мной
        </button>
      </form>
    </>
  )
}

export default Form
