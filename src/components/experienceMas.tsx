import CardTour from './cardTour'
import { IconMoreExperience } from './Icons/Icons'

interface ExperienceDictionary {
  ExperiencesTitle: string
  ExperiencesIntro: string
  ExperiencesImg: string
  ExperiencesDesc: string
}
interface ExperienceProps {
  experiencesMas: ExperienceDictionary[]
  masTitle: string
}
interface Dictionary {
  dictionary: ExperienceProps
}

export default function ExperienceMas ({ dictionary }: Dictionary) {
  const { experiencesMas, masTitle } = dictionary

  return (
    <section className="py-12 border-t-4 border-t-fuchsia-950/60">
        <h1 className="flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 gap-4 my-10">
            <IconMoreExperience/>
            {masTitle}
        </h1>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
            {
                experiencesMas.map(experience => (
                    <CardTour
                    key={experience.ExperiencesTitle}
                    experience={experience}
                    />
                ))
            }
        </ol>
    </section>
  )
}
