import Image from 'next/image'

import Navbar from '../components/navbar'

export default function Home () {
  return (
    <main className="flex flex-col mx-auto items-center justify-center">
      <header className="relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-900 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <Navbar/>
        <section className="my-10 mx-auto w-[95%]">
          <h1 className="text-3xl font-semibold text-slate-300 text-center mb-14">
            Disfrute de Mendoza y la mejor experiencia, con
            <span className="font-bold text-amber-500"> Sol y Vinos</span>
          </h1>
          <article className="flex gap-8 justify-center items-center md:items-start">
            <Image src="/tunelPotre2.webp"
              alt="Imagen Tunel Potrerillos"
              width={450}
              height={400}
              className="rounded-xl drop-shadow-lg shadow shadow-amber-900 w-2/5"
            />
            <div className="w-3/5">
              <p className="text-slate-300 text-pretty text-lg mb-2">
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar del texto final.
              </p>
              <p className="text-slate-300 text-pretty text-lg">
                Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar del texto final.
              </p>
            </div>
          </article>
        </section>
      </header>
      <section className="flex mt-10">
        Hola Mundo
      </section>
    </main>
  )
}
