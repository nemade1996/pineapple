import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from "../img/banner-1.webp"
import slider2 from "../img/banner-2.webp"
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Slider = () => {

  return (
    <div>
         <Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={slider1} className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} className='w-full'/>
      </SwiperSlide>
      
    </Swiper>
    </div>
  )
}

export default Slider