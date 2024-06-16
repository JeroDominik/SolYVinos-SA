'use client'

import { useState } from 'react'
import Image from 'next/image'

import CardTourContent from './contentCardTour'

interface Tours {
  title: string
  description: string
  image: string
}

export default function CardTour ({ title, description, image }: Tours) {
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

  const toursProps = { title, description, image }

  return (
    <>
        <CardTourContent onButtonClick={showModal}
            toursProps={toursProps}
        />

        {modalVisible && (
            <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 bg-black bg-opacity-75 h-full overflow-y-auto" onClick={handleBackgroundClick}>
                <div className="relative w-[90%] sm:w-[85%] lg:max-w-4xl mx-auto my-6">
                    <div className="flex flex-col items-center relative rounded-lg shadow bg-stone-900">
                        <div className="flex items-center justify-between p-4 md:p-6 border-b rounded-t border-gray-500 gap-x-6 sm:gap-x-10 lg:gap-x-20">
                            <h3 className="text-xl font-semibold text-white">
                                {toursProps.title}
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-600 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:text-white" onClick={hideModal}>
                                <svg className="size-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        <Image src="/bodegaFlechadelosAndes.webp"
                            alt="Imagen Bodega Flecha de los Andes"
                            width={350}
                            height={300}
                            className="flex justify-center rounded-sm w-96 h-72 mt-4"
                        />
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-300 text-pretty">
                                {toursProps.description}
                            </p>
                        </div>
                        <div className="flex justify-center gap-5 items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button onClick={hideModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                I accept
                            </button>
                            <button onClick={hideModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700">
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
