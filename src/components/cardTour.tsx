import Image from 'next/image'

export default function CardTour () {
  return (
    <div className="max-w-[350px] border rounded-lg shadow bg-gray-400 border-gray-300">
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
            <p className="mb-3 font-normal text-gray-700 line-clamp-5 text-pretty">
                Bodega Flechas de los Andes goza de un entorno inigualable y un terroir único donde se dan dos condiciones esenciales para el buen desarrollo de la uva Malbec: clima seco y una gran altitud. Es aquí donde esta variedad tradicional de uva argentina, ha encontrado el lugar ideal para desarrollar todo su potencial.
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Vea Más
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
     </div>
  )
}
