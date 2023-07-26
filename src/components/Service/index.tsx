import { Disclosure } from '@headlessui/react'
import React from 'react'

export interface IService {
  id: string
}

const legal_list = [
  {
    caption: 'Консультация',
    description: '',
    tables: [
      {
        title: '',
        rows: [
          {
            caption: 'Устная юридическая консультация',
            price: 'от 70,00',
          },
        ],
      },
    ],
  },
  {
    caption: 'Суд',
    description: '',
    tables: [
      {
        title: '',
        rows: [
          {
            caption: 'Консультирование о перспективах взыскания долгов, сроках и расходах',
            price: 'от 50,00р',
          },
        ],
      },
    ],
  },
]

const Service = ({ content }: { content: IService }) => {
  return (
    <>
      <section id='Service' className="relative mb-8 mt-8 flex justify-center p-4 md:mt-16">
        <div className="container">
          <span className="text-xl text-blue_light lg:ml-[0.17rem]">Юридические услуги</span>
          <h3 className="mb-16 text-2xl sm:text-4xl lg:text-6xl">
            Защита <span className="font-medium text-blue_light"> ваших </span> прав и интересов
          </h3>
          {legal_list.map((item) => {
            return (
              <Disclosure key={item.caption}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mb-2 flex w-full justify-between bg-blue_dark/60 px-4 py-2 text-left text-lg text-white hover:bg-blue_dark focus:outline-none">
                      <span>{item.caption}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text mb-4 px-4 pb-2 pt-4 text-gray-900">
                      {item.tables.map((tableH) => {
                        return (
                          <div key={tableH.title}>
                            <span>{tableH.title}</span>
                            <table className="w-full">
                              {tableH.rows.map((row) => {
                                return (
                                  <tr className="w-full border-b border-blue_dark" key={row.caption}>
                                    <td className="w-3/4 border-r border-blue_dark p-2">
                                      {row.caption}
                                    </td>
                                    <td className="w-1/4 p-2">{row.price}</td>
                                  </tr>
                                )
                              })}
                            </table>
                            <span>{item.description}</span>
                          </div>
                        )
                      })}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Service
