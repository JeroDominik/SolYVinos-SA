'use client'

import { useState } from 'react'
import Image from 'next/image'
import { IconViewMore, IconX } from './Icons/Icons'

interface ExperienceDictionary {
  ExperiencesTitle: string
  ExperiencesIntro: string
  ExperiencesImg: string
  ExperiencesDesc: string
}
interface ExperienceProps {
  experience: ExperienceDictionary
}

export default function CardTour ({ experience }: ExperienceProps) {
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
      <li className="relative h-auto w-auto overflow-hidden rounded-xl p-[1px] backdrop-blur-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7F44C9_0%,#E2CBFF_50%,#7F44C9_100%)]" />
        <div className="flex flex-col h-full w-full items-center justify-center rounded-xl text-sm xl:text-base font-semibold backdrop-blur bg-stone-900 relative">
          <Image src={experience.ExperiencesImg}
            alt={experience.ExperiencesTitle}
            width={675}
            height={465}
            className="rounded-t-xl w-full h-auto sm:h-72 md:h-64 lg:h-60"
          />
          <div className="p-5 w-full">
            <h3 className="mb-2 text-xl xl:text-2xl font-bold tracking-tight text-gray-300">
              {experience.ExperiencesTitle}
            </h3>
            <p className="mb-3 text-gray-300 line-clamp-5 text-pretty">
              {experience.ExperiencesIntro}
            </p>
            <button onClick={showModal} className="inline-flex items-center px-3 py-2 text-center text-base xl:text-lg text-stone-900 rounded-lg bg-gray-300 transition hover:scale-105 hover:text-stone-700">
              Vea Más
              <IconViewMore/>
            </button>
          </div>
        </div>
      </li>

      {modalVisible && (
        <div className="fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 bg-black bg-opacity-75 h-full overflow-y-auto" onClick={handleBackgroundClick}>
          <div className="relative w-[90%] sm:w-[85%] lg:max-w-4xl mx-auto my-6">
            <div className="flex flex-col items-center relative rounded-lg shadow bg-stone-900">
              <div className="flex items-center justify-between p-4 md:p-6 border-b rounded-t border-gray-500 gap-x-6 sm:gap-x-10 lg:gap-x-20">
                <h3 className="text-xl font-semibold text-white">
                  {experience.ExperiencesTitle}
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-600 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:text-white" onClick={hideModal}>
                  <IconX/>
                </button>
              </div>
              <Image src={experience.ExperiencesImg}
                alt={`Imagen de ${experience.ExperiencesTitle}`}
                width={675}
                height={465}
                className="flex justify-center rounded-sm w-96 h-72 mt-4"
              />
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-300 text-pretty">
                  {experience.ExperiencesIntro}
                </p>
                <p className="text-base leading-relaxed text-gray-300 text-pretty">
                  {experience.ExperiencesDesc}
                </p>
              </div>
              <div className="flex justify-center gap-5 items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button onClick={hideModal} type="button" className="py-2.5 px-4 ms-3 text-sm font-medium rounded-lg bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 border-b-2">
                  Contáctenos para más Info
                </button>
                <button onClick={hideModal} type="button" className="py-2.5 px-4 ms-3 text-sm font-medium rounded-lg bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 border-b-2">
                  Contact us for more Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
