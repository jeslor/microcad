import Image from 'next/image'
import styles from './hero.module.css'
import HeroSlider from './slider'

 function  LandingPage() {
  return(
    <section className={`${styles.heroSlider} bg-dark-1`}>
      <div className={styles.heroBackground}>
        <Image src={'/static/media/backgrounds/gradient-bg.svg'} width={100} height={100} alt="herobg"  />
      </div>
      <div className={styles.sliderDesign}>
        <Image src={'/static/media/illustrations/facets.svg'} width={100} height={100} alt="herobg"  />
      </div>
     <div className={`${styles.sliderContainer} customwidth`}>
        <div className={`${styles.sliderContent}`}>
          <h1 className="text-5xl font-bold text-white pb-3">Microcad, a leading IT Solution in London</h1>
          <p className="text-slate-500 text-md">Microcad Computer Corp is a nationwide distributor of computer products. Established since 1991, we have the experience and the means to provide you with the latest products and technologies to cater to all of your home/business applications.</p>
          <button className="microcadBtn mt-4">Go shopping</button>
        </div>
        <HeroSlider />
     </div>
    </section>
  )

 
}

export default LandingPage