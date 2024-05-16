'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CardTour () {
  const [modalVisible, setModalVisible] = useState(false)

  const showModal = () => {
    setModalVisible(true)
  }
  const hideModal = () => {
    setModalVisible(false)
  }
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      hideModal()
    }
  }

  return (
    <>
        <div className="relative h-auto w-auto overflow-hidden rounded-xl p-[1px] backdrop-blur-3xl">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7F44C9_0%,#E2CBFF_50%,#7F44C9_100%)]"/>
            <div className="flex flex-col h-full w-full items-center justify-center rounded-xl text-sm xl:text-base font-semibold backdrop-blur-3xl bg-stone-900">
                <Image src="/bodegaFlechadelosAndes.webp"
                    alt="Imagen Bodega Flecha de los Andes"
                    width={350}
                    height={300}
                    className="rounded-t-xl w-full"
                />
                <div className="p-5 w-full">
                    <h3 className="mb-2 text-xl xl:text-2xl font-bold tracking-tight text-gray-300">
                        Bodega Flecha de los Andes
                    </h3>
                    <p className="mb-3 text-gray-300 line-clamp-5 text-pretty">
                        Bodega Flechas de los Andes goza de un entorno inigualable y un terroir único donde se dan dos condiciones esenciales para el buen desarrollo de la uva Malbec: clima seco y una gran altitud. Es aquí donde esta variedad tradicional de uva argentina, ha encontrado el lugar ideal para desarrollar todo su potencial.
                    </p>
                    <button onClick={showModal} className="inline-flex items-center px-3 py-2 text-center text-base xl:text-lg text-stone-900 rounded-lg bg-gray-300 transition hover:scale-105 hover:text-stone-700">
                        Vea Más
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {modalVisible && (
            <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-full bg-black bg-opacity-70" onClick={handleBackgroundClick}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={hideModal}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={hideModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                I accept
                            </button>
                            <button onClick={hideModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}
