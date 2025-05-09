import CardTour from './cardTour'
import Image from 'next/image'
import type { ExperienceDictionary } from '@/types/Dictionary'

interface ExperiencesProps {
  dictionary: {
    experiencesPotrerillos: ExperienceDictionary[]
  }
}

export default function ExperienceAltaMontana ({ dictionary }: ExperiencesProps) {
  const { experiencesPotrerillos } = dictionary

  return (
    <section className="py-12">
      <div className="relative w-full h-96 brightness-75 mb-12">
        <Image src="/experiencesAltaMontana/Experience-AltaMontaña.webp"
          alt="Imagen Experiences AltaMontana"
          width={1280}
          height={300}
          className="absolute object-center object-cover w-full h-full"
        />
        <h2 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold text-center text-gray-100">
          Experiences
          <span className="font-bold"> Potrerillos</span>
        </h2>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
        {
          experiencesPotrerillos.map(experience => (
            <CardTour key={experience.ExperiencesTitle}
            experience={experience}
            />
          ))
        }
      </ol>
    </section>
  )
}
