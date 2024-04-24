export default function Navbar () {
  return (
    <nav className="mt-4 mb-14 backdrop-blur-xl text-slate-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </a>
        <div className="md:flex items-center justify-between hidden" id="navbar-language">
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 md:space-x-8 md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0" aria-current="page">Inicio</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">Tours</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">Sol y Vinos</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
            <button type="button" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm">
              <svg className="w-5 h-5 rounded-full me-3" aria-hidden="true" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use y="420"/><use y="840"/><use y="1260"/></g><use y="1680"/></g><use x="247" y="210"/></g><use x="494"/></g><use x="988"/><use x="1976"/><use x="2470"/></g></svg>
                English (US)
            </button>
            <button type="button" className="inline-flex items-center p-2 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-language" aria-expanded="false">
              <svg className="size-6" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
