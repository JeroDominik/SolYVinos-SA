import React from 'react'

export default function Footer () {
  return (
    <footer className="relative h-20 w-full bg-neutral-900 py-20 border-t-2 border-t-fuchsia-950/60">
        <div className="absolute inset-0 bg-fuchsia-800 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="mx-14 md:flex md:items-center md:justify-between">
            <span className="text-lg text-slate-300 sm:text-center font-semibold">
                © 2024
                <a href="#"> Sol y Vinos™</a>
                . Todos los Derechos Reservados.
            </span>
            <ul className="flex mt-4 sm:justify-center md:mt-0 gap-x-4 items-center">
                <h3 className="text-lg font-semibold text-slate-300 hover:text-slate-100">Contactanos : </h3>
                <a href="#" className="text-slate-300 hover:text-slate-100">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-slate-100">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-slate-100">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
                </a>
                <a href="#" className="text-slate-300 hover:text-slate-100">
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </a>
            </ul>
        </div>
    </footer>
  )
}
