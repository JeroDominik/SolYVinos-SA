import CardTour from './cardTour'
import Image from 'next/image'

const toursMaipu: any[] = [
  {
    title: 'Bodega Trapiche',
    introduction: 'Situada en Maipú, Mendoza. Con más de 135 años de historia, es una de las bodegas más antiguas y prestigiosas de Argentina. Ofrece visitas guiadas, degustaciones, y experiencias gastronómicas en su restaurante gourmet  maridando comidas locales con los vinos de Trapiche. La bodega principal está situada en una histórica edificación del siglo XIX, que ha sido restaurada y modernizada. La Bodega es conocida por su Malbec, pero también produce variedades como Cabernet Sauvignon, Syrah, Merlot, y Chardonnay. Sus líneas de vinos destacadas incluyen Trapiche Medalla, Trapiche Broquel, Trapiche Gran Medalla, y su serie de vinos Single Vineyard, que destacan la expresión de terroirs unicos.',
    image: '/experiencesMaipu/Bodega-Trapiche.webp',
    description: 'Viñedos ubicados en diversas zonas de Mendoza, incluyendo el Valle de Uco y Maipú que abarcan una amplia variedad de terroirs, permitiendo la producción de una gama diversa de vinos. Sus vinos han recibido reconocimientos tales como "World Best Vineyards": Trapiche ha sido consistentemente reconocida como una de las mejores bodegas del mundo, figurando en el listado anual de World Best Vineyards. "Premios Decanter": Sus vinos han ganado múltiples premios en los Decanter World Wine Awards, incluyendo medallas de oro para vinos como Trapiche Medalla y Trapiche Gran Medalla. "Wine Spectator y Wine Enthusiast": Ha recibido altas calificaciones destacándose por su Malbec y otras variedades'
  },
  {
    title: 'Bodega Vistandes',
    introduction: 'Ubicada en el departamento mendocino Maipú. Ofrece visitas guiadas y degustaciones en un entorno atractivo, permitiendo a los visitantes conocer el proceso de elaboración del vino. Además cuenta con experiencias gastronómicas en el restaurante de la bodega, donde se maridan los vinos con cocina gourmet local. La bodega combina un diseño arquitectónico moderno y funcional, diseñado para optimizar el proceso de elaboración del vino. Las instalaciones incluyen una moderna sala de barricas y una cava subterránea para el envejecimiento de los vinos. Especializada en Malbec, Cabernet Sauvignon, Syrah, Bonarda, y Chardonnay, conocidos por su elegancia, frescura y carácter frutal. Las líneas de vinos incluyen Vistandes Reserva y Vistandes Gran Reserva, con un enfoque en la calidad y la expresión del terroir.',
    image: '/experiencesMaipu/Bodega-Vistandes.webp',
    description: 'Con viñedos situados en el corazón de Maipú, una de las zonas vitivinícolas más tradicionales y prestigiosas de Mendoza. Los mismos están a una altitud de 850 metros sobre el nivel del mar, beneficiándose de un clima seco y suelos franco-arcillosos. La bodega es conocida tambien por Reconocimientos tales como "International Wine Challenge": Premios obtenidos en varias ediciones de este concurso, destacándose sus vinos Reserva y Gran Reserva. "Decanter World Wine Awards": Medallas de plata y bronce para varios de sus vinos, reconocidos por su calidad y expresión. "Wine Enthusiast": Buenas puntuaciones para sus vinos en esta revista estadounidense, resaltando la consistencia y elegancia de sus productos.'
  },
  {
    title: 'Casa Vigil',
    introduction: 'Ubicada en el departamento mendocino Maipú. Ofrece visitas guiadas y degustaciones, permitiendo a los visitantes conocer el proceso de elaboración del vino y disfrutar de la hospitalidad mendocina. Experiencias gastronómicas en el restaurante "Casa Vigil," donde se maridan los vinos con cocina gourmet local. La bodega principal es famosa por su diseño arquitectónico innovador y respetuoso con el entorno. Construida con materiales locales y utilizando técnicas sostenibles, su estructura se integra perfectamente con el paisaje andino. Especializada en Malbec, Cabernet Franc, Cabernet Sauvignon y Chardonnay. Las líneas de vinos incluyen "El Enemigo", "Gran Enemigo" y "Chachingo," destacándose por su alta calidad y carácter distintivo.',
    image: '/experiencesMaipu/Bodega-Vigil.webp',
    description: 'Sus viñedos están situados en Maipú y otras zonas seleccionadas de Mendoza. Se benefician de altitudes que varían entre 800 y 1,100 metros sobre el nivel del mar, suelos aluviales y un clima seco, ideal para el cultivo de uvas de alta calidad. La Bodega ha ganado premios tales como "Wine Advocate": Altas puntuaciones de críticos como Robert Parker, especialmente para la línea El Enemigo. "Decanter World Wine Awards": Medallas de oro y plata para varios de sus vinos, destacándose Gran Enemigo y El Enemigo Malbec. "James Suckling": Puntuaciones sobresalientes para sus vinos, con menciones especiales para su elegancia y complejidad. "Tim Atkin": Reconocimientos en sus informes anuales de vinos argentinos, destacando la innovación y la calidad constante de Casa Vigil.'
  },
  {
    title: 'Olivícola Maguay',
    introduction: 'Se encuentra en el departamento mendocino Maipú. Ofrece visitas guiadas a los olivares y a la planta de producción, permitiendo a los visitantes conocer el proceso de elaboración del aceite de oliva, junto con experiencias gastronómicas donde se maridan los aceites con cocina local. Sus Olivares se encuentran a una altitud de 700 metros sobre el nivel del mar, con un clima seco y suelos aluvionales, ideales para la producción de aceitunas de alta calidad. El Aceite de oliva extra virgen es el principal producto, reconocido por su sabor y calidad. También producen aceites saborizados y productos derivados del aceite de oliva.',
    image: '/experiencesMaipu/Olivicola-Maguay.webp',
    description: 'Ha recibido reconocimientos tales como "Sol De Oro": Premios en esta competencia internacional de aceites de oliva, destacándose por la calidad de sus productos. "Premios Olivinus": Reconocimientos en una de las competiciones más importantes de aceites de oliva de América Latina, con medallas de oro y plata para sus aceites extra virgen. "Terra Olivo": Premios obtenidos en este concurso internacional celebrado en Israel, destacando la calidad y sabor de sus aceites.'
  }
]

export default function ExperienceMaipu () {
  return (
    <section className="py-12">
        <div className="relative w-full h-96 brightness-75 mb-12">
            <Image src="/experiencesMaipu/Experience-Maipu-Viñedo.webp"
                alt="Imagen Experiences Maipu"
                width={1280}
                height={300}
                className="absolute object-center object-cover w-full h-full"
            />
            <h2 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold text-center text-gray-100">
                Experiences
                <span className="font-bold"> Maipú</span>
            </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
            {
              toursMaipu.map(tour => (
                <CardTour key={tour.title} {...tour}/>
              ))
            }
        </ol>
    </section>
  )
}
