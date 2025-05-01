import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="relative h-full w-full bg-neutral-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
