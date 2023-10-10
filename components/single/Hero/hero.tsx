import Image from 'next/image'
import styles from './hero.module.css'
import HeroSlider from './slider'

 function  LandingPage() {
  return(
    <section className={`${styles.heroSlider} h-screen bg-dark-1`}>
      <div className={styles.heroBackground}>
        <Image src={'/static/media/backgrounds/gradient-bg.svg'} width={100} height={100} alt="herobg"  />
      </div>
      <div className={styles.sliderDesign}>
        <Image src={'/static/media/illustrations/facets.svg'} width={100} height={100} alt="herobg"  />
      </div>
     <div className={`${styles.sliderContainer} customwidth`}>
        <div className={`${styles.sliderContent}`}>
          <h1 className="text-5xl font-bold text-white pb-3">We are a leading provider of IT solutions</h1>
          <p className="text-white text-md">We are a leading provider of IT solutions Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aut neque voluptas eligendi saepe nisi similique placeat cum nesciunt vero molestias ut excepturi nostrum, perspiciatis optio nihil illum veniam totam.</p>
          <button className="microcadBtn mt-4  ">Go shopping</button>
        </div>
        <HeroSlider />
     </div>
    </section>
  )

 
}

export default LandingPage