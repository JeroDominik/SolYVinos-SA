import Image from 'next/image'

export default function Navbar () {
  return (
    <nav className="mb-14 backdrop-blur-xl bg-fuchsia-950/10 border-b-2 border-b-fuchsia-950/25 text-slate-300">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <Image className="rounded-full w-20 h-12 sm:w-24 sm:h-14 lg:w-28 lg:h-16"
            src="/solYvinosOpti.jpg"
            alt="Imagen Sol y Vinos"
            width={190}
            height={80}
          />
        </a>
        <div className="md:flex items-center justify-between hidden" id="navbar-language">
          <ul className="flex flex-col md:flex-row text-base lg:text-xl font-medium p-4 md:p-0 mt-4 md:space-x-8 md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 transition hover:text-amber-600 hover:font-semibold">Inicio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 transition hover:text-amber-600 hover:font-semibold">Tours</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 transition hover:text-amber-600 hover:font-semibold">Sol y Vinos</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-1 mt-1 sm:mt-0">
            <button type="button" className="inline-flex items-center font-medium justify-center px-4 py-2 text-base sm:text-lg lg:text-xl transition hover:bg-slate-300 hover:text-fuchsia-950 rounded-xl">
              <svg className="size-5 lg:size-6 rounded-full me-3" aria-hidden="true" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use y="420"/><use y="840"/><use y="1260"/></g><use y="1680"/></g><use x="247" y="210"/></g><use x="494"/></g><use x="988"/><use x="1976"/><use x="2470"/></g></svg>
              English (US)
            </button>
            <button type="button" className="inline-flex items-center p-2 justify-center text-sm md:hidden hover:bg-slate-300 hover:text-fuchsia-950 rounded-xl" aria-controls="navbar-language" aria-expanded="false">
              <svg className="size-4 sm:size-5 lg:size-6" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
