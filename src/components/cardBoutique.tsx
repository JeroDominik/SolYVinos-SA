'use client'

import { IconPreView, IconNextView } from './Icons/Icons'
import { useState } from 'react'
import Image from 'next/image'

interface ExperienceDictionary {
  ExperiencesTitle: string
  ExperiencesImg: string
  ExperiencesDesc: string
}
interface ExperienceProps {
  experiencesBoutiqueUco: ExperienceDictionary[]
}

export default function CardBoutique ({ experiencesBoutiqueUco }: ExperienceProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animateSlide, setAnimateSlide] = useState(false)
  const prevSlide = () => {
    setAnimateSlide(false)
    const index = currentIndex === 0 ? experiencesBoutiqueUco.length - 1 : currentIndex - 1
    setCurrentIndex(index)
    setTimeout(() => { setAnimateSlide(true) }, 0)
  }
  const nextSlide = () => {
    setAnimateSlide(false)
    const index = currentIndex === experiencesBoutiqueUco.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(index)
    setTimeout(() => { setAnimateSlide(true) }, 0)
  }
  const currentExperience = experiencesBoutiqueUco[currentIndex]

  return (
        <li className="flex items-center justify-center relative w-[90%] mx-auto h-64 md:h-80 bg-neutral-900 rounded-md border-2 border-fuchsia-950/30 hover:shadow-[0_0_10px_4px_rgba(74,4,78,0.3)] transition">
          <div className="absolute inset-0 bg-fuchsia-800 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
          <div className={`absolute flex gap-8 justify-between overflow-hidden rounded-lg h-full py-4 px-12 ${animateSlide ? 'animate-slideIn' : ''}`}>
            <Image
              src={currentExperience.ExperiencesImg}
              className="w-2/5 rounded"
              alt={`Slide ${currentIndex + 1}`}
              width={700}
              height={450}
            />
            <div className="flex flex-col w-3/5">
                <h3 className="mb-2 text-xl xl:text-2xl font-bold text-center text-gray-300">
                    {currentExperience.ExperiencesTitle}
                </h3>
                <p className="mb-3 text-gray-300 line-clamp-5 text-pretty">
                    {currentExperience.ExperiencesDesc}
                </p>
            </div>
          </div>
          <button className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group"
            type="button"
            onClick={prevSlide}>
            <IconPreView/>
          </button>
          <button className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group"
            type="button"
            onClick={nextSlide}>
            <IconNextView/>
          </button>
        </li>
  )
}
