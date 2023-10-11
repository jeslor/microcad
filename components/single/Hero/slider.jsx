import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './slider.module.css'
import './slider.css'
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

import { sliderContnet } from '@/constants/slider';



export default function HeroSlider() {


  return (
    <Swiper
    className={`${styles.heroSlider} heroSlider`}
    spaceBetween={30}
    loop={true}
    autoplay={{delay:2000}}
    slidesPerView={3}           // added
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
      modifier: 1,
      slideShadows: true,
    }}

    modules={[Autoplay, Pagination, EffectCoverflow]}
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
    onSlideChange={() => console.log('slide change')}

  >
    {sliderContnet.map((item, index) => (
      <SwiperSlide key={index}>
        <div className={`${styles.eachSlide} bg-slate-100`}>
          <div className={styles.imageHolder}> 
          <img src={item.image} alt="slider" />
          </div>
          <h5>
            <span className="text-primaryLight font-bold">{item.user}</span>
          </h5>
          <h3 className="text-primaryColor pt-2 pb-3 text-2xl font-bold">{item.title}</h3>
          <p className="text-primarymedium text-sm text-start">{item.description}</p>
        </div>
      </SwiperSlide>
    ))}

    ...
  </Swiper>
  )
}