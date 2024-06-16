import CardTour from './cardTour'
import Image from 'next/image'

interface Tours {
  title: string
  description: string
  image: string
}

const toursLujan: Tours[] = [
  {
    title: 'Bodega Catena Zapata',
    description: 'Bodega Flechas de los Andes goza de un entorno inigualable y un terroir único donde se dan dos condiciones esenciales para el buen desarrollo de la uva Malbec: clima seco y una gran altitud. Es aquí donde esta variedad tradicional de uva argentina, ha encontrado el lugar ideal para desarrollar todo su potencial.',
    image: ''
  },
  {
    title: 'Bodega Zuccardi',
    description: 'Bodega Flechas de los Andes goza de un entorno inigualable y un terroir único donde se dan dos condiciones esenciales para el buen desarrollo de la uva Malbec: clima seco y una gran altitud. Es aquí donde esta variedad tradicional de uva argentina, ha encontrado el lugar ideal para desarrollar todo su potencial.',
    image: ''
  }
]

export default function ExperienceLujan () {
  return (
    <section>
        <div className="relative w-full h-96 brightness-75">
            <Image src="/Experience-LujanCuyo.webp"
                alt="Imagen Bodega Flecha de los Andes"
                width={1280}
                height={300}
                className="absolute object-center object-cover w-full h-full"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-center text-gray-100">
                Experiences Lujan de Cuyo
            </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
            {
                toursLujan.map(tour => (
                    <li key={tour.title}>
                        <CardTour {...tour}/>
                    </li>
                ))
            }
        </ol>
    </section>
  )
}
