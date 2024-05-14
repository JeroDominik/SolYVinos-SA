import Image from 'next/image'

import Header from '@/components/header'
import Navbar from '../components/navbar'
import CardTour from '@/components/cardTour'
import Footer from '@/components/footer'

export default function Home () {
  return (
    <main className="flex flex-col mx-auto items-center justify-center overflow-x-hidden">
      <header className="relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-950/70 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <Navbar/>
        <section className="mb-10 mt-12 sm:mb-14 sm:mt-16 mx-auto max-w-6xl">
          <h1 className="flex flex-col text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-100 text-center mb-10 lg:mb-16 gap-y-2 lg:gap-y-4">
            Disfrute de Mendoza y la mejor experiencia
            <span className=" text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-t from-[#f59b33] to-[#ad5e02] bg-clip-text text-transparent">Sol y Vinos</span>
          </h1>
          <article className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start ml-0 lg:mx-2">
            <Image src="/tunelPotre2.webp"
              alt="Imagen Tunel Potrerillos"
              width={450}
              height={400}
              className="rounded-xl drop-shadow-lg shadow shadow-amber-950 w-[90%] sm:w-3/5 lg:w-2/5"
            />
            <div className="w-[95%] sm:w-4/5 lg:w-3/5 text-pretty">
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2">
                Estamos dedicados a brindar traslados exclusivos y experiencias inolvidables en las bodegas de la región de Mendoza. Nos especializamos en ofrecer a nuestros clientes la oportunidad de descubrir la belleza del paisaje mendocino bajo el cálido sol, mientras disfrutan de la exquisita cultura del vino argentino.
              </p>
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2">
                Conta con nosotros para ofrecerte: Traslados privados, atención personalizada, excelente servicio, y siempre cuidando el impacto en el ambiente!
              </p>
              <div className="flex justify-center lg:justify-start mt-6 lg:mt-12 xl:mt-16 text-lg font-semibold text-slate-200 gap-4 backdrop-blur">
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
            </div>
          </article>
        </section>
      </header>
      <Header/>
      <section className="my-14 sm:my-20 mx-auto w-full sm:w-[90%] lg:max-w-6xl">
        <h1 className="flex justify-center lg:justify-start items-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-slate-900 gap-2">
          <svg className="size-7 sm:size-8 lg:size-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
          Nuestros Tours
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border-slate-300 bg-slate-200 px-6 py-10 sm:px-10 xl:px-16 rounded-lg">
          <CardTour/>
          <CardTour/>
          <CardTour/>
          <CardTour/>
        </div>
      </section>
      <Footer />
    </main>
  )
}
