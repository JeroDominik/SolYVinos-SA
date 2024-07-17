import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sol y Vino',
  description: 'Excursiones, experience, experiencias, tour, Mendoza, Lujan de Cuyo, Maipú, Valle de Uco, turismo, vacaciones, viñedos, bodegas, '
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
