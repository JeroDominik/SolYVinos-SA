import { IconIg, IconMail, IconWsp } from '../Icons/Icons'
import type { FooterDictionary } from '@/types/Dictionary'

interface FooterProps {
  dictionary: FooterDictionary
}

export default function Footer ({ dictionary }: FooterProps) {
  return (
    <footer className="relative h-full w-full bg-neutral-900 py-14 sm:py-16 lg:py-20 border-t-2 border-t-fuchsia-950/60">
        <div className="absolute inset-0 bg-fuchsia-800 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="backdrop-blur-xl mx-10 md:mx-14 flex flex-col lg:flex-row items-center justify-center md:justify-between">
            <span className="text-base sm:text-lg lg:text-xl text-slate-300 transition hover:text-slate-100 text-center font-semibold">
                © 2025
                <a href="/"> Sol y Vino™</a>
                {dictionary.FooterRights}
            </span>
            <ul className="flex mt-4 justify-center lg:mt-0 gap-x-2 sm:gap-x-4 items-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-300 transition hover:text-slate-100">
                    {dictionary.FooterContact}
                </h3>
                <a className="size-6 text-slate-300 hover:text-slate-100"
                   href="https://www.instagram.com/solyvinoexperiences_?igsh=MTN5YWlwaGN3dnp1bw%3D%3D"
                   target="_blank"
                   rel="noopener noreferrer">
                    <IconIg/>
                </a>
                <a className="size-6 text-slate-300 hover:text-slate-100"
                   href="https://wa.me/5492615078890?text=Gracias%20por%20contactarnos%21%20Somos%20Sol%20y%20Vino%20Experiences.%0ADejanos%20tu%20consulta%20y%20en%20un%20momento%20te%20respondemos%21"
                   target="_blank"
                   rel="noopener noreferrer">
                    <IconWsp/>
                </a>
                <a className="size-6 text-slate-300 hover:text-slate-100"
                   href="mailto:solyvinoexperiences@gmail.com">
                    <IconMail/>
                </a>
            </ul>
        </div>
    </footer>
  )
}
