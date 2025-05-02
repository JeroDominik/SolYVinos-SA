import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sol y Vino</title>
        <meta name="description" content="Explorá experiencias únicas en Mendoza: tours por bodegas, viñedos y paisajes inolvidables en Luján de Cuyo, Maipú, Valle de Uco y Potrerillos."/>

        <meta property="og:title" content="Sol y Vino - Experiencias en Mendoza"/>
        <meta property="og:description" content="Turismo de calidad en Mendoza. Disfrutá de excursiones boutique a viñedos, bodegas y paisajes inolvidables."/>
        <meta property="og:image" content="https://solyvinoexperiences.com/experiencesBoutiqueMaipu/Boutique-SantaJulia.webp"/>
        <meta property="og:image:width" content="560"/>
        <meta property="og:image:height" content="340"/>
        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="es_ES"/>
        <meta property="og:url" content="https://solyvinoexperiences.com/"/>
        <meta property="og:site_name" content="Sol y Vino"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Sol y Vino - Experiencias únicas en Mendoza"/>
        <meta name="twitter:description" content="Descubrí lo mejor del vino, la gastronomía y la naturaleza en Mendoza con nuestras experiencias exclusivas."/>
        <meta name="twitter:image" content="https://solyvinoexperiences.com/experiencesBoutiqueMaipu/Boutique-SantaJulia.webp"/>
      </Head>
      <div className="absolute inset-0 bg-fuchsia-900/70 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      <Component {...pageProps} />
    </>
  )
}
