import { IconIg, IconMail, IconWsp } from './Icons/Icons'

export default function Footer ({ dictionary }: any) {
  const { footer } = dictionary

  return (
    <footer className="relative h-full w-full bg-neutral-900 py-14 sm:py-16 lg:py-20 border-t-2 border-t-fuchsia-950/60">
        <div className="absolute inset-0 bg-fuchsia-800 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <div className="backdrop-blur-xl mx-10 md:mx-14 flex flex-col lg:flex-row items-center justify-center md:justify-between">
            <span className="text-base sm:text-lg lg:text-xl text-slate-300 transition hover:text-slate-100 text-center font-semibold">
                © 2024
                <a href="#"> Sol y Vino™</a>
                {footer.FooterRights}
            </span>
            <ul className="flex mt-4 justify-center lg:mt-0 gap-x-2 sm:gap-x-4 items-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-300 transition hover:text-slate-100">{footer.FooterContact}</h3>
                <a href="#" className="size-6 text-slate-300 hover:text-slate-100">
                    <IconIg/>
                </a>
                <a href="#" className="size-6 text-slate-300 hover:text-slate-100">
                    <IconWsp/>
                </a>
                <a href="#" className="size-6 text-slate-300 hover:text-slate-100">
                    <IconMail/>
                </a>
            </ul>
        </div>
    </footer>
  )
}
