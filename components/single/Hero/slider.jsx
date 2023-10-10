import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,loop, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { sliderContnet } from '@/constants/slider';
import styles from './slider.module.css'




export default function HeroSlider() {
  return (
    <Swiper
    className={styles.hersSlider}
    spaceBetween={40}
    slidesPerView={3}
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true, }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
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