'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import { EffectFade } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './hero.css'

export default function Hero() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
            >
                <SwiperSlide><img className='brip-hero-slide-img' src='./travel-1.jpg' /></SwiperSlide>
                <SwiperSlide><img className='brip-hero-slide-img' src='./travel-2.webp' /></SwiperSlide>
                <SwiperSlide><img className='brip-hero-slide-img' src='./travel-3.jpg' /></SwiperSlide>
            </Swiper>
        </>
    )
}