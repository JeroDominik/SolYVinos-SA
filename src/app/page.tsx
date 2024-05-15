import Header from '@/components/header'
import AboutUs from '@/components/aboutUs'
import CardTour from '@/components/cardTour'
import Footer from '@/components/footer'

export default function Home () {
  return (
    <main className="flex flex-col mx-auto items-center justify-center overflow-x-hidden">
      <Header/>
      <AboutUs/>
      <section className="relative h-full w-full py-14 sm:py-20 bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <h1 className="flex justify-center items-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-gray-200 gap-2">
          <svg className="size-7 sm:size-8 lg:size-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" /><path d="M9 4v13" /><path d="M15 7v13" /></svg>
          Nuestros Tours
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 py-10 sm:px-10 xl:px-16 rounded-lg sm:w-[90%] lg:max-w-6xl mx-auto">
          <CardTour/>
          <CardTour/>
          <CardTour/>
          <CardTour/>
        </div>
      </section>
      <Footer />
    </main>
  )
}
