import Image from 'next/image'

export default function Navbar () {
  return (
    <section className="sticky top-0 z-10 text-slate-200">
      <section className="mx-auto flex items-center justify-between p-4 max-w-screen-xl w-[90%]">
        <Image className="w-28 h-16 lg:w-40 lg:h-28 hover:scale-110 transition backdrop-blur-sm rounded-full"
          src="/SolyVinosExperience.png"
          alt="Imagen Sol y Vinos"
          width={190}
          height={80}
        />
        <div>
          <button id="hamburger-button" className="relative size-7 cursor-pointer text-3xl md:hidden">
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
            </div>
          </button>
          <nav className="md:block hidden space-x-8 text-xl font-medium" aria-label="main">
            <a href="#" className="py-1 px-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Inicio</a>
            <a href="#" className="py-1 px-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Sol y Vinos</a>
            <a href="#" className="py-1 px-2 transition hover:bg-white/10 hover:font-semibold rounded-xl">Tours</a>
          </nav>
        </div>
        <button type="button" className="hidden md:inline-flex items-center font-medium justify-center px-4 py-2 text-base sm:text-lg lg:text-xl transition hover:bg-white/10 hover:font-semibold rounded-xl">
            <svg className="size-5 lg:size-6 rounded-full me-3" aria-hidden="true" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use y="420"/><use y="840"/><use y="1260"/></g><use y="1680"/></g><use x="247" y="210"/></g><use x="494"/></g><use x="988"/><use x="1976"/><use x="2470"/></g></svg>
            English
        </button>
      </section>

      <section id="mobile-menu" className="top-68 justify-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-3xl">
        <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
          <a href="#" className="w-full py-6 text-center hover:opacity-90">Inicio</a>
          <a href="#" className="w-full py-6 text-center hover:opacity-90">Sol y Vinos</a>
          <a href="#" className="w-full py-6 text-center hover:opacity-90">Tours</a>
        </nav>
      </section>
    </section>
  )
}
