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
      <main className="relative h-full w-full py-14 sm:py-20 bg-neutral-900" id="experience">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
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
