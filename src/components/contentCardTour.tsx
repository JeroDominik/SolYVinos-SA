import Image from 'next/image'

interface CardTourContentProps {
  onButtonClick: () => void
}

export default function CardTourContent ({ onButtonClick }: CardTourContentProps) {
  return (
    <div className="relative h-auto w-auto overflow-hidden rounded-xl p-[1px] backdrop-blur-3xl">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7F44C9_0%,#E2CBFF_50%,#7F44C9_100%)]" />
      <div className="flex flex-col h-full w-full items-center justify-center rounded-xl text-sm xl:text-base font-semibold backdrop-blur bg-stone-900">
        <Image src="/bodegaFlechadelosAndes.webp"
          alt="Imagen Bodega Flecha de los Andes"
          width={350}
          height={300}
          className="rounded-t-xl w-full"
        />
        <div className="p-5 w-full">
          <h3 className="mb-2 text-xl xl:text-2xl font-bold tracking-tight text-gray-300">
            Bodega Flecha de los Andes
          </h3>
          <p className="mb-3 text-gray-300 line-clamp-5 text-pretty">
            Bodega Flechas de los Andes goza de un entorno inigualable y un terroir único donde se dan dos condiciones esenciales para el buen desarrollo de la uva Malbec: clima seco y una gran altitud. Es aquí donde esta variedad tradicional de uva argentina, ha encontrado el lugar ideal para desarrollar todo su potencial.
          </p>
          <button onClick={onButtonClick} className="inline-flex items-center px-3 py-2 text-center text-base xl:text-lg text-stone-900 rounded-lg bg-gray-300 transition hover:scale-105 hover:text-stone-700">
            Vea Más
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
