import { IconIg, IconWsp } from '../Icons/Icons'
import Navbar from './Navbar'
import VideoTunel from './VideoTunel'
import type { HeaderDictionary } from '@/types/Dictionary'

interface HeaderProps {
  dictionary: HeaderDictionary
}

export default function Header ({ dictionary }: HeaderProps) {
  return (
    <header className="relative h-screen w-screen" id="init">
        <VideoTunel/>
        <Navbar dictionary={dictionary}/>
        <section className="relative flex flex-col justify-center h-full gap-y-16">
            <h1 className="flex flex-col text-xl sm:text-2xl lg:text-2xl font-semibold text-slate-300 text-center mb-10 lg:mb-16 gap-y-2 lg:gap-y-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-slate-400 to-slate-200 bg-clip-text text-transparent">Sol y Vino</span>
                {dictionary.HeaderTitle}
            </h1>
            <div className="flex justify-center items-center mt-10 text-lg font-semibold text-slate-200 gap-4">
                <a className="flex justify-center items-center rounded-full border border-white/40 gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 sm:hover:scale-110 hover:scale-105 hover:bg-white/20 transition"
                  href="https://wa.me/5492615078890?text=Gracias%20por%20contactarnos%21%20Somos%20Sol%20y%20Vino%20Experiences.%0ADejanos%20tu%20consulta%20y%20en%20un%20momento%20te%20respondemos%21"
                  target="_blank"
                  rel="noopener noreferrer">
                    <IconWsp/>
                    WhatsApp
                </a>
                <a className="flex justify-center items-center rounded-full border border-white/40 gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 sm:hover:scale-110 hover:scale-105 hover:bg-white/20 transition"
                  href="https://www.instagram.com/solyvinoexperiences_?igsh=MTN5YWlwaGN3dnp1bw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer">
                    <IconIg/>
                    Instagram
                </a>
            </div>
        </section>
    </header>
  )
}
