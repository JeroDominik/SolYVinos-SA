'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LogoSolyVino, IconUSA, IconSpain, IconBrasil } from './Icons/Icons'

interface HeaderDictionary {
  NavInit: string
  NavExperiences: string
}
interface HeaderProps {
  header: HeaderDictionary
}

export default function Navbar ({ header }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="fixed top-0 z-40 text-slate-200 w-screen">
      <section className={`${isOpen ? 'bg-neutral-950' : ''} mx-auto flex items-center justify-between py-2 w-full custom-nav px-6 md:px-2 lg:px-12`}>
        <LogoSolyVino/>
        <div className="order-3 md:order-none">
          <button onClick={toggleMenu} id="hamburger-button" className={`${isOpen ? 'toggle-btn' : ''} relative size-7 cursor-pointer text-2xl md:hidden mr-4`}>
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-slate-300 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-300 before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-300 after:transition-all after:duration-500 after:content-['']">
            </div>
          </button>
          <nav className="md:flex hidden gap-x-8 text-xl font-medium">
            <a href="#init" className="p-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">{header.NavInit}</a>
            <a href="#aboutus" className="p-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Sol y Vino</a>
            <a href="#experience" className="p-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">{header.NavExperiences}</a>
          </nav>
        </div>
        <div className="gap-x-2 hidden md:flex">
          <Link href="/es" className="p-2 transition hover:bg-white/10 rounded-full">
            <IconSpain/>
          </Link>
          <Link href="/en" className="p-2 transition hover:bg-white/10 rounded-full">
            <IconUSA/>
          </Link>
          <Link href="/pt" className="p-2 transition hover:bg-white/10 rounded-full">
            <IconBrasil/>
          </Link>
        </div>
      </section>

      <section className={`${isOpen ? 'flex' : 'hidden'} h-screen justify-center absolute w-screen origin-top animate-open-menu flex-col text-3xl`}>
        <nav className="flex h-[92%] flex-col bg-neutral-950 pt-8 relative -top-8">
          <a href="#init" className="w-3/4 py-6 mx-auto text-center hover:opacity-90 border-b-4 border-b-slate-400" onClick={toggleMenu}>{header.NavInit}</a>
          <a href="#aboutus" className="w-3/4 py-6 mx-auto text-center hover:opacity-90 border-b-4 border-b-slate-400" onClick={toggleMenu}>Sol y Vinos</a>
          <a href="#experience" className="w-3/4 py-6 mx-auto text-center hover:opacity-90 border-b-4 border-b-slate-400" onClick={toggleMenu}>{header.NavExperiences}</a>
          <div className="flex gap-x-4 justify-center relative py-6">
            <Link href="/es" className="size-14 transition hover:bg-white/5 p-2 rounded-full">
              <IconSpain/>
            </Link>
            <Link href="/en" className="size-14 transition hover:bg-white/5 p-2 rounded-full">
              <IconUSA/>
            </Link>
            <Link href="/pt" className="size-14 transition hover:bg-white/5 p-2 rounded-full">
              <IconBrasil/>
            </Link>
        </div>
        </nav>
      </section>
    </section>
  )
}
