export default function Footer () {
  return (
    <footer className="relative h-full w-full bg-neutral-900 py-14 sm:py-16 lg:py-20 border-t-2 border-t-fuchsia-950/60">
        <div className="absolute inset-0 bg-fuchsia-800 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="backdrop-blur-xl mx-10 md:mx-14 flex flex-col lg:flex-row items-center justify-center md:justify-between">
            <span className="text-base sm:text-lg lg:text-xl text-slate-300 transition hover:text-slate-100 text-center font-semibold">
                © 2024
                <a href="#"> Sol y Vinos™</a>
                . Todos los Derechos Reservados.
            </span>
            <ul className="flex mt-4 justify-center lg:mt-0 gap-x-2 sm:gap-x-4 items-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-300 transition hover:text-slate-100">Contactanos : </h3>
                <a href="#">
                    <svg className="size-6 stroke-slate-300 hover:stroke-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                </a>
                <a href="#">
                    <svg className="size-6 stroke-slate-300 hover:stroke-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                </a>
                <a href="#">
                    <svg className="size-6 stroke-slate-300 hover:stroke-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                </a>
                <a href="#">
                    <svg className="size-6 stroke-slate-300 hover:stroke-slate-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
            </ul>
        </div>
    </footer>
  )
}
