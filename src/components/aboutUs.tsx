import Image from 'next/image'

export default function AboutUs () {
  return (
    <section id="aboutus" className="flex flex-col justify-center relative h-full w-full lg:h-screen lg:w-screen bg-neutral-950 border-y-2 border-y-fuchsia-950/60 py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-fuchsia-800/50 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <h2 className="font-bold text-slate-200 text-2xl sm:text-3xl lg:text-4xl mb-10 sm:mb-16 lg:mb-20 text-center">
            Somos Sol y Vino. Somos Mendoza
        </h2>
        <article className="flex flex-col lg:flex-row gap-8 sm:gap-12 justify-center items-center w-[90%] sm:w-[80%] lg:max-w-5xl mx-auto">
            <Image src="/Img-AboutUs.webp"
            alt="Imagen AboutUs"
            width={250}
            height={250}
            className="rounded-xl h-60 w-52 sm:h-80 sm:w-72 order-2 lg:order-1 mr-5"
            />
            <div className="text-pretty text-center sm:text-start order-1 lg:order-2">
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2 font-medium">
                    Estamos dedicados a brindar traslados exclusivos y experiencias inolvidables en las bodegas de la región de Mendoza. Nos especializamos en ofrecer a nuestros clientes la oportunidad de descubrir la belleza del paisaje mendocino bajo el cálido sol, mientras disfrutan de la exquisita cultura del vino argentino.
                </p>
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2 font-medium">
                    Conta con nosotros para ofrecerte: Traslados privados, atención personalizada, excelente servicio, y siempre cuidando el impacto en el ambiente! Conta con nosotros para ofrecerte: Traslados privados, atención personalizada, excelente servicio, y siempre cuidando el impacto en el ambiente! Conta con nosotros para ofrecerte: Traslados privados, atención personalizada, excelente servicio, y siempre cuidando el impacto en el ambiente!
                </p>
            </div>
        </article>
    </section>
  )
}
