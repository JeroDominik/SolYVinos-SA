import Header from '@/components/header'
import AboutUs from '@/components/aboutUs'
import Footer from '@/components/footer'
import ExperienceLujan from '@/components/experienceLujan'
import ExperienceValleUco from '@/components/experienceValleUco'
import ExperienceMaipu from '@/components/experienceMaipu'
import ExperienceAltaMontana from '@/components/experienceAltaMontana'
import ExperienceMas from '@/components/experienceMas'
import { IconExperience } from '@/components/Icons/Icons'

type Lang = 'es' | 'en' | 'pt'

export default async function Home ({ params: { lang } }: { params: { lang: Lang } }) {
  const dictionary = await import(`@/app/dictionaries/${lang}.json`).then(m => m.default)

  return (
    <main className="flex flex-col mx-auto items-center justify-center overflow-x-hidden overflow-y-auto scroll-smooth">
      <Header dictionary={dictionary}/>
      <AboutUs dictionary={dictionary}/>
      <main className="w-full py-14 sm:py-20" id="experience">
        <h1 className="flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 gap-4 my-10">
          <IconExperience/>
          {dictionary.title}
        </h1>
        <ExperienceValleUco dictionary={dictionary}/>
        <ExperienceLujan dictionary={dictionary}/>
        <ExperienceMaipu dictionary={dictionary}/>
        <ExperienceAltaMontana dictionary={dictionary}/>
        <ExperienceMas dictionary={dictionary}/>
      </main>
      <Footer dictionary={dictionary}/>
    </main>
  )
}
