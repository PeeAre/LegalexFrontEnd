import { Disclosure } from '@headlessui/react'
import React from 'react'
import { getService } from '../../libs/utils/get-service'

export interface IService {
  id: string
}

const Service = ({ content }: { content: IService }) => {
  const service_ = getService(content.id)
  return (
    <>
      <section id="Service" className="relative mb-8 mt-8 flex justify-center p-4 md:mt-16">
        <div className="container">
          <span className="text-xl text-blue_light lg:ml-[0.17rem]">{service_?.title}</span>
          <h3
            className="mb-16 text-2xl sm:text-4xl lg:text-6xl"
            dangerouslySetInnerHTML={{ __html: service_?.caption! }}
          />
          {service_?.services.map((item, index) => {
            return (
              <Disclosure key={item.caption} defaultOpen={index === 0}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mb-2 flex w-full justify-between bg-blue_dark/60 px-4 py-2 text-left text-lg text-white hover:bg-blue_dark focus:outline-none">
                      <span>{item.caption}</span>
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                          />
                        </svg>
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text mb-4 px-4 pb-2 pt-4 text-gray-900">
                      {item.tables.map((tableH) => {
                        return (
                          <div key={tableH.title}>
                            <span className="font-medium">{tableH.title}</span>
                            <table className="mb-2 w-full">
                              <tbody>
                                {tableH.rows.map((row, index) => {
                                  return (
                                    <tr
                                      className="w-full border-b border-blue_dark"
                                      key={row.caption + index}
                                    >
                                      {row.caption && (
                                        <td
                                          className="w-3/4 border-r border-blue_dark p-2"
                                          dangerouslySetInnerHTML={{ __html: row.caption! }}
                                          rowSpan={
                                            tableH.rows[index + 1]?.caption === ''
                                              ? tableH.rows.length
                                              : 1
                                          }
                                        />
                                      )}
                                      <td className="w-1/4 p-2">{row.price}</td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </table>
                          </div>
                        )
                      })}
                      <span className="font-medium">{item.description}</span>
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
