import Image from 'next/image'

export default function AboutUs () {
  return (
    <section id="aboutus" className="flex flex-col justify-center relative h-full w-full lg:h-screen lg:w-screen bg-neutral-950 border-y-2 border-y-fuchsia-950/60 py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-fuchsia-800/50 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <h2 className="font-bold text-slate-200 text-2xl sm:text-3xl lg:text-4xl my-10 sm:my-16 lg:my-20 text-center">
            Somos Sol y Vino. Somos Mendoza
        </h2>
        <article className="flex flex-col lg:flex-row gap-8 sm:gap-12 justify-center items-center w-[90%] sm:w-[80%] lg:max-w-5xl mx-auto mb-10 sm:mb-16">
            <Image src="/ImgAboutUs.webp"
            alt="Imagen AboutUs"
            width={250}
            height={250}
            className="rounded-xl h-60 w-52 sm:h-80 sm:w-72 order-2 lg:order-1 mr-5"
            />
            <div className="text-pretty text-center sm:text-start order-1 lg:order-2">
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2 font-medium">
                    Sol y Vino Experiences te invita a vivir momentos inolvidables en la encantadora región de Mendoza. Nos especializamos en ofrecer traslados exclusivos y aventuras cautivadoras que te permitirán explorar la belleza del paisaje mendocino mientras te sumerges en la fascinante cultura del vino y la gastronomía local.
                </p>
                <p className="text-slate-300 text-base sm:text-lg lg:text-xl mb-2 font-medium">
                    Desde emocionantes recorridos por bodegas de prestigio hasta degustaciones culinarias en los rincones más encantadores, estamos aquí para hacer realidad tus sueños en Mendoza. Personalizamos cada experiencia según tus preferencias y deseos, asegurando que cada momento sea único y memorable. Únete a nosotros y descubre la verdadera esencia de Mendoza en un viaje lleno de aventura y deleite.
                </p>
            </div>
        </article>
    </section>
  )
}
