import CardTour from './cardTour'
import Image from 'next/image'

interface Tours {
  title: string
  introduction: string
  description: string
  image: string
}

const toursLujan: Tours[] = [
  {
    title: 'Bodega Catena Zapata',
    introduction: 'Se encuentra en el departamento mendocino Lujan de Cuyo. Ofrece visitas guiadas y degustaciones en un entorno deslumbrante. La bodega tiene un diseño icónico inspirado en las pirámides Mayas, combinando tecnología moderna con elementos tradicionales. Reconocida por su Malbec de clase mundial, también produce variedades como Cabernet Sauvignon, Chardonnay y Cabernet Franc. Cuenta de etiquetas emblemáticas tales como Catena, Catena Alta, y el prestigioso Nicolás Catena Zapata.',
    image: '/experiencesLujan/Bodega-CatenaZapata.webp',
    description: 'Sus viñedos se encuentran ubicados en diversas zonas de Mendoza, incluyendo Luján de Cuyo y el Valle de Uco. Algunos dentro de sus renombradas fincas de alta altitud, como Adrianna y Nicasia, las cuales son célebres por sus terroir únicos. Los vinos de Catena Zapata han recibido innumerables premios y altas calificaciones de críticos internacionales. En 2023, Catena Zapata recibió el prestigioso reconocimiento como "Mejor Viñedo del Mundo" por Worlds Best Vineyards.'
  },
  {
    title: 'Bodega Vistalba',
    introduction: 'Ubicada en el departamento mendocino Lujan de Cuyo. Ofrece visitas guiadas y degustaciones en un entorno atractivo, permitiendo a los visitantes conocer el proceso de elaboración del vino. Además cuenta con Restaurante que ofrece experiencias gastronómicas maridando sus vinos con cocina gourmet local. La bodega cuenta con una arquitectura moderna y funcional, diseñada para optimizar el proceso de elaboración del vino. Especializada en Malbec, Cabernet Sauvignon, Merlot y Chardonnay. Las líneas de vinos incluyen "Corte A", "Corte B" y "Corte C", cada una representando diferentes niveles de complejidad y envejecimiento. ',
    image: '/experiencesLujan/Bodega-Vistalba.webp',
    description: 'Sus viñedos se encuentran situados en Luján de Cuyo, una de las zonas vitivinícolas más prestigiosas de Mendoza, conocida por sus excelentes condiciones para el cultivo de la vid. Los viñedos están a una altitud de 980 metros sobre el nivel del mar, beneficiándose de un clima seco y suelos franco-arenosos. Sus vinos han recibido reconocimientos tales como "Wine Spectator": Puntuaciones altas para vinos como Corte A y Corte B, que destacan por su elegancia y estructura. "Descorchados": Reconocimientos en esta guía anual de vinos sudamericanos, resaltando la calidad y expresión del terroir en sus vinos. "Tim Atkin": Altas calificaciones en los informes de vinos argentinos, especialmente para sus vinos de alta gama.'
  },
  {
    title: 'Bodega Chandon',
    introduction: 'Situada en el departamento mendocino Lujan de Cuyo. Ofrece visitas guiadas y degustaciones en un entorno elegante, permitiendo a los visitantes conocer el proceso de elaboración del vino espumoso. Y cuenta con experiencias gastronómicas en el restaurante de la bodega, donde se maridan los vinos espumosos con cocina gourmet local. La bodega combina un diseño arquitectónico moderno con instalaciones de vanguardia para la elaboración de vinos espumosos. Las instalaciones incluyen áreas específicas para la fermentación, el embotellado y el envejecimiento en cavas subterráneas. Especializada en la producción de vinos espumosos. Sus líneas de vinos incluyen Chandon Brut, Chandon Extra Brut, Chandon Rosé, y Chandon Delice, conocidos por su elegancia, frescura y la consistencia de sus burbujas finas.',
    image: '/experiencesLujan/Bodega-Chandon.webp',
    description: 'Sus viñedos se encuentran situados en Agrelo y Ugarteche, dentro de Luján de Cuyo. Los viñedos están a altitudes que varían entre 1,000 y 1,200 metros sobre el nivel del mar, beneficiándose por el clima seco y suelos franco-arenosos. La bodega es conocida tambien por Reconocimientos tales como "Effervescents du Monde": Medallas de oro y plata para sus vinos espumosos, destacándose en este concurso internacional de vinos espumosos. "International Wine & Spirit Competition (IWSC)": Reconocimientos por la calidad de sus espumosos, con premios para Chandon Brut y Chandon Rosé."Wine Enthusiast y Wine Spectator": Altas calificaciones en estas revistas, consolidando su reputación como uno de los mejores productores de vinos espumosos en Argentina.'
  },
  {
    title: 'Bodega Nieto Senetiner',
    introduction: 'Ubicada en el departamento mendocino Lujan de Cuyo. Ofrece visitas guiadas y degustaciones, permitiendo a los visitantes conocer el proceso de elaboración del vino. Además cuenta de experiencias gastronómicas en su restaurante, donde se maridan los vinos con cocina gourmet local y tradicional argentina. La bodega combina elementos históricos y modernos, con instalaciones que permiten la producción de vinos de alta calidad gracias a su cava subterránea que proporciona condiciones óptimas para el envejecimiento de los vinos en barricas de roble. Especializada en Malbec, Cabernet Sauvignon, Bonarda y Chardonnay, sus vinos son conocidos por su elegancia, complejidad y capacidad de envejecimiento.',
    image: '/experiencesLujan/Bodega-NietoSenetiner.webp',
    description: 'Sus viñedos se encuentran situados principalmente en Vistalba, Luján de Cuyo, y también en Agrelo. Los viñedos se encuentran a altitudes que varían entre 950 y 1,050 metros sobre el nivel del mar, beneficiándose de un clima optimo y suelos aluvionales. Sus vinos la han llevado a ganar Reconocimientos como "Decanter World Wine Awards": Medallas de oro y plata para sus vinos, especialmente su Nieto Senetiner Reserva Malbec. "Wine Advocate": Puntuaciones altas de críticos como Robert Parker, destacando la calidad y consistencia de sus vinos. "Tim Atkin": Reconocimientos en los informes de vinos argentinos, resaltando la gama Don Nicanor y Cadus.'
  }
]

export default function ExperienceLujan () {
  return (
    <section className="py-12">
        <div className="relative w-full h-96 brightness-75 mb-12">
            <Image src="/Experience-LujanCuyo.webp"
                alt="Imagen Experiences Lujan"
                width={1280}
                height={300}
                className="absolute object-center object-cover w-full h-full"
            />
            <h2 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold text-center text-gray-100">
                Experiences
                <span className="font-bold"> Lujan de Cuyo</span>
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
