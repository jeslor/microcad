"use client";
import HeroSlider from '@/components/slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
     {/* <section className="slider">
     <HeroSlider />
     </section> */}
    <div className="Herobarner flex-col items-center justify-between p-24 bg-primayColor">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <div className="left flex flex-col text-light-2">
          <h1 className="text-7xl font-bold">Microcad</h1>
          <p className="text-2xl">Computer Corp is a nationwide distributor of computer products. Established since 1991, we have the experience and the means to provide you with the latest products and technologies to cater to all of your home/business applications.</p>
        </div>
        <div className="right">
          <Image src="/media/hero1.webp" alt="hero" width={500} height={500} />
        </div>
      </div>
    </div>
    </main>
  )
}
