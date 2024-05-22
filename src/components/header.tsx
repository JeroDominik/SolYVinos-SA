import Navbar from './navbar'

export default function Header () {
  return (
    <header className="relative h-screen w-screen">
        <video className="absolute h-full w-full object-center object-cover top-0 bottom-0 brightness-75"
            playsInline
            width="1280"
            height="1085"
            autoPlay
            muted
            loop>
            <source src="/TunelOptimizado.webm" type="video/webm"/>
        </video>
        <Navbar/>
        <section className="relative flex flex-col justify-evenly h-full -top-24">
            <h1 className="flex flex-col text-xl sm:text-2xl lg:text-2xl font-semibold text-slate-200 text-center mb-10 lg:mb-16 gap-y-2 lg:gap-y-4">
                Disfrute de Mendoza y la mejor experiencia
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-slate-400 to-slate-200 bg-clip-text text-transparent">Sol y Vinos</span>
            </h1>
            <div className="flex justify-center items-center mt-10 text-lg font-semibold text-slate-200 gap-4">
                <a className="flex justify-center items-center rounded-full border border-white/40 gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 sm:hover:scale-110 hover:scale-105 hover:bg-white/20 transition" href="#">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                    </svg>
                    WhatsApp
                </a>
                <a className="flex justify-center items-center rounded-full border border-white/40 gap-x-2 py-1 px-2 md:py-2 md:px-4 bg-white/5 sm:hover:scale-110 hover:scale-105 hover:bg-white/20 transition" href="#">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" />
                    </svg>
                    Correo
                </a>
            </div>
        </section>

    </header>
  )
}
