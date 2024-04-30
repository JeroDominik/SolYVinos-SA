import Image from 'next/image'

export default function CardTour () {
  return (
    <div className="relative h-auto max-w-[350px] overflow-hidden rounded-xl border border-gray-300 p-[1px] backdrop-blur-3xl">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#7F44C9_50%,#E2CBFF_100%)]"/>
        <div className="flex flex-col h-full w-full items-center justify-center rounded-xl bg-gray-300 text-sm font-medium backdrop-blur-3xl">
            <Image src="/bodegaFlechadelosAndes.webp"
                alt="Imagen Bodega Flecha de los Andes"
                width={350}
                height={300}
                className="rounded-t-lg"
            />
            <div className="p-5">
                <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    Bodega Flecha de los Andes
                </h3>
                <p className="mb-3 font-medium text-gray-800 line-clamp-5 text-pretty">
                    Bodega Flechas de los Andes goza de un entorno inigualable y un terroir único donde se dan dos condiciones esenciales para el buen desarrollo de la uva Malbec: clima seco y una gran altitud. Es aquí donde esta variedad tradicional de uva argentina, ha encontrado el lugar ideal para desarrollar todo su potencial.
                </p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-300 rounded-lg bg-purple-950 transition hover:scale-105 hover:text-gray-200">
                    Vea Más
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}
