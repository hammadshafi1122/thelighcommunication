import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

import Image1 from "../../assets/images/bpo1.jpg"
import Image2 from "../../assets/images/bpo2.jpg"
import Video1 from "../../assets/videos/office.mp4"

export default function BackgroundSlider() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <style>{`
        .bg-slider { position: absolute !important; inset: 0 !important; width: 100% !important; height: 100% !important; }
        .bg-slider .swiper-wrapper { height: 100% !important; }
        .bg-slider .swiper-slide { height: 100% !important; }
      `}</style>

      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop={true}
        className="bg-slider"
      >
        <SwiperSlide>
          <img src={Image1} className="absolute inset-0 w-full h-full object-cover" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={Video1} type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Image2} className="absolute inset-0 w-full h-full object-cover" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}