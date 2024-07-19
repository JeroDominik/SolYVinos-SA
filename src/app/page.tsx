import Header from '@/components/header'
import AboutUs from '@/components/aboutUs'
import Footer from '@/components/footer'
import ExperienceLujan from '@/components/experienceLujan'
import ExperienceValleUco from '@/components/experienceValleUco'
import ExperienceMaipu from '@/components/experienceMaipu'
import ExperienceAltaMontana from '@/components/experienceAltaMontana'
import { IconExperience } from '@/components/Icons/Icons'

export default function Home () {
  return (
    <main className="flex flex-col mx-auto items-center justify-center overflow-x-hidden overflow-y-auto">
      <Header/>
      <AboutUs/>
      <main className="w-full py-14 sm:py-20" id="experience">
        <h1 className="flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200 gap-2 my-10">
          <IconExperience/>
          Nuestros Tours
        </h1>
        <ExperienceValleUco/>
        <ExperienceLujan/>
        <ExperienceMaipu/>
        <ExperienceAltaMontana/>
      </main>
      <Footer />
    </main>
  )
}
