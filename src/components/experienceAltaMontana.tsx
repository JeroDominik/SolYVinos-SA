import CardTour from './cardTour'
import Image from 'next/image'

const toursPotrerillos: any[] = [
  {
    title: 'Experience Palapas',
    introduction: 'Situada en Maipú, Mendoza. Con más de 135 años de historia, es una de las bodegas más antiguas y prestigiosas de Argentina. Ofrece visitas guiadas, degustaciones, y experiencias gastronómicas en su restaurante gourmet  maridando comidas locales con los vinos de Trapiche. La bodega principal está situada en una histórica edificación del siglo XIX, que ha sido restaurada y modernizada. La Bodega es conocida por su Malbec, pero también produce variedades como Cabernet Sauvignon, Syrah, Merlot, y Chardonnay. Sus líneas de vinos destacadas incluyen Trapiche Medalla, Trapiche Broquel, Trapiche Gran Medalla, y su serie de vinos Single Vineyard, que destacan la expresión de terroirs unicos.',
    image: '/experiencesAltaMontana/AltaMontana-Palapas.webp',
    description: 'Viñedos ubicados en diversas zonas de Mendoza, incluyendo el Valle de Uco y Maipú que abarcan una amplia variedad de terroirs, permitiendo la producción de una gama diversa de vinos. Sus vinos han recibido reconocimientos tales como "World Best Vineyards": Trapiche ha sido consistentemente reconocida como una de las mejores bodegas del mundo, figurando en el listado anual de World Best Vineyards. "Premios Decanter": Sus vinos han ganado múltiples premios en los Decanter World Wine Awards, incluyendo medallas de oro para vinos como Trapiche Medalla y Trapiche Gran Medalla. "Wine Spectator y Wine Enthusiast": Ha recibido altas calificaciones destacándose por su Malbec y otras variedades'
  },
  {
    title: 'Experience Velero',
    introduction: 'Embárcate en una experiencia única navegando por el dique Potrerillos. Disfruta de un paseo en velero rodeado de impresionantes paisajes montañosos y el reflejo del cielo en el agua, mientras degustas comidas y bebidas a bordo. Admira las vistas panorámicas de la Cordillera de los Andes y los frondosos bosques que rodean el embalse, perfectos para capturar fotografías y disfrutar de un día al aire libre.',
    image: '/experiencesAltaMontana/AltaMontana-Velero.webp',
    description: 'Este paseo en velero es ideal para celebraciones especiales, escapadas en pareja, o simplemente para relajarse con amigos y familia en un entorno natural incomparable.'
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
          <span className="font-bold"> Potrerillos</span>
        </h2>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
        {
          toursPotrerillos.map(tour => (
            <CardTour key={tour.title} {...tour}/>
          ))
        }
      </ol>
    </section>
  )
}
