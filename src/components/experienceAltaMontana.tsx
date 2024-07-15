import CardTour from './cardTour'
import Image from 'next/image'

const toursAltaMontana: any[] = [
  {
    title: 'Experience Palapas',
    introduction: 'Situada en Maipú, Mendoza. Con más de 135 años de historia, es una de las bodegas más antiguas y prestigiosas de Argentina. Ofrece visitas guiadas, degustaciones, y experiencias gastronómicas en su restaurante gourmet  maridando comidas locales con los vinos de Trapiche. La bodega principal está situada en una histórica edificación del siglo XIX, que ha sido restaurada y modernizada. La Bodega es conocida por su Malbec, pero también produce variedades como Cabernet Sauvignon, Syrah, Merlot, y Chardonnay. Sus líneas de vinos destacadas incluyen Trapiche Medalla, Trapiche Broquel, Trapiche Gran Medalla, y su serie de vinos Single Vineyard, que destacan la expresión de terroirs unicos.',
    image: '/experiencesAltaMontana/AltaMontana-Palapas.webp',
    description: 'Viñedos ubicados en diversas zonas de Mendoza, incluyendo el Valle de Uco y Maipú que abarcan una amplia variedad de terroirs, permitiendo la producción de una gama diversa de vinos. Sus vinos han recibido reconocimientos tales como "World Best Vineyards": Trapiche ha sido consistentemente reconocida como una de las mejores bodegas del mundo, figurando en el listado anual de World Best Vineyards. "Premios Decanter": Sus vinos han ganado múltiples premios en los Decanter World Wine Awards, incluyendo medallas de oro para vinos como Trapiche Medalla y Trapiche Gran Medalla. "Wine Spectator y Wine Enthusiast": Ha recibido altas calificaciones destacándose por su Malbec y otras variedades'
  },
  {
    title: 'Experience Velero',
    introduction: 'Ubicada en el departamento mendocino Maipú. Ofrece visitas guiadas y degustaciones en un entorno atractivo, permitiendo a los visitantes conocer el proceso de elaboración del vino. Además cuenta con experiencias gastronómicas en el restaurante de la bodega, donde se maridan los vinos con cocina gourmet local. La bodega combina un diseño arquitectónico moderno y funcional, diseñado para optimizar el proceso de elaboración del vino. Las instalaciones incluyen una moderna sala de barricas y una cava subterránea para el envejecimiento de los vinos. Especializada en Malbec, Cabernet Sauvignon, Syrah, Bonarda, y Chardonnay, conocidos por su elegancia, frescura y carácter frutal. Las líneas de vinos incluyen Vistandes Reserva y Vistandes Gran Reserva, con un enfoque en la calidad y la expresión del terroir.',
    image: '/experiencesAltaMontana/AltaMontana-Velero.webp',
    description: 'Con viñedos situados en el corazón de Maipú, una de las zonas vitivinícolas más tradicionales y prestigiosas de Mendoza. Los mismos están a una altitud de 850 metros sobre el nivel del mar, beneficiándose de un clima seco y suelos franco-arcillosos. La bodega es conocida tambien por Reconocimientos tales como "International Wine Challenge": Premios obtenidos en varias ediciones de este concurso, destacándose sus vinos Reserva y Gran Reserva. "Decanter World Wine Awards": Medallas de plata y bronce para varios de sus vinos, reconocidos por su calidad y expresión. "Wine Enthusiast": Buenas puntuaciones para sus vinos en esta revista estadounidense, resaltando la consistencia y elegancia de sus productos.'
  }
]

export default function ExperienceAltaMontana () {
  return (
    <section className="py-12">
        <div className="relative w-full h-96 brightness-75 mb-12">
            <Image src="/experiencesAltaMontana/Experience-AltaMontaña.webp"
                alt="Imagen Experiences AltaMontana"
                width={1280}
                height={300}
                className="absolute object-center object-cover w-full h-full"
            />
            <h2 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold text-center text-gray-100">
                Experiences
                <span className="font-bold"> Alta Montaña</span>
            </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
            {
                toursAltaMontana.map(tour => (
                    <li key={tour.title}>
                        <CardTour {...tour}/>
                    </li>
                ))
            }
        </ol>
    </section>
  )
}
