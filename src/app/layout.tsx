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
      <body className="relative h-full w-full bg-neutral-950">
        <div className="absolute inset-0 bg-fuchsia-900/70 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        {children}
      </body>
    </html>
  )
}
