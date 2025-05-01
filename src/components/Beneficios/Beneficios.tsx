import { LogoEntreDos, LogoMaguay, LogoAlquiler, LogoWineShop } from '../Icons/Icons'
import type { BeneficiosDictionary } from '@/types/Dictionary'

interface BeneficiosProps {
  dictionary: BeneficiosDictionary
}

export default function Beneficios ({ dictionary }: BeneficiosProps) {
  return (
    <section className="py-12 border-t-4 border-t-fuchsia-950/60" id="beneficios">
      <h1 className="flex justify-center items-center text-4xl lg:text-5xl font-bold text-gray-200 mt-20 mb-4">
        {dictionary.BeneficiosTitle}
      </h1>
      <p className="text-gray-200 text-center text-xl lg:text-2xl font-semibold mb-14 mx-2">
        {dictionary.BeneficiosDesc}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
        <a className="flex justify-center items-center h-28 md:h-36 bg-gradient-to-b from-fuchsia-950/20 via-transparent to-transparent" href="#">
          <LogoEntreDos/>
        </a>
        <a className="flex flex-col justify-center items-center h-28 md:h-36 bg-gradient-to-b from-fuchsia-950/20 via-transparent to-transparent" href="#">
          <LogoAlquiler/>
          <p className="text-center text-xs text-slate-300 font-extrabold">{dictionary.BeneficiosRentLogo}</p>
        </a>
        <a className="flex justify-center items-center h-28 md:h-36 bg-gradient-to-b from-fuchsia-950/20 via-transparent to-transparent" href="#">
          <LogoMaguay/>
        </a>
        <a className="flex justify-center items-center h-28 md:h-36 bg-gradient-to-b from-fuchsia-950/20 via-transparent to-transparent" href="#">
          <LogoWineShop/>
        </a>
      </div>
    </section>
  )
}
