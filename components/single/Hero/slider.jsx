import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './slider.module.css'
import './slider.css'
import { Autoplay, Pagination,Scrollbar, EffectCoverflow } from 'swiper/modules';

import { sliderContnet } from '@/constants/slider';
import Link from 'next/link';



export default function HeroSlider() {


  return (
    <Swiper
    className={`${styles.heroSlider} heroSlider`}
    spaceBetween={30}
    loop={true}
    autoplay={{delay:3000,

    }}
    slidesPerView={1}           // added
    speed={3000}  
    pagination={{
      clickable: true
    }}
    effect={'coverflow'}
    grabCursor={true}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 0.5,
      slideShadows: true,
    }}

    modules={[Autoplay, Pagination, EffectCoverflow, Scrollbar]}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

    }}

  >
    {sliderContnet.map((item, index) => (
      <SwiperSlide key={index}>
        <div className={`${styles.eachSlide} bg-slate-100`}>
          <div className={styles.imageHolder}> 
            <img src={`${item.image}`} alt="slider" />
          </div>
          <div className={styles.slideContent}>
            <h5>
              <span className="text-primaryLight font-bold">{item.note}</span>
            </h5>
            <h3 className="text-primaryColor pt-2 pb-3 text-2xl font-bold">{item.title}</h3>
            <p className="text-primarymedium text-sm text-start">{item.description}</p>
          </div>
          <Link className={`${styles.slideButton} microcadBtn`} href={`${item.link}`}>
          {item.button}
          </Link>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}