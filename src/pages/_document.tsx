import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="es">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <body className="relative h-full w-full bg-neutral-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
