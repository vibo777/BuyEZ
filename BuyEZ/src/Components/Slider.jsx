import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination , Navigation , Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000 , disableOnInteraction: false }}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src="https://velaflash.myshopify.com/cdn/shop/files/slideg31_1512x.jpg?v=1621089040" alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src="https://velaflash.myshopify.com/cdn/shop/files/slideg33_1512x.jpg?v=1621089040" alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src="https://velaflash.myshopify.com/cdn/shop/files/slideg32_1512x.jpg?v=1621089040" alt="Slide 3" /></SwiperSlide>
    </Swiper>
  )
}
