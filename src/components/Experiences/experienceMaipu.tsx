import CardTour from './cardTour'
import CardBoutique from './cardBoutique'
import Image from 'next/image'
import type { ExperienceDictionary, BoutiqueDictionary } from '@/types/Dictionary'

interface ExperiencesProps {
  dictionary: {
    experiencesMaipu: ExperienceDictionary[]
    experiencesBoutiqueMaipu: ExperienceDictionary[]
    boutiqueMaipu: BoutiqueDictionary
  }
}

export default function ExperienceMaipu ({ dictionary }: ExperiencesProps) {
  const { experiencesMaipu, experiencesBoutiqueMaipu, boutiqueMaipu } = dictionary

  return (
    <section className="py-12">
      <div className="relative w-full h-96 brightness-75 mb-12">
        <Image src="/experiencesMaipu/Experience-Maipu-Viñedo.webp"
          alt="Imagen Experiences Maipu"
          width={1280}
          height={300}
          className="absolute object-center object-cover w-full h-full"
        />
        <h2 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold text-center text-gray-100">
          Experiences
          <span className="font-bold"> Maipú</span>
        </h2>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
        {
          experiencesMaipu.map(experience => (
            <CardTour key={experience.ExperiencesTitle}
            experience={experience}
            />
          ))
        }
      </ol>
      <div className="mx-auto pt-6 sm:pt-10 text-gray-300 w-[90%]">
        <h2 className="text-pretty sm:text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">{boutiqueMaipu.boutiqueTitle}</h2>
        <p className="text-pretty text-base sm:text-lg lg:text-xl font-semibold mb-8 sm:mb-10">{boutiqueMaipu.boutiqueDesc}</p>
        <CardBoutique
          experiencesBoutique={experiencesBoutiqueMaipu}
        />
      </div>
    </section>
  )
}
