import { IconIg, IconWsp } from './Icons/Icons'
import Navbar from './navbar'
import VideoTunel from './videoTunel'

interface HeaderDictionary {
  HeaderTitle: string
  NavInit: string
  NavExperiences: string
}
interface HeaderProps {
  header: HeaderDictionary
}
interface Dictionary {
  dictionary: HeaderProps
}

export default function Header ({ dictionary }: Dictionary) {
  const { header } = dictionary

  return (
    <header className="relative h-screen w-screen" id="init">
        <VideoTunel/>
        <Navbar header={header}/>
        <section className="relative flex flex-col justify-center h-full gap-y-16">
            <h1 className="flex flex-col text-xl sm:text-2xl lg:text-2xl font-semibold text-slate-300 text-center mb-10 lg:mb-16 gap-y-2 lg:gap-y-4">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-slate-400 to-slate-200 bg-clip-text text-transparent">Sol y Vino</span>
                {header.HeaderTitle}
            </h1>
            <div className="flex justify-center items-center mt-10 text-lg font-semibold text-slate-200 gap-4">
                <a className="flex justify-center items-center rounded-full border border-white/40 gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 sm:hover:scale-110 hover:scale-105 hover:bg-white/20 transition" href="#">
                    <IconWsp/>
                    WhatsApp
                </a>
                <a className="flex justify-center items-center rounded-full border border-white/40 gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 sm:hover:scale-110 hover:scale-105 hover:bg-white/20 transition" href="#">
                    <IconIg/>
                    Instagram
                </a>
            </div>
        </section>
    </header>
  )
}
