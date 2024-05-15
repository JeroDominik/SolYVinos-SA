import Image from 'next/image'

export default function AboutUs () {
  return (
    <section className="relative h-screen w-screen bg-neutral-950 border-y-2 border-y-fuchsia-950/60 py-14 sm:py-16 lg:py-20 sm:w-[90%] lg:max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-fuchsia-800/40 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <article className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <Image src="/tunelPotre2.webp"
            alt="Imagen Tunel Potrerillos"
            width={250}
            height={250}
            className="rounded-full size-72"
            />
            <div className="text-pretty text-center">
                <h2></h2>
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2">
                    Estamos dedicados a brindar traslados exclusivos y experiencias inolvidables en las bodegas de la región de Mendoza. Nos especializamos en ofrecer a nuestros clientes la oportunidad de descubrir la belleza del paisaje mendocino bajo el cálido sol, mientras disfrutan de la exquisita cultura del vino argentino.
                </p>
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2">
                    Conta con nosotros para ofrecerte: Traslados privados, atención personalizada, excelente servicio, y siempre cuidando el impacto en el ambiente!
                </p>
            </div>
        </article>
    </section>
  )
}
