'use client'

import { useState } from 'react'
import { LogoSolyVino, IconUSA } from './Icons/Icons'

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="fixed top-0 z-40 text-slate-200 w-screen">
      <section className={`${isOpen ? 'bg-neutral-950' : ''} mx-auto flex items-center justify-between py-2 w-full custom-nav px-12`}>
        <LogoSolyVino/>
        <div>
          <button onClick={toggleMenu} id="hamburger-button" className={`${isOpen ? 'toggle-btn' : ''} relative size-7 cursor-pointer text-2xl md:hidden mr-4`}>
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-300 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-300 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-300 after:transition-all after:duration-500 after:content-['']">
            </div>
          </button>
          <nav className="md:block hidden space-x-8 text-xl font-medium" aria-label="main">
            <a href="/#init" className="py-2 px-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Inicio</a>
            <a href="/#aboutus" className="py-2 px-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Sol y Vinos</a>
            <a href="/#experience" className="py-2 px-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Experiences</a>
          </nav>
        </div>
        <button type="button" className="hidden md:inline-flex items-center font-medium justify-center px-4 py-2 text-base sm:text-lg lg:text-xl transition hover:bg-white/10 hover:font-semibold rounded-xl">
            <IconUSA/>
            English
        </button>
      </section>

      <section id="mobile-menu" className={`${isOpen ? 'flex' : 'hidden'} h-screen justify-center absolute w-screen origin-top animate-open-menu flex-col text-3xl`}>
        <nav className="flex h-[92%] flex-col bg-neutral-950 pt-8 relative -top-8 ">
          <a href="/#init" className="w-full py-6 text-center hover:opacity-90" onClick={toggleMenu}>Inicio</a>
          <a href="/#aboutus" className="w-full py-6 text-center hover:opacity-90" onClick={toggleMenu}>Sol y Vinos</a>
          <a href="/#experience" className="w-full py-6 text-center hover:opacity-90" onClick={toggleMenu}>Experiences</a>
        </nav>
      </section>
    </section>
  )
}
