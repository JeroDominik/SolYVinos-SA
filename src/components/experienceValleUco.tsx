import CardTour from './cardTour'
import Image from 'next/image'

const toursValleUco: any[] = [
  {
    title: 'Bodega Salentein',
    introduction: 'Ubicada en el Valle de Uco, en la Provincia de Mendoza. Ofrece visitas guiadas, degustaciones y actividades culturales, algunas como su "Casa Grande", una antigua casa de campo restaurada que funciona como hotel boutique; y su "Espacio Killka", un centro cultural y de arte contemporáneo. La Arquitectura de la bodega cuenta de un diseño innovador con forma de cruz, permitiendo un flujo eficiente del proceso de vinificación. Además cuenta con una cava subterránea que mantiene condiciones óptimas para el envejecimiento del vino. Destacan su Malbec, junto con otras variedades como Cabernet Sauvignon, Merlot, Pinot Noir, Chardonnay y Sauvignon Blanc. La línea de vinos incluye etiquetas reconocidas como Killka, Numina y Primus.',
    image: '/experiencesValleUco/Bodega-Salentein.webp',
    description: 'Posee alrededor de 800 hectáreas de viñedos situados entre 1,050 y 1,700 metros sobre el nivel del mar. El clima y la altitud del Valle de Uco son ideales para la producción de vinos de alta calidad. Sus vinos han recibido múltiples premios y reconocimientos a nivel internacional por su calidad y carácter distintivo.'
  },
  {
    title: 'Bodega Zuccardi',
    introduction: 'Radicada en el Valle de Uco, Provincia de Mendoza. Ofrece experiencias enoturísticas que incluyen visitas guiadas, catas, y actividades educativas. El restaurante de la bodega, ofrece maridajes exquisitos con los vinos Zuccardi. La bodega principal, conocida como "Piedra Infinita," es famosa por su diseño arquitectónico innovador y respetuoso con el entorno. Construida con materiales locales y utilizando técnicas sostenibles, su estructura se integra perfectamente con el paisaje andino. Cuenta de una destacada linea de Malbec, Cabernet Sauvignon, Syrah, y Torrontés que  expresan el terroir del Valle de Uco, con vinos de alta calidad y gran personalidad.',
    image: '/experiencesValleUco/Bodega-Zuccardi.webp',
    description: 'Sus viñedos ubicados en el Valle de Uco, reconocidos por su altitud y suelos aluvionales. Su finca Piedra Infinita, en Paraje Altamira, es uno de sus viñedos más destacados. La Bodega ha logrado reconocimientos como "Mejor Bodega y Viñedo del Mundo" en los Worlds Best Vineyards en 2019, 2020, y 2021. Sus vinos han obtenido múltiples premios y altas calificaciones de críticos internacionales como Jacques Dupont y Tim Atkin'
  },
  {
    title: 'Bodega Andeluna',
    introduction: 'Se encuentra en el Valle de Uco, Provincia de Mendoza. Ofrece experiencias enoturísticas que incluyen visitas guiadas, degustaciones y almuerzos en su restaurante gourmet, donde se pueden maridar los vinos con cocina local. Actividades como paseos por los viñedos y catas a ciegas forman parte de la oferta turística. La bodega combina un diseño arquitectónico moderno con elementos rústicos, integrándose armónicamente con el paisaje andino. Sus instalaciones incluyen una cava subterránea ideal para el envejecimiento de los vinos en barricas de roble. Especializada en Malbec, Cabernet Sauvignon, Merlot, Chardonnay y otras variedades. Algunas de sus lineas destacadas son Andeluna Altitud, Andeluna Pasionado y Andeluna Raíces, enfocada en expresar el carácter del terroir de Gualtallary en cada botella.',
    image: '/experiencesValleUco/Bodega-Andeluna.webp',
    description: 'Sus viñedos estan situados a más de 1,300 metros sobre el nivel del mar en Gualtallary, una subregión del Valle de Uco. Los suelos pedregosos y el clima fresco de alta montaña permiten la producción de vinos con una notable acidez y carácter mineral. En sus reconocimientos podemos encontrar el "Decanter World Wine Awards": Andeluna ha recibido medallas de oro y plata en estos premios por su Andeluna Altitud Malbec y otros vinos. "International Wine Challenge": por su línea Pasionado. "Wine Advocate": Altas puntuaciones de críticos como Robert Parker, especialmente para sus vinos de gama alta'
  },
  {
    title: 'Bodega Alfa Crux',
    introduction: 'Ubicada en el Valle de Uco, en la Provincia de Mendoza. Ofrece visitas guiadas y degustaciones en un entorno impresionante, destacando la belleza del paisaje andino. Su restaurante O. Fournier, ofrece maridajes exquisitos con los vinos de la bodega, realzando la experiencia gastronómica. La bodega cuenta con una arquitectura moderna y funcional, diseñada para optimizar el proceso de vinificación. Construcción integrada con el paisaje, utilizando materiales locales y sostenibles. Especializada en Malbec, Tempranillo, Cabernet Sauvignon, Syrah y Sauvignon Blanc. Sus líneas de vinos incluyen Alfa Crux, Beta Crux, y Crux, cada una representando diferentes niveles de complejidad, carácter y la expresión del terroir.',
    image: '/experiencesValleUco/Bodega-AlfaCrux.webp',
    description: 'Viñedos ubicados en La Consulta, una subregión del Valle de Uco, a una altitud de aproximadamente 1,200 metros sobre el nivel del mar. El clima fresco y los suelos aluvionales del Valle de Uco son ideales para la producción de vinos de alta calidad con gran concentración de sabor. La Bodega ha sido reconocida por Sommerliers como "James Suckling": Puntuaciones sobresalientes para vinos como Alfa Crux Malbec y Beta Crux, con calificaciones superiores a 90 puntos y "Tim Atkin": Reconocimientos en los informes de vinos argentinos de este crítico británico, resaltando la calidad y complejidad de sus vinos.'
  },
  {
    title: 'Bodega DiamAndes',
    introduction: 'Se encuentra en el Valle de Uco, Mendoza. Ofrece visitas guiadas y degustaciones en un entorno espectacular, permitiendo a los visitantes conocer el proceso de elaboración del vino. Cuenta con experiencias gastronómicas en el restaurante de la bodega, donde se maridan los vinos con cocina gourmet local. La bodega cuenta con una arquitectura moderna y elegante, diseñada para integrarse armoniosamente con el paisaje andino. Construida de manera sostenible para optimizar la vinificación. Especializada en Malbec, Cabernet Sauvignon, Merlot, Syrah y Chardonnay. Sus líneas de vinos incluyen DiamAndes de Uco y Perlita de DiamAndes, con un enfoque en la calidad y la expresión del terroir.',
    image: '/experiencesValleUco/Bodega-DiamAndes.webp',
    description: 'Viñedos ubicados a 1,100 metros sobre el nivel del mar en el Valle de Uco, una de las zonas más prestigiosas de Mendoza. Los suelos aluviales y el clima fresco de alta montaña permiten la producción de uvas con excelente acidez y concentración. La bodega ha obtenido reconocimientos como "Worlds Best Vineyards": Ha figurado en el listado de las mejores bodegas del mundo, destacándose por su experiencia enoturística y la calidad de sus vinos. "Decanter World Wine Awards": Medallas de oro y plata para vinos como DiamAndes de Uco y Perlita de DiamAndes. "Wine Spectator": Altas calificaciones para sus vinos, con menciones especiales para su Malbec y Cabernet Sauvignon.'
  }
]

export default function ExperienceValleUco () {
  return (
    <section className="py-12">
        <div className="relative w-full h-96 brightness-75 mb-12">
            <Image src="/experiencesValleUco/Experience-Uco.webp"
                alt="Imagen Experiences Valle de Uco"
                width={1280}
                height={300}
                className="absolute object-center object-cover w-full h-full"
            />
            <h2 className="absolute inset-0 flex flex-col items-center justify-center text-4xl font-semibold text-center text-gray-100">
                Experiences
                <span className="font-bold"> Valle de Uco</span>
            </h2>
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
            {
                toursValleUco.map(tour => (
                    <li key={tour.title}>
                        <CardTour {...tour}/>
                    </li>
                ))
            }
        </ol>
    </section>
  )
}
