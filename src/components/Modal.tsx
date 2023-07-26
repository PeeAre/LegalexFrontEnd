import React, { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'

export interface IModal {
  children?: ReactNode
  isOpen: boolean
  setIsOpen: CallableFunction
  onClose: () => void
  isSize?: boolean
}

const Modal = ({ children, isSize, isOpen, setIsOpen }: IModal) => {
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100] select-none" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[5px]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={clsx(
                    isSize ? 'max-w-4xl' : 'max-w-lg',
                    'w-full  transform overflow-hidden rounded-2xl bg-blue_dark/60 px-6 pb-6 text-left align-middle text-white shadow-xl transition-all'
                  )}
                >
                  <Dialog.Title className="flex justify-end pb-3 pt-4">
                    <button
                      className="h-8 w-8 select-none opacity-75 hover:cursor-pointer hover:opacity-100 focus-visible:outline-none"
                      onClick={closeModal}
                    >
                      <img src="/images/cross.svg" alt="Cross" className="select-none" />
                    </button>
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
