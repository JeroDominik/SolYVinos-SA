import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sol y Vino</title>
        <meta name="description" content="Excursiones, experience, experiencias, tour, Mendoza, Lujan de Cuyo, Maipú, Valle de Uco, turismo, vacaciones, viñedos, bodegas," />
      </Head>
      <div className="absolute inset-0 bg-fuchsia-900/70 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      <Component {...pageProps} />
    </>
  )
}
