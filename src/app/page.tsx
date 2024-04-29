import Image from 'next/image'

import Navbar from '../components/navbar'
import CardTour from '@/components/cardTour'

export default function Home () {
  return (
    <main className="flex flex-col mx-auto items-center justify-center">
      <header className="relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-950 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <Navbar/>
        <section className="mb-14 mt-16 mx-auto max-w-6xl">
          <h1 className="flex flex-col text-2xl font-semibold text-slate-100 text-center mb-16 gap-y-4">
            Disfrute de Mendoza y la mejor experiencia
            <span className="text-5xl font-bold text-amber-600">Sol y Vinos</span>
          </h1>
          <article className="flex gap-8 justify-center items-center md:items-start">
            <Image src="/tunelPotre2.webp"
              alt="Imagen Tunel Potrerillos"
              width={450}
              height={400}
              className="rounded-xl drop-shadow-lg shadow shadow-amber-900 w-2/5"
            />
            <div className="w-3/5">
              <p className="text-slate-300 text-pretty text-lg lg:text-xl mb-2">
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar del texto final.
              </p>
              <p className="text-slate-300 text-pretty text-lg lg:text-xl">
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar del texto final.
              </p>
            </div>
          </article>
        </section>
      </header>
      <section className="mt-20 mb-10 mx-auto max-w-6xl">
        <h1 className="flex items-end text-4xl font-bold mb-10 text-slate-900 gap-2">
          <svg className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
          Nuestros Tours
        </h1>
        <div className="grid grid-cols-3 gap-5 border-slate-300 bg-slate-200 py-10 px-20 rounded-lg">
          <CardTour/>
          <CardTour/>
          <CardTour/>
          <CardTour/>
        </div>
      </section>
      <footer className="relative h-20 w-full bg-neutral-900 py-20">
        <div className="absolute inset-0 bg-fuchsia-700 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <p className="text-center text-lg font-semibold text-slate-300">Todos los Derechos Reservados, Sol y Vinos</p>
      </footer>
    </main>
  )
}
