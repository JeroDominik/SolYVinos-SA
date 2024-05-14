import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sol y Vinos',
  description: 'Excursiones, tour, experiencias, Mendoza'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
