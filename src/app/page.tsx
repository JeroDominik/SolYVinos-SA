import Image from 'next/image'

import Navbar from '../components/navbar'
import CardTour from '@/components/cardTour'
import Footer from '@/components/footer'

export default function Home () {
  return (
    <main className="flex flex-col mx-auto items-center justify-center">
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
                Lorem ipsum es el texto que se usa habitual mente en diseño gráfico en demostraciones de tipografías o de borra dores de diseño para probar el diseño visual antes de insertar del texto final.
              </p>
              <p className="text-slate-300 text-base sm:text-lg lg:text-xl">
                Lorem ipsum es el texto que se usa habitual mente en diseño gráfico en demostraciones de tipografías o de borra dores de diseño para probar el diseño visual antes de insertar del texto final.
              </p>
            </div>
          </article>
        </section>
      </header>
      <section className="my-14 sm:my-20 mx-auto w-full sm:w-[90%] lg:max-w-6xl">
        <h1 className="flex justify-center lg:justify-start items-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-slate-900 gap-2">
          <svg className="size-7 md:size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
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
