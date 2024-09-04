// import Link from 'next/link'
import { LogoEntreDos, LogoMaguay, LogoAlquiler, LogoWineShop } from './Icons/Icons'

// interface ExperienceDictionary {
//   ExperiencesTitle: string
//   ExperiencesIntro: string
//   ExperiencesImg: string
//   ExperiencesDesc: string
// }
// interface ExperienceProps {
//   experiencesMas: ExperienceDictionary[]
//   masTitle: string
// }
// interface Dictionary {
//   dictionary: ExperienceProps
// }

export default function Beneficios () {
  return (
    <section className="py-12 border-t-4 border-t-fuchsia-950/60">
      <h1 className="flex justify-center items-center text-4xl lg:text-5xl font-bold text-gray-200 mt-10 mb-5">
        Beneficios
      </h1>
      <p className="text-gray-200 text-center text-xl lg:text-2xl font-semibold mb-5">
        Vivi momentos inolvidables con nosotros y obtené descuentos exclusivos en:
      </p>
      <ol className="grid grid-cols-2 lg:grid-cols-3 px-2 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
        <a className="flex justify-center items-center" href="#">
            <LogoEntreDos/>
        </a>
        <a className="flex justify-center items-center" href="#">
            <LogoAlquiler/>
        </a>
        <a className="flex justify-center items-center" href="#">
            <LogoMaguay/>
        </a>
        <a className="flex justify-center items-center" href="#">
            <LogoWineShop/>
        </a>
      </ol>
    </section>
  )
}
