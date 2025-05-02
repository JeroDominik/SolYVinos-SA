import Header from '@/components/Header/Header'
import AboutUs from '@/components/AboutUs/AboutUs'
import ExperienceValleUco from '@/components/Experiences/experienceValleUco'
import ExperienceLujan from '@/components/Experiences/experienceLujan'
import ExperienceMaipu from '@/components/Experiences/experienceMaipu'
import ExperienceAltaMontana from '@/components/Experiences/experienceAltaMontana'
import ExperienceMas from '@/components/Experiences/experienceMas'
import Beneficios from '@/components/Beneficios/Beneficios'
import Footer from '@/components/Footer/Footer'
import { IconExperience } from '@/components/Icons/Icons'
import type { Dictionary } from '@/types/Dictionary'

interface HomeProps {
  dictionary: Dictionary
}

export default function Home ({ dictionary }: HomeProps) {
  return (
    <div className="flex flex-col mx-auto items-center justify-center overflow-x-hidden overflow-y-auto scroll-smooth">
      <Header dictionary={dictionary.header} />
      <AboutUs dictionary={dictionary.aboutUs} />
      <main className="w-full py-14 sm:py-20" id="experience">
        <h1 className="flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 gap-2 sm:gap-4 my-10 mx-auto">
          <IconExperience />
          {dictionary.title}
        </h1>
        <ExperienceValleUco dictionary={{
          experiencesUco: dictionary.experiencesUco,
          experiencesBoutiqueUco: dictionary.experiencesBoutiqueUco,
          boutiqueUco: dictionary.boutiqueUco
        }}/>
        <ExperienceLujan dictionary={{
          experiencesLujan: dictionary.experiencesLujan,
          experiencesBoutiqueLujan: dictionary.experiencesBoutiqueLujan,
          boutiqueLujan: dictionary.boutiqueLujan
        }}/>
        <ExperienceMaipu dictionary={{
          experiencesMaipu: dictionary.experiencesMaipu,
          experiencesBoutiqueMaipu: dictionary.experiencesBoutiqueMaipu,
          boutiqueMaipu: dictionary.boutiqueMaipu
        }}/>
        <ExperienceAltaMontana dictionary={{ experiencesPotrerillos: dictionary.experiencesPotrerillos }}/>
        <ExperienceMas dictionary={{
          experiencesMas: dictionary.experiencesMas,
          masTitle: dictionary.masTitle
        }}/>
        <Beneficios dictionary={dictionary.beneficios} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </div>
  )
}
