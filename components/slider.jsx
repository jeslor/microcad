'use client';
import {sliderContnet} from "@/constants/slider"
const $ = require('jquery');
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
  

 function  HeroSlider() {
  return(
    <OwlCarousel>
      {sliderContnet.map((item, index) => (
       <div>
        {item.title}
       </div>
      ))}
    </OwlCarousel>
  )

 
}

export default HeroSlider