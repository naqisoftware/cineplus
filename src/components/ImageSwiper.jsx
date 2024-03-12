import React from 'react';
import './imageSwiper.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

function ListOfImages({slides, slideChange}) {
  return (
    <Swiper
      effect={'overflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className='animeKdrama'
    >

      {
        slides.map(slide => (
          <SwiperSlide key={slide._id}>
            <img 
              src={process.env.PUBLIC_URL + '/' + slide.image} 
              alt='images' 
              onClick={() => slideChange(slide._id)} />
          </SwiperSlide>
        ))
      }

    </Swiper>

  )
}

export default ListOfImages